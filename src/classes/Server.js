import EventEmitter from "events"
import { Events, Messages, Socket } from "./Socket.js"
import { Console } from "./Console.js"
import { Game } from "./Game.js"
import { Players } from "./Players.js"

/**
 * Root object for interacting with SourceMod.js servers.
 * @class
 * @property {string} host - The host WebSocket address. Example: `ws://localhost:5050`
 * @property {bool} connected - Will be true if the server is connected to the WebSocket, and false otherwise.
 * @property {object} socket - An instance of the `Socket` class used for interacting with the WebSocket. Will be null if not yet connected.
 * @property {object} console - Instance of the `Console` object for this server.
 * @property {object} players - Instance of the `Players` object for this server.
 * @property {string} currentMap - Name of the current map.  Keep in mind that this is a generic response from the engine and not the game itself.
 * @property {bool} isDedicated - Whether the server is a dedicated server or not.
 * @property {sring} authID - The SteamID of the server.
 * @property {number} gameTime - The game time, based on the game tick.
 * @property {number} gameTick - The current game tick.
 * @property {string} gameFolder - The directory of the server.
 * @property {string} gameDescription - The description of the game. Keep in mind that this is a generic response from the engine, and not the game itself.
 * @property {string} engineVersion - The engine version that SourceMod was compilied against.
 */
export class Server extends EventEmitter {
	/**
	 * @constructor
	 * @param {string} host - The host WebSocket address. Example: `ws://localhost:5050`
	 * @param {object} options - Options to provide the server.
	 */
	constructor (host, options) {
		super()
		this.host = host
		this.options = new Map()
		this.connected = false
		this.socket = null
		this.console = new Console(this)
		this.players = new Players(this)
		this.game = null

		this.currentMap = ""
		this.nextMap = ""
		this.isDedicated = null
		this.authID = ""
		this.gameTime = 0
		this.gameTick = 0
		this.gameFolder = ""
		this.gameDescription = ""
		this.engineVersion = ""

		if (options) this.options = new Map(Object.entries(options))
	}

	/**
	 * Connects to the server.
	 * @function
	 */
	async connect() {
		await new Socket(this, this.host)
			.then(async (socket) => {
				this.socket = socket

				this.socket.on(Events.ServerUpdate, (data) => {
					var msg = data.message
		
					for (const i of ["currentMap", "nextMap", "isDedicated", "authID", "gameTime", "gameTick", "gameFolder", "gameDescription", "engineVersion"]) {
						if (msg[i]) this[i] = msg[i]
					}
				})
				this.socket.on(Events.ConVarChanged, (data) => {
					/**
					 * Fires when a ConVar changes.
					 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#server_cvar)
					 * 
					 * @event Server#convarChanged
					 * @param {string} name - Name of the ConVar.
					 * @param {string} steamid - New value of the ConVar.
					 */
					this.emit("convarChanged", 
						data.message.name,
						data.message.value
					)
				})

				await this.fetch()

				switch (this.gameDescription) {
					case "Team Fortress":
						await import("../games/TeamFortress2.js").then(module => {
							this.game = new module.TeamFortress2()
							this.game.serverModifier(this)
						})
						break
					default:
						this.game = new Game()
						this.game.serverModifier(this)
				}

				/**
				 * Fired when the connection to the server has been established.
				 * 
				 * @event Server#ready
				 */
				this.emit("ready", true)
			})
			.catch(err => { throw err })
	}

	/**
	 * Disconnects from the server. Internally calls Socket.disconnect().
	 * @function
	 */
	 async disconnect() {
		this.socket.disconnect()
		/**
		 * Fired when the server disconnects.
		 * 
		 * @event Server#disconnect
		 */
		this.emit("disconnect", true)
	}

	/**
	 * Fetches information about the server. Keep in mind that you must run this function to keep the server information up-to-date.
	 * @function
	 * @returns {Object} The new server object with fetched information.
	 */
	 async fetch() {
		if (this.socket == undefined) return
		await this.socket.send(Messages.FetchServer, this.id)
		return this
	}

	/**
	 * Forcefully changes the current map, with an optional reason.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
	 * @function
	 * @param {string} - Name of the new map
	 * @param {string} - Reason for changing the map
	 * @returns {Object} - The new server object with fetched information.
	 */
	 async setMap(map, reason) {
		if (this.socket == undefined) return
		await this.socket.send(Messages.SetMap, {
			map: map,
			reason: reason ?? "No reason provided!"
		})
		await this.fetch()
		return this.nextMap
	}

	/**
	 * Sets SourceMod's internal nextmap. Same as changing `sm_nextmap`. Will run `Server.fetch()`, ensuring the nextMap property is updated.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
	 * @function
	 * @param {string} - Name of the new map
	 * @returns {Object} - The new server object with fetched information.
	 */
	async setNextMap(map) {
		if (this.socket == undefined) return
		await this.socket.send(Messages.SetNextMap, map)
		await this.fetch()
		return this.nextMap
	}
}