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
			this.lastMessage = Date.now()
			
			this.acknowledgements = []

			this.ws.on("error", (err) => {
				/**
				 * Used internally for when the WebSocket experiences an error.
				 * 
				 * @event Socket#error
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
				 * @event Socket#event
				 * @param {object} json - The message data sent by the server.
				 */
				this.emit(json.type, json)

				this.lastMessage = Date.now()

				switch (json.type) {
					case "Acknowledgement":
						if (!this.acknowledgements.includes(json.message)) {
							this.acknowledgements.push(json.message)
						}
						break
					case "Ping":
						this.send("Pong", Date.now())
						break
					case "Disconnect":
						this.server.disconnect()
						switch (json.message) {
							case "Unauthorized":
								/**
								 * @throws Will throw an error if you are unauthorized to the server.
								 */
								throw Error("Unauthorized!")
								break
							case "TimedOut":
								/**
								 * @throws Will throw an error if you fail to send a message to the server for 5 seconds.
								 */
								 throw Error("Timed out!")
								 break
						}
						break
				}
			})

			setInterval(() => {
				if (Date.now() - this.lastMessage > 5000) {
					this.server.disconnect()
					throw Error("Timed out!")
				}
			}, 1000)
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
			var ack = uuid()

			this.ws.send(JSON.stringify({
				type: type,
				message: message,
				ack: ack,
				auth: this.server.options.get("auth") ?? "none",
				timestamp: Date.now()
			}))

			/* wait until an acknowledgement is received */
			let timeout = setInterval(() => {
				if (this.acknowledgements.includes(ack)) {
					clearInterval(timeout)
					resolve()
				}
			}, 1)
		})
	}

	/**
	 * Disconnects from the WebSocket.
	 * @function
	 */
	 async disconnect() {
	   	this.ws.terminate()
	   	this.connected = false
		this.server.connected = false
	   /**
		 * Fired when the WebSocket disconnects.
		 * 
		 * @event Socket#disconnect
		 */
		this.emit("disconnect", true)
   }
}

/**
 * @typedef Messages
 * @property {string} PrintToServer - Prints a message to the server's console.
 * @property {string} ServerCommand - Executes a command in the server's console.
 * @property {string} FetchPlayer - Instructs the server to send a PlayerUpdate event for a specific client.
 * @property {string} FetchPlayers - Instructs the server to send PlayerUpdate events for every client connected.
 * @property {string} KickPlayer - Kicks a player from the server.
 * @property {string} PlayerChat - Sends a chat message to a specific player.
 * @property {string} PlayerChatAll - Sends a chat message to all players.
 * @property {string} Pong - Sent in response to a Ping event.
 * @property {string} FetchServer - Instructs the server to send a ServerUpdate event.
 * @property {string} PlayerHint - Sends a hint text message to a specific player.
 * @property {string} PlayerHintAll - Sends a hint text message to all players.
 * @property {string} PlayerCenterHint - Sends a center hint text message to a specific player.
 * @property {string} PlayerCenterHintAll - Sends a center hint text message to all players.
 * @property {string} PlaySound - Plays a sound to a specific player.
 * @property {string} PlaySoundAll - Plays a sound to all players.
 * @property {string} SetMap - Forcefully changes the server's map
 * @property {string} SetNextMap - Sets the server's next map.
 * @property {string} TeleportPlayer - Teleports a player to another player.
 * @property {string} SlapPlayer - Slaps a player.
 * @property {string} SetPlayerRendering - Sets a player's rendering color/effect/mode.
 */
 export const Messages = {
	PrintToServer: "PrintToServer",
	ServerCommand: "ServerCommand",
	FetchPlayer: "FetchPlayer",
	FetchPlayers: "FetchPlayers",
	KickPlayer: "KickPlayer",
	PlayerChat: "PlayerChat",
	PlayerChatAll: "PlayerChatAll",
	Pong: "Pong",
	FetchServer: "FetchServer",
	PlayerHint: "PlayerHint",
	PlayerHintAll: "PlayerHintAll",
	PlayerCenterHint: "PlayerCenterHint",
	PlayerCenterHintAll: "PlayerCenterHintAll",
	PlaySound: "PlaySound",
	PlaySoundAll: "PlaySoundAll",
	SetMap: "SetMap",
	SetNextMap: "SetNextMap",
	TeleportPlayer: "TeleportPlayer",
	SlapPlayer: "SlapPlayer",
	SetPlayerRendering: "SetPlayerRendering"
}

/**
 * @typedef Events
 * @property {string} PlayerChat - Received when a player sends a message in chat.
 * @property {string} PlayerUpdate - Contains information about a connected player. Received after running `Players.fetch()` or `Player.fetch()`.
 * @property {string} PlayerConnect - Received when a player connects.
 * @property {string} PlayerDisconnect - Received when a player disconnects.
 * @property {string} Disconnect - Received if the client was disconnected by the server. A reason should be provided.
 * @property {string} Ping - Sent by the server every second to ensure a client is still connected. Expects the Pong response.
 * @property {string} ServerUpdate - Contains information about the server. Received after running `Server.fetch()`.
 * @property {string} ConVarChanged - Received when a ConVar changes.
 */
export const Events = {
	PlayerChat: "PlayerChat",
	PlayerUpdate: "PlayerUpdate",
	PlayerConnect: "PlayerConnect",
	PlayerDisconnect: "PlayerDisconnect",
	Disconnect: "Disconnect",
	Ping: "Ping",
	ServerUpdate: "ServerUpdate",
	ConVarChanged: "ConVarChanged"
}

/**
 * @typedef DisconnectReasons
 * @property {string} Disconnect - Provided when a client willingly disconnects from the server.
 * @property {string} Unauthorized - Provided when a client fails authentication and is kicked.
 * @property {string} TimedOut - Provided when a client doesn't send a message for 5 seconds.
 * @property {string} UnknownError - Provided when an unknown error occured on the server.
 */
 export const DisconnectReasons = {
	Disconnect: "Disconnect",
	Unauthorized: "Unauthorized",
	TimedOut: "TimedOut",
	UnknownError: "UnknownError"
}