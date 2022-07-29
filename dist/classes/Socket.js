"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectReasons = exports.Events = exports.Messages = exports.Socket = void 0;
const events_1 = __importDefault(require("events"));
const ws_1 = require("ws");
const Utilities_js_1 = require("./Utilities.js");
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
class Socket extends events_1.default {
    /**
     * @constructor
     * @param {Server} server - The `Server` object this belongs to.
     * @param {string} host - Websocket address. Example: `ws://localhost:5050`
     */
    constructor(server, host) {
        super();
        this.host = host;
        this.connected = false;
        this.server = server;
        this.ws = new ws_1.WebSocket(host);
        this.lastMessage = Date.now();
        this.authhash = "";
        this.acknowledgements = [];
        this.ws.on("error", (err) => {
            /**
             * Used internally for when the WebSocket experiences an error.
             *
             * @event Socket#error
             * @param {Error} error - The error that occured.
             */
            this.emit("error", err);
        });
        this.ws.on("open", () => {
            this.connected = true;
            /**
             * Fired when the connection to the server has been established.
             *
             * @event Socket#ready
             */
            this.emit("ready", true);
        });
        this.ws.on("message", (data) => {
            /**
             * Fired when a WebSocket packet is received.
             *
             * @event Socket#raw
             * @param {Buffer} data - Raw data sent by the server.
             */
            this.emit("raw", data);
            var json;
            try {
                json = JSON.parse(data);
            }
            catch (err) {
                throw err;
            }
            /**
             * Used internally for when a raw event is received from the server.
             * It isn't recommended to use this event in your code.
             *
             * @event Socket#event
             * @param {object} json - The message data sent by the server.
             */
            this.emit(json.type, json);
            this.lastMessage = Date.now();
            switch (json.type) {
                case "Acknowledgement":
                    if (!this.acknowledgements.includes(json.message)) {
                        this.acknowledgements.push(json.message);
                    }
                    break;
                case "Ping":
                    this.send("Pong", Date.now());
                    break;
                case "Error":
                    switch (json.message) {
                        case "TF2ItemsMissing":
                            /**
                             * @throws Will throw an error if you try to use a function that requires TF2Items, and it isn't installed.
                             */
                            throw Error("The TF2Items plugin is missing from the server!");
                            break;
                    }
                    break;
                case "Disconnect":
                    this.server.disconnect();
                    switch (json.message) {
                        case "Unauthorized":
                            /**
                             * @throws Will throw an error if you are unauthorized to the server.
                             */
                            throw Error("Unauthorized!");
                            break;
                        case "TimedOut":
                            /**
                             * @throws Will throw an error if you fail to send a message to the server for 5 seconds.
                             */
                            throw Error("Timed out!");
                            break;
                    }
                    break;
            }
            setInterval(() => {
                if (Date.now() - this.lastMessage > 5000) {
                    this.server.disconnect();
                    throw Error("Timed out!");
                }
            }, 1000);
        });
    }
    /**
     * Sends a raw message to the WebSocket
     * @function
     * @param {string} type
     * @param {object} message
     */
    send(type, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                var ack = (0, Utilities_js_1.UID)();
                this.ws.send(JSON.stringify({
                    type: type,
                    message: message,
                    ack: ack,
                    auth: (_a = this.server.options.get("auth")) !== null && _a !== void 0 ? _a : "none",
                    timestamp: Date.now()
                }));
                /* wait until an acknowledgement is received */
                let timeout = setInterval(() => {
                    if (this.acknowledgements.includes(ack)) {
                        clearInterval(timeout);
                        resolve(true);
                    }
                }, 1);
            });
        });
    }
    /**
     * Disconnects from the WebSocket.
     * @function
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ws.terminate();
            this.connected = false;
            this.server.connected = false;
            /**
              * Fired when the WebSocket disconnects.
              *
              * @event Socket#disconnect
              */
            this.emit("disconnect", true);
        });
    }
}
exports.Socket = Socket;
/**
 * An enum describing the messages that can be sent to a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} Messages
 */
exports.Messages = {
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
};
/**
 * An enum describing the events that can be received from a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} Events
 */
exports.Events = {
    PlayerChat: "PlayerChat",
    PlayerUpdate: "PlayerUpdate",
    PlayerConnect: "PlayerConnect",
    PlayerDisconnect: "PlayerDisconnect",
    Disconnect: "Disconnect",
    Ping: "Ping",
    ServerUpdate: "ServerUpdate",
    ConVarChanged: "ConVarChanged",
    Error: "Error"
};
/**
 * An enum describing the reasons for being disconnected from a SourceMod.JS server.
 *
 * @readonly
 * @enum {string} DisconnectReasons
 */
exports.DisconnectReasons = {
    Disconnect: "Disconnect",
    Unauthorized: "Unauthorized",
    TimedOut: "TimedOut",
    UnknownError: "UnknownError"
};
