import EventEmitter from "events"
import { WebSocket } from "ws"
import { uuid } from "../utils.js"

/**
 * Object for sending and receiving messages the raw WebSocket.
 * It is not recommended to use this object in your code, as it is used internally.
 * 
 * Accessable from a `Server` object via `Server.socket`.
 * 
 * @class
 * @property {string} host - The host WebSocket address. Example: `ws://localhost:5050`
 * @property {bool} connected - Will be true if the server is connected to the WebSocket, and false otherwise.
 * @property {object} server - The `Server` object this belongs to.
 * @property {object} ws - The WebSocket class provided by the `ws` module. Used for actually sending and receiving messages.
 * @property {array} acknowledgements - List of acknowledgements received from the server. Used to recognize when the server successfully processes a message.
 */
export class Socket extends EventEmitter {
	/**
	 * @constructor
	 * @param {object} server - The `Server` object this belongs to.
	 * @param {string} host - Websocket address. Example: `ws://localhost:5050`
	 */
	constructor (server, host) {
		super()
		return new Promise((resolve, reject) => {
			this.host = host
			this.connected = false
			this.server = server
			this.ws = new WebSocket(host)
			
			this.acknowledgements = []

			this.ws.on("error", (err) => {
				/**
				 * Used internally for when the WebSocket experiences an error.
				 * 
				 * @event Server#connected
				 * @param {Error} error - The error that occured.
				 */
				this.emit("error", err)
				reject(new Error(`Failed to connect to WebSocket server! Error: ${err}`))
			})
			this.ws.on("open", () => {
				this.connected = true
				this.server.connected = true
				/**
				 * Fired when the connection to the server has been established.
				 * 
				 * @event Socket#ready
				 */
				this.emit("ready", true)
				resolve(this)
			})
			this.ws.on("message", (data) => {
				/**
				 * Fired when a WebSocket packet is received.
				 * 
				 * @event Socket#raw
				 * @param {Buffer} data - Raw data sent by the server.
				 */
				this.emit("raw", data)
				
				var json
				try { json = JSON.parse(data) } catch (err) { throw err }
				/**
				 * Used internally for when a raw event is received from the server.
				 * It isn't recommended to use this event in your code.
				 * 
				 * @event Server#event
				 * @param {object} json - The message data sent by the server.
				 */
				this.emit(json.type, json)

				if (json.type == "Acknowledgement") {
					if (!this.acknowledgements.includes(json.message)) {
						this.acknowledgements.push(json.message)
					}
				}
			})
		})
	}

	/**
	 * Sends a raw message to the WebSocket
	 * @function
	 * @param {string} type
	 * @param {object} message 
	 */
	 async send(type, message) {
		return new Promise((resolve, reject) => {
			var acknowledgement = uuid()

			this.ws.send(JSON.stringify({
				type: type,
				message: message,
				acknowledgement: acknowledgement,
				timestamp: Date.now()
			}))

			/* wait until an acknowledgement is received */
			let timeout = setInterval(() => {
				if (this.acknowledgements.includes(acknowledgement)) {
					clearInterval(timeout)
					resolve()
				}
			}, 1)
		})
	}
}

/**
 * @typedef Messages
 * @property {string} PrintToServer - Prints a message to the server's console.
 * @property {string} ServerCommand - Executes a command in the server's console.
 * @property {string} FetchPlayers - Instructs the server to PlayerUpdate events for every client connected.
 * @property {string} KickPlayer - Kicks a player from the server.
 * @property {string} PlayerChat - Sends a chat message to a specific player.
 * @property {string} PlayerChatAll - Sends a chat message to all players.
 */
 export const Messages = {
	PrintToServer: "PrintToServer",
	ServerCommand: "ServerCommand",
	FetchPlayers: "FetchPlayers",
	KickPlayer: "KickPlayer",
	PlayerChat: "PlayerChat",
	PlayerChatAll: "PlayerChatAll"
}

/**
 * @typedef Events
 * @property {string} PlayerChat - Received when a player sends a message in chat.
 * @property {string} PlayerUpdate - Contains information about a connected player. Received after running `Players.fetch()`
 * @property {string} PlayerConnect - Received when a player connects.
 * @property {string} PlayerDisconnect - Received when a player disconnects.
 */
export const Events = {
	PlayerChat: "PlayerChat",
	PlayerUpdate: "PlayerUpdate",
	PlayerConnect: "PlayerConnect",
	PlayerDisconnect: "PlayerDisconnect"
}