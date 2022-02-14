import EventEmitter from "events"
import { Events, Messages } from "./Socket.js"

/**
 * Object representing a player currently connected to the server.
 * @class
 * @property {object} players - The `Players` object this belongs to.
 * @property {bool} partial - Whether this object is partial or not. Partial objects are only guaranteed to contain the `id` property.
 * @property {number} id - ID of the player.
 * @property {string} name - Name of the player.
 * @property {string} ip - IP address of the player. (without the port)
 * @property {number} health - Amount of health the player has.
 * @property {string} weapon - The current weapon the player has equipped. (Example: `tf_weapon_scattergun`)
 * @property {number} kills - Amount of kills the player currently has.
 * @property {number} deaths - Amount of deaths the player currently has.
 */
 export class Player extends EventEmitter {
	/**
	 * @constructor
	 * @param {string} players - The `Players` object this belongs to.
	 * @param {object} data - Player data sent from the server.
	 * @param {bool} partial - Whether this object is partial or not. Defaults to false.
	 */
	constructor (players, data, partial) {
		super()
		this.players = players
		this.partial = partial ?? false

		this.id = data.id ?? 0
		this.name = data.name ?? ""
		this.ip = data.ip ?? ""
		this.health = data.health ?? 1
		this.weapon = data.weapon ?? ""
		this.kills = data.kills ?? 0
		this.deaths = data.deaths ?? 0

		this.players.on("chat", (data) => {
			/**
			 * Fires when this player sends a chat message to everybody.
			 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
			 * 
			 * @event Player#chat
			 * @param {string} message - Content of the chat message.
			 */
			this.emit("chat", {
				message: data.message
			})
		})

		this.players.on("teamchat", (data) => {
			/**
			 * Fires when this player sends a chat message to their own team.
			 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
			 * 
			 * @event Player#teamchat
			 * @param {string} message - Content of the chat message.
			 */
			this.emit("teamchat", {
				message: data.message
			})
		})
	}

	/**
	 * Kicks a player from the server.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/clients/KickClient)
	 * 
	 * @function
	 * @param {string} reason - The reason for the kick. Cannot exceed 256 bytes.
	 */
	kick(reason) {
		return this.players.server.socket.send(Messages.KickPlayer, {
			id: this.id,
			reason: reason
		})
	}

	/**
	 * Sends a message to a player's chatbox. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChat)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	chat(message) {
		return this.players.server.socket.send(Messages.PlayerChat, {
			id: this.id,
			message: message
		})
	}
}