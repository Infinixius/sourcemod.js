import EventEmitter from "events"
import { Events, Messages, Socket } from "./Socket.js"
import { Console } from "./Console.js"
import { Players } from "./Players.js"

/**
 * Root object for interacting with SourceMod.js servers.
 * @class
 * @property {string} host - The host WebSocket address. Example: `ws://localhost:5050`
 * @property {boolean} connected - Will be true if the server is connected to the WebSocket, and false otherwise.
 * @property {object} socket - An instance of the `Socket` class used for interacting with the WebSocket. Will be null if not yet connected.
 * @property {object} console - Instance of the `Console` object for this server.
 * @property {object} players - Instance of the `Players` object for this server.
 * @property {string} currentMap - Name of the current map.  Keep in mind that this is a generic response from the engine and not the game itself.
 * @property {boolean} isDedicated - Whether the server is a dedicated server or not.
 * @property {string} authID - The SteamID of the server.
 * @property {number} gameTime - The game time, based on the game tick.
 * @property {number} gameTick - The current game tick.
 * @property {string} gameFolder - The directory of the server.
 * @property {string} gameDescription - The description of the game. Keep in mind that this is a generic response from the engine, and not the game itself.
 * @property {string} engineVersion - The engine version that SourceMod was compilied against.
 */
export class Server extends EventEmitter {
	host: string
	options: Map<any, any>
	connected: boolean
	socket: Socket | undefined
	console: Console
	players: Players
	game: string
	currentMap: string
	nextMap: string
	isDedicated: boolean | undefined
	authID: string
	gameTime: number
	gameTick: number
	gameFolder: string
	gameDescription: string
	engineVersion: string

	/**
	 * @constructor
	 * @param {string} host - The host WebSocket address. Example: `ws://localhost:5050`
	 * @param {object} options - Options to provide the server.
	 */
	constructor (host: string, options?: object) {
		super()
		this.host = host
		this.options = new Map()
		this.connected = false
		this.socket
		this.console = new Console(this)
		this.players = new Players(this)
		this.game = Game.None

		this.currentMap = ""
		this.nextMap = ""
		this.isDedicated
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
		this.socket = new Socket(this, this.host)

		this.socket.on(Events.ServerUpdate, (data) => {
			var msg = data.message

			this.currentMap = msg.currentMap
			this.nextMap = msg.nextMap
			this.isDedicated = msg.isDedicated
			this.authID = msg.authID
			this.gameTime = msg.gameTime
			this.gameTick = msg.gameTick
			this.gameFolder = msg.gameFolder
			this.gameDescription = msg.gameDescription
			this.engineVersion = msg.engineVersion

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

		this.socket.on("ready", async () => {
			await this.fetch()
			this.connected = true

			switch (this.gameDescription) {
				case "Team Fortress":
					this.game = Game.TeamFortress2
					break
				default:
					this.game = Game.Unknown
					break
			}

			/**
			 * Fired when the connection to the server has been established.
			 * 
			 * @event Server#ready
			 */
			this.emit("ready", true)
		})
	}

	/**
	 * Disconnects from the server. Internally calls Socket.disconnect().
	 * @function
	 */
	 async disconnect() {
		this.socket?.disconnect()
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
		await this.socket.send(Messages.FetchServer, true)
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
	 async setMap(map: string, reason: string) {
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
	async setNextMap(map: string) {
		if (this.socket == undefined) return
		await this.socket.send(Messages.SetNextMap, map)
		await this.fetch()
		return this.nextMap
	}
}

export type Game = typeof Game[keyof typeof Game]
/**
 * An enum describing the supported game that Sourcemod.JS is running on.
 * 
 * @readonly
 * @enum {string} Game
 */
export const Game = {
	None: "None", 
	Unknown: "Unknown",
	TeamFortress2: "TeamFortress2"
}