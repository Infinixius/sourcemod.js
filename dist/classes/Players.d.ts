/// <reference types="node" />
import EventEmitter from "events";
import { Player } from "./Player.js";
import { Server } from "./Server.js";
/**
 * Object for interacting with players.
 * @class
 * @property {object} server - The server this belongs to.
 * @property {Map} players - List of players mapped by their ID.
 */
export declare class Players extends EventEmitter {
    server: Server;
    players: Map<number, Player>;
    id: any;
    /**
     * @constructor
     * @param {Server} server - The server this belongs to.
     */
    constructor(server: Server);
    /**
     * Fetches the list of all players currently connected. Keep in mind that `Players.players` will not always be up to date! Use this function to cache the list of players every so often. Similar to `Player.fetch()`
     * @function
     * @returns {Map} List of all players currently connected, mapped by ID.
     */
    fetch(): Promise<Map<number, Player> | undefined>;
    /**
     * Gets a player by ID.
     * @function
     * @param {number} id - The player's ID
     * @returns {Object} - Player object, or `null` if not found.
     */
    get(id: number): Player | null;
    /**
     * Broadcasts a message to every player's chatbox. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChatAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcast(message: string): Promise<unknown> | undefined;
    /**
     * Broadcasts a message to a every player's hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintHintTextToAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcastHint(message: string): Promise<unknown> | undefined;
    /**
     * Broadcasts a message to a every player's center hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintCenterTextAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcastCenterHint(message: string): Promise<unknown> | undefined;
    /**
     * Plays a sound to all players. The file path must be a game sound from `scripts/game_sound.txt` or `sound_misc_dir.vpk`. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_sound/EmitGameSoundToClient)
     *
     * @function
     * @param {string} path - File path to the sound
     */
    broadcastSound(path: string): Promise<unknown> | undefined;
}
