import EventEmitter from "events"
import { Socket } from "./Socket.js"
import { Console } from "./Console.js"
import { Players } from "./Players.js"

/**
 * Root object for interacting with SourceMod.js servers.
 * @class
 * @property {string} host - The host WebSocket address. Example: `ws://localhost:5050`
 * @property {bool} connected - Will be true if the server is connected to the WebSocket, and false otherwise.
 * @property {object} socket - An instance of the `Socket` class used for interacting with the WebSocket. Will be null if not yet connected.
 * @property {object} console - Instance of the `Console` object for this server.
 * @property {object} players - Instance of the `Players` object for this server.
 */
export class Server extends EventEmitter {
	/**
	 * @constructor
	 * @param {string} host - The host WebSocket address. Example: `ws://localhost:5050`
	 */
	constructor (host) {
		super()
		this.host = host
		this.connected = false
		this.socket = null
		this.console = new Console(this)
		this.players = new Players(this)
	}

	/**
	 * Connects to the server.
	 * @function
	 */
	async connect() {
		await new Socket(this, this.host)
			.then((socket) => {
				this.socket = socket
				/**
				 * Fired when the connection to the server has been established.
				 * 
				 * @event Server#ready
				 */
				this.emit("ready", true)
			})
			.catch(err => { throw err })
	}
}