/// <reference types="node" />
import EventEmitter from "events";
import { Server } from "./Server.js";
import { WebSocket } from "ws";
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
export declare class Socket extends EventEmitter {
    host: string;
    connected: boolean;
    server: Server;
    ws: WebSocket;
    lastMessage: number;
    authhash: string;
    acknowledgements: Array<string>;
    /**
     * @constructor
     * @param {Server} server - The `Server` object this belongs to.
     * @param {string} host - Websocket address. Example: `ws://localhost:5050`
     */
    constructor(server: Server, host: string);
    /**
     * Sends a raw message to the WebSocket
     * @function
     * @param {string} type
     * @param {object} message
     */
    send(type: string, message: any): Promise<unknown>;
    /**
     * Disconnects from the WebSocket.
     * @function
     */
    disconnect(): Promise<void>;
}
export declare type Messages = typeof Messages[keyof typeof Messages];
/**
 * An enum describing the messages that can be sent to a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} Messages
 */
export declare const Messages: {
    PrintToServer: string;
    ServerCommand: string;
    FetchPlayer: string;
    FetchPlayers: string;
    KickPlayer: string;
    PlayerChat: string;
    PlayerChatAll: string;
    Pong: string;
    FetchServer: string;
    PlayerHint: string;
    PlayerHintAll: string;
    PlayerCenterHint: string;
    PlayerCenterHintAll: string;
    PlaySound: string;
    PlaySoundAll: string;
    SetMap: string;
    SetNextMap: string;
    TeleportPlayer: string;
    SlapPlayer: string;
    SetPlayerRendering: string;
    TF2_RegeneratePlayer: string;
    TF2_GiveWeapon: string;
    TF2_ApplyCondition: string;
};
export declare type Events = typeof Events[keyof typeof Events];
/**
 * An enum describing the events that can be received from a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} Events
 */
export declare const Events: {
    PlayerChat: string;
    PlayerUpdate: string;
    PlayerConnect: string;
    PlayerDisconnect: string;
    Disconnect: string;
    Ping: string;
    ServerUpdate: string;
    ConVarChanged: string;
    Error: string;
};
export declare type DisconnectReasons = typeof DisconnectReasons[keyof typeof DisconnectReasons];
/**
 * An enum describing the reasons for being disconnected from a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} DisconnectReasons
 */
export declare const DisconnectReasons: {
    Disconnect: string;
    Unauthorized: string;
    TimedOut: string;
    UnknownError: string;
};
