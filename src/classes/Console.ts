
import EventEmitter from "events"
import { Server } from "./Server.js"
import { Messages, Events } from "./Socket.js"

/**
 * Object for managing, sending, and receiving messages from the server's console.
 * 
 * Accessable from a `Server` object via `Server.console`.
 * 
 * @class
 * @property {object} Server - The Server object this belongs to.
 */
export class Console extends EventEmitter {
	server: Server
	
	/**
	 * @constructor
	 * @param {object} server - The server this belongs to.
	 */
	constructor (server: Server) {
		super()
		this.server = server
	}

	/**
	 * Prints a message to the server's console.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/PrintToServer)
	 * 
	 * @function
	 * @param {string} message - The message to be printed.
	 */
	async print(message: string) {
		return await this.server.socket?.send(Messages.PrintToServer, message)
	}

	/**
	 * Runs a command as if it were executed on the server console (or RCON).
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/ServerCommand)
	 * 
	 * @function
	 * @param {string} command - The command to be ran.
	 */
	async command(command: string) {
		return await this.server.socket?.send(Messages.ServerCommand, command)
	}
}