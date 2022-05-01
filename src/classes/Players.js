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
			this.server.socket.on(Events.PlayerUpdate, (message) => {
				var data = message.message
				if (this.players.get(data.id)) {
					this.players.get(data.id).update(data)
				} else {
					this.players.set(data.id, new Player(this, data))
				}
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
				 * @param {string} steamid - Steam ID of the player, in SteamID3 format (example: `[U:1:1049895252]`). Will be `BOT` if the player is a bot.
				 * @param {bool} bot - Will be true if this player is a TFBot (or otherwise not a human player), or false if otherwise.
				 */
				this.emit("connect",
					playerdata.userid,
					playerdata.name,
					playerdata.ip,
					playerdata.networkid,
					playerdata.bot
				)
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
				this.emit("disconnect", 
					playerdata.userid,
					playerdata.name,
					playerdata.networkid,
					playerdata.reason,
					playerdata.bot
				)
			})
			this.server.socket.on(Events.PlayerChat, (data) => {
				var msg = data.message
				var plr = this.players.get(msg.userid) ?? new Player(this, {id: msg.userid}, true)
				this.players.set(msg.userid, plr)
				
				/**
				 * Fires when a player sends a chat message.
				 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
				 * 
				 * @event Players#chat
				 * @param {object} player - The player object who sent this message. Will be partial if not cached.
				 * @param {string} message - Content of the chat message.
				 * @param {bool} team - True if the chat message was a team message, and false otherwise.
				 */
				this.emit("chat", 
					plr,
					msg.args,
					msg.command == "say_team"
				)
			})
		})
	}

	/**
	 * Fetches the list of all players currently connected. Keep in mind that `Players.players` will not always be up to date! Use this function to cache the list of players every so often. Similar to `Player.fetch()`
	 * @function
	 * @returns {Map} List of all players currently connected, mapped by ID.
	 */
	async fetch() {
		if (this.server.socket == undefined) return
		this.players.clear()
		await this.server.socket.send(Messages.FetchPlayers, true)
		return this.players
	}

	/**
	 * Gets a player by ID.
	 * @function
	 * @param {number} id - The player's ID
	 * @returns {Object} - Player object, or `null` if not found.
	 */
	get(id) {
		return this.players.get(id) ?? null
	}

	/**
	 * Broadcasts a message to every player's chatbox. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChatAll)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	broadcast(message) {
		if (checkBytes(message, 256)) return
		return this.server.socket.send(Messages.PlayerChatAll, {
			message: message
		})
	}

	/**
	 * Broadcasts a message to a every player's hint box. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintHintTextToAll)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	broadcastHint(message) {
		if (checkBytes(message, 256)) return
		return this.server.socket.send(Messages.PlayerHintAll, {
			id: this.id,
			message: message
		})
	}

	/**
	 * Broadcasts a message to a every player's center hint box. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintCenterTextAll)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	broadcastCenterHint(message) {
		if (checkBytes(message, 256)) return
		return this.server.socket.send(Messages.PlayerCenterHintAll, {
			id: this.id,
			message: message
		})
	}

	/**
	 * Plays a sound to all players. The file path must be a game sound from `scripts/game_sound.txt` or `sound_misc_dir.vpk`. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_sound/EmitGameSoundToClient)
	 * 
	 * @function
	 * @param {string} path - File path to the sound
	 */
	broadcastSound(path) {
		if (checkBytes(path, 256)) return
		return this.server.socket.send(Messages.PlaySoundAll, path)
	}
}