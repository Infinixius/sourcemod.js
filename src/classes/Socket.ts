import EventEmitter from "events"
import { Server } from "./Server.js"
import { WebSocket } from "ws"
import { UID } from "./Utilities.js"

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
	host: string
	connected: boolean
	server: Server
	ws: WebSocket
	lastMessage: number
	authhash: string
	acknowledgements: Array<string>

	/**
	 * @constructor
	 * @param {Server} server - The `Server` object this belongs to.
	 * @param {string} host - Websocket address. Example: `ws://localhost:5050`
	 */
	constructor (server: Server, host: string) {
		super()
		this.host = host
		this.connected = false
		this.server = server
		this.ws = new WebSocket(host)
		this.lastMessage = Date.now()
		this.authhash = ""
		this.acknowledgements = []

		this.ws.on("error", (err: string) => {
			/**
			 * Used internally for when the WebSocket experiences an error.
			 * 
			 * @event Socket#error
			 * @param {Error} error - The error that occured.
			 */
			this.emit("error", err)
		})
		this.ws.on("open", () => {
			this.connected = true
			/**
			 * Fired when the connection to the server has been established.
			 * 
			 * @event Socket#ready
			 */
			this.emit("ready", true)
		})
		this.ws.on("message", (data: string) => {
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
				case "Error":
					switch (json.message) {
						case "TF2ItemsMissing":
							/**
							 * @throws Will throw an error if you try to use a function that requires TF2Items, and it isn't installed.
							 */
							throw Error("The TF2Items plugin is missing from the server!")
							break
					}
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
	 async send(type: string, message: any) {
		return new Promise((resolve, reject) => {
			var ack = UID()

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
					resolve(true)
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

export type Messages = typeof Messages[keyof typeof Messages]
/**
 * An enum describing the messages that can be sent to a SourceMod.JS server.
 * 
 * @readonly
 * @enum {string} Messages
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
	SetPlayerRendering: "SetPlayerRendering",

	TF2_RegeneratePlayer: "TF2_RegeneratePlayer",
	TF2_GiveWeapon: "TF2_GiveWeapon",
	TF2_ApplyCondition: "TF2_ApplyCondition",
}

export type Events = typeof Events[keyof typeof Events]
/**
 * An enum describing the events that can be received from a SourceMod.JS server.
 * 
 * @readonly
 * @enum {string} Events
 */
export const Events = {
	PlayerChat: "PlayerChat",
	PlayerUpdate: "PlayerUpdate",
	PlayerConnect: "PlayerConnect",
	PlayerDisconnect: "PlayerDisconnect",
	Disconnect: "Disconnect",
	Ping: "Ping",
	ServerUpdate: "ServerUpdate",
	ConVarChanged: "ConVarChanged",
	Error: "Error"
}

export type DisconnectReasons = typeof DisconnectReasons[keyof typeof DisconnectReasons]
/**
 * An enum describing the reasons for being disconnected from a SourceMod.JS server.
 * 
 * @readonly
 * @enum {string} DisconnectReasons
 */
export const DisconnectReasons = {
	Disconnect: "Disconnect",
	Unauthorized: "Unauthorized",
	TimedOut: "TimedOut",
	UnknownError: "UnknownError"
}