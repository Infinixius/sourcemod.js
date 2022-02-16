import EventEmitter from "events"
import { Events, Messages } from "./Socket.js"
import { Player } from "./Player.js"

/**
 * Object for interacting with players.
 * @class
 * @property {object} server - The server this belongs to.
 * @property {Map} players - List of players mapped by their ID.
 */
 export class Players extends EventEmitter {
	/**
	 * @constructor
	 * @param {object} server - The server this belongs to.
	 */
	constructor (server) {
		super()
		this.server = server
		this.players = new Map()

		this.server.on("ready", () => {
			this.server.socket.on(Events.PlayerUpdate, (playerdata) => {
				this.players.set(playerdata.id, new Player(this, playerdata))
			})
			this.server.socket.on(Events.PlayerConnect, (playerdata) => {
				/**
				 * Fires when a player connects to the server. Make sure to fetch with `Players.fetch()` before interacting with players.
				 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#player_connect)
				 * 
				 * @event Players#connect
				 * @param {number} id - ID of the player, specific to this server.
				 * @param {string} name - Username of the player.
				 * @param {string} ip - IP address of the player. Will be `none` if this player is a bot.
				 * @param {string} steamid - Steam ID of the player, in steamID3 format (example: `[U:1:1049895252]`). Will be `BOT` if the player is a bot.
				 * @param {bool} bot - Will be true if this player is a TFBot (or otherwise not a human player), or false if otherwise.
				 */
				this.emit("connect", {
					id: playerdata.userid,
					name: playerdata.name,
					ip: playerdata.ip,
					steamid: playerdata.networkid,
					bot: playerdata.bot
				})
			})
			this.server.socket.on(Events.PlayerDisconnect, (playerdata) => {
				/**
				 * Fires when a player disconnects to the server. Make sure to fetch with `Players.fetch()` before interacting with players.
				 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#player_connect)
				 * 
				 * @event Players#disconnect
				 * @param {number} id - ID of the player, specific to this server.
				 * @param {string} name - Username of the player.
				 * @param {string} steamid - Steam ID of the player, in steamID3 format (example: `[U:1:1049895252]`). Will be `BOT` if the player is a bot.
				 * @param {string} reason - Reason for the player disconnecting. (examples: `Client Disconnect`, `Punting bot, server is hibernating`, `Kicked from server`, etc.)
				 * @param {bool} bot - Will be true if this player is a TFBot (or otherwise not a human player), or false if otherwise.
				 */
				this.emit("disconnect", {
					id: playerdata.userid,
					name: playerdata.name,
					steamid: playerdata.networkid,
					reason: playerdata.reason,
					bot: playerdata.bot
				})
			})
			this.server.socket.on(Events.PlayerChat, (data) => {
				var plr = this.players.get(data.userid) ?? new Player(this.server, {id: data.userid}, true)
				
				if (data.command == "say") {
					/**
					 * Fires when a player sends a chat message to everybody.
					 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
					 * 
					 * @event Players#chat
					 * @param {number} id - ID of the player, specific to this server.
					 * @param {string} message - Content of the chat message.
					 */
					this.emit("chat", {
						player: plr,
						message: data.message
					})
				} else if (data.command == "say_team") {
					/**
					 * Fires when a player sends a chat message to their team.
					 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
					 * 
					 * @event Players#teamchat
					 * @param {number} id - ID of the player, specific to this server.
					 * @param {string} message - Content of the chat message.
					 */
					this.emit("teamchat", {
						player: plr,
						message: data.message
					})
				}
			})
		})
	}

	/**
	 * Fetches the list of all players currently connected. Keep in mind that `Players.players` will not always be up to date! Use this function to cache the list of players every so often.
	 * @function
	 * @param {string} type
	 * @param {object} message
	 * @returns {Map} List of all players currently connected, mapped by ID.
	 */
	async fetch() {
		if (this.server.socket == undefined) return
		this.players.clear()
		await this.server.socket.send(Messages.FetchPlayers, true)
		return this.players
	}

	/**
	 * Sends a message every player's chatbox. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChatAll)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	chatAll(message) {
		return this.server.socket.send(Messages.PlayerChatAll, {
			message: message
		})
	}
}