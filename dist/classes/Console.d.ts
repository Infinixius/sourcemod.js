/// <reference types="node" />
import EventEmitter from "events";
import { Server } from "./Server.js";
/**
 * Object for managing, sending, and receiving messages from the server's console.
 *
 * Accessable from a `Server` object via `Server.console`.
 *
 * @class
 * @property {object} Server - The Server object this belongs to.
 */
export declare class Console extends EventEmitter {
    server: Server;
    /**
     * @constructor
     * @param {object} server - The server this belongs to.
     */
    constructor(server: Server);
    /**
     * Prints a message to the server's console.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/PrintToServer)
     *
     * @function
     * @param {string} message - The message to be printed.
     */
    print(message: string): Promise<unknown>;
    /**
     * Runs a command as if it were executed on the server console (or RCON).
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/ServerCommand)
     *
     * @function
     * @param {string} command - The command to be ran.
     */
    command(command: string): Promise<unknown>;
}
