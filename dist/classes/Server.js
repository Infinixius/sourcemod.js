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
exports.Game = exports.Server = void 0;
const events_1 = __importDefault(require("events"));
const Socket_js_1 = require("./Socket.js");
const Console_js_1 = require("./Console.js");
const Players_js_1 = require("./Players.js");
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
class Server extends events_1.default {
    /**
     * @constructor
     * @param {string} host - The host WebSocket address. Example: `ws://localhost:5050`
     * @param {object} options - Options to provide the server.
     */
    constructor(host, options) {
        super();
        this.host = host;
        this.options = new Map();
        this.connected = false;
        this.socket;
        this.console = new Console_js_1.Console(this);
        this.players = new Players_js_1.Players(this);
        this.game = exports.Game.None;
        this.currentMap = "";
        this.nextMap = "";
        this.isDedicated;
        this.authID = "";
        this.gameTime = 0;
        this.gameTick = 0;
        this.gameFolder = "";
        this.gameDescription = "";
        this.engineVersion = "";
        if (options)
            this.options = new Map(Object.entries(options));
    }
    /**
     * Connects to the server.
     * @function
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.socket = new Socket_js_1.Socket(this, this.host);
            this.socket.on(Socket_js_1.Events.ServerUpdate, (data) => {
                var msg = data.message;
                this.currentMap = msg.currentMap;
                this.nextMap = msg.nextMap;
                this.isDedicated = msg.isDedicated;
                this.authID = msg.authID;
                this.gameTime = msg.gameTime;
                this.gameTick = msg.gameTick;
                this.gameFolder = msg.gameFolder;
                this.gameDescription = msg.gameDescription;
                this.engineVersion = msg.engineVersion;
            });
            this.socket.on(Socket_js_1.Events.ConVarChanged, (data) => {
                /**
                 * Fires when a ConVar changes.
                 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#server_cvar)
                 *
                 * @event Server#convarChanged
                 * @param {string} name - Name of the ConVar.
                 * @param {string} steamid - New value of the ConVar.
                 */
                this.emit("convarChanged", data.message.name, data.message.value);
            });
            this.socket.on("ready", () => __awaiter(this, void 0, void 0, function* () {
                yield this.fetch();
                this.connected = true;
                switch (this.gameDescription) {
                    case "Team Fortress":
                        this.game = exports.Game.TeamFortress2;
                        break;
                    default:
                        this.game = exports.Game.Unknown;
                        break;
                }
                /**
                 * Fired when the connection to the server has been established.
                 *
                 * @event Server#ready
                 */
                this.emit("ready", true);
            }));
        });
    }
    /**
     * Disconnects from the server. Internally calls Socket.disconnect().
     * @function
     */
    disconnect() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.socket) === null || _a === void 0 ? void 0 : _a.disconnect();
            /**
             * Fired when the server disconnects.
             *
             * @event Server#disconnect
             */
            this.emit("disconnect", true);
        });
    }
    /**
     * Fetches information about the server. Keep in mind that you must run this function to keep the server information up-to-date.
     * @function
     * @returns {Object} The new server object with fetched information.
     */
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket == undefined)
                return;
            yield this.socket.send(Socket_js_1.Messages.FetchServer, true);
            return this;
        });
    }
    /**
     * Forcefully changes the current map, with an optional reason.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
     * @function
     * @param {string} - Name of the new map
     * @param {string} - Reason for changing the map
     * @returns {Object} - The new server object with fetched information.
     */
    setMap(map, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket == undefined)
                return;
            yield this.socket.send(Socket_js_1.Messages.SetMap, {
                map: map,
                reason: reason !== null && reason !== void 0 ? reason : "No reason provided!"
            });
            yield this.fetch();
            return this.nextMap;
        });
    }
    /**
     * Sets SourceMod's internal nextmap. Same as changing `sm_nextmap`. Will run `Server.fetch()`, ensuring the nextMap property is updated.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/nextmap/SetNextMap)
     * @function
     * @param {string} - Name of the new map
     * @returns {Object} - The new server object with fetched information.
     */
    setNextMap(map) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.socket == undefined)
                return;
            yield this.socket.send(Socket_js_1.Messages.SetNextMap, map);
            yield this.fetch();
            return this.nextMap;
        });
    }
}
exports.Server = Server;
/**
 * An enum describing the supported game that Sourcemod.JS is running on.
 *
 * @readonly
 * @enum {string} Game
 */
exports.Game = {
    None: "None",
    Unknown: "Unknown",
    TeamFortress2: "TeamFortress2"
};
