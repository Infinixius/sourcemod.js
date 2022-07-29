/// <reference types="node" />
import EventEmitter from "events";
import { Socket } from "./Socket.js";
import { Console } from "./Console.js";
import { Players } from "./Players.js";
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
export declare class Server extends EventEmitter {
    host: string;
    options: Map<any, any>;
    connected: boolean;
    socket: Socket | undefined;
    console: Console;
    players: Players;
    game: string;
    currentMap: string;
    nextMap: string;
    isDedicated: boolean | undefined;
    authID: string;
    gameTime: number;
    gameTick: number;
    gameFolder: string;
    gameDescription: string;
    engineVersion: string;
    /**
     * @constructor
     * @param {string} host - The host WebSocket address. Example: `ws://localhost:5050`
     * @param {object} options - Options to provide the server.
     */
    constructor(host: string, options?: object);
    /**
     * Connects to the server.
     * @function
     */
    connect(): Promise<void>;
    /**
     * Disconnects from the server. Internally calls Socket.disconnect().
     * @function
     */
    disconnect(): Promise<void>;
    /**
     * Fetches information about the server. Keep in mind that you must run this function to keep the server information up-to-date.
     * @function
     * @returns {Object} The new server object with fetched information.
     */
    fetch(): Promise<this | undefined>;
    /**
     * Forcefully changes the current map, with an optional reason.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
     * @function
     * @param {string} - Name of the new map
     * @param {string} - Reason for changing the map
     * @returns {Object} - The new server object with fetched information.
     */
    setMap(map: string, reason: string): Promise<string | undefined>;
    /**
     * Sets SourceMod's internal nextmap. Same as changing `sm_nextmap`. Will run `Server.fetch()`, ensuring the nextMap property is updated.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
     * @function
     * @param {string} - Name of the new map
     * @returns {Object} - The new server object with fetched information.
     */
    setNextMap(map: string): Promise<string | undefined>;
}
export declare type Game = typeof Game[keyof typeof Game];
/**
 * An enum describing the supported game that Sourcemod.JS is running on.
 *
 * @readonly
 * @enum {string} Game
 */
export declare const Game: {
    None: string;
    Unknown: string;
    TeamFortress2: string;
};
