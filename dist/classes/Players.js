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
exports.Players = void 0;
const events_1 = __importDefault(require("events"));
const Socket_js_1 = require("./Socket.js");
const Player_js_1 = require("./Player.js");
const Utilities_js_1 = require("./Utilities.js");
/**
 * Object for interacting with players.
 * @class
 * @property {object} server - The server this belongs to.
 * @property {Map} players - List of players mapped by their ID.
 */
class Players extends events_1.default {
    /**
     * @constructor
     * @param {Server} server - The server this belongs to.
     */
    constructor(server) {
        super();
        this.server = server;
        this.players = new Map();
        this.server.on("ready", () => {
            var _a, _b, _c, _d;
            (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.on(Socket_js_1.Events.PlayerUpdate, (message) => {
                var _a;
                var data = message.message;
                if (this.players.get(data.id)) {
                    (_a = this.players.get(data.id)) === null || _a === void 0 ? void 0 : _a.update(data);
                }
                else {
                    this.players.set(data.id, new Player_js_1.Player(this, data));
                }
            });
            (_b = this.server.socket) === null || _b === void 0 ? void 0 : _b.on(Socket_js_1.Events.PlayerConnect, (playerdata) => {
                /**
                 * Fires when a player connects to the server. Make sure to fetch with `Players.fetch()` before interacting with players.
                 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#player_connect)
                 *
                 * @event Players#connect
                 * @param {number} id - ID of the player, specific to this server.
                 * @param {string} name - Username of the player.
                 * @param {string} ip - IP address of the player. Will be `none` if this player is a bot.
                 * @param {string} steamid - Steam ID of the player, in SteamID3 format (example: `[U:1:1049895252]`). Will be `BOT` if the player is a bot.
                 * @param {bool} bot - Will be true if this player is a TFBot (or otherwise not a human player), or false if otherwise.
                 */
                this.emit("connect", playerdata.message.userid, playerdata.message.name, playerdata.message.ip, playerdata.message.networkid, playerdata.message.bot);
            });
            (_c = this.server.socket) === null || _c === void 0 ? void 0 : _c.on(Socket_js_1.Events.PlayerDisconnect, (playerdata) => {
                /**
                 * Fires when a player disconnects to the server. Make sure to fetch with `Players.fetch()` before interacting with players.
                 * [SourceMod API Reference](https://wiki.alliedmods.net/Generic_Source_Server_Events#player_connect)
                 *
                 * @event Players#disconnect
                 * @param {number} id - ID of the player, specific to this server.
                 * @param {string} name - Username of the player.
                 * @param {string} steamid - Steam ID of the player, in steamID3 format (example: `[U:1:1049895252]`). Will be `BOT` if the player is a bot.
                 * @param {string} reason - Reason for the player disconnecting. (examples: `Client Disconnect`, `Punting bot, server is hibernating`, `Kicked from server`, etc.)
                 * @param {bool} bot - Will be true if this player is a TFBot (or otherwise not a human player), or false if otherwise.
                 */
                this.emit("disconnect", playerdata.message.userid, playerdata.message.name, playerdata.message.networkid, playerdata.message.reason, playerdata.message.bot);
            });
            (_d = this.server.socket) === null || _d === void 0 ? void 0 : _d.on(Socket_js_1.Events.PlayerChat, (data) => {
                var _a;
                var msg = data.message;
                var plr = (_a = this.players.get(msg.userid)) !== null && _a !== void 0 ? _a : new Player_js_1.Player(this, { id: msg.userid }, true);
                this.players.set(msg.userid, plr);
                /**
                 * Fires when a player sends a chat message.
                 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
                 *
                 * @event Players#chat
                 * @param {object} player - The player object who sent this message. Will be partial if not cached.
                 * @param {string} message - Content of the chat message.
                 * @param {bool} team - True if the chat message was a team message, and false otherwise.
                 */
                this.emit("chat", plr, msg.args, msg.command == "say_team");
            });
        });
    }
    /**
     * Fetches the list of all players currently connected. Keep in mind that `Players.players` will not always be up to date! Use this function to cache the list of players every so often. Similar to `Player.fetch()`
     * @function
     * @returns {Map} List of all players currently connected, mapped by ID.
     */
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.server.socket == undefined)
                return;
            this.players.clear();
            yield this.server.socket.send(Socket_js_1.Messages.FetchPlayers, true);
            return this.players;
        });
    }
    /**
     * Gets a player by ID.
     * @function
     * @param {number} id - The player's ID
     * @returns {Object} - Player object, or `null` if not found.
     */
    get(id) {
        var _a;
        return (_a = this.players.get(id)) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Broadcasts a message to every player's chatbox. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChatAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcast(message) {
        var _a;
        if ((0, Utilities_js_1.checkBytes)(message, 256))
            return;
        return (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.PlayerChatAll, {
            message: message
        });
    }
    /**
     * Broadcasts a message to a every player's hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintHintTextToAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcastHint(message) {
        var _a;
        if ((0, Utilities_js_1.checkBytes)(message, 256))
            return;
        return (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.PlayerHintAll, {
            id: this.id,
            message: message
        });
    }
    /**
     * Broadcasts a message to a every player's center hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintCenterTextAll)
     *
     * @function
     * @param {string} message - The message to send.
     */
    broadcastCenterHint(message) {
        var _a;
        if ((0, Utilities_js_1.checkBytes)(message, 256))
            return;
        return (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.PlayerCenterHintAll, {
            id: this.id,
            message: message
        });
    }
    /**
     * Plays a sound to all players. The file path must be a game sound from `scripts/game_sound.txt` or `sound_misc_dir.vpk`. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_sound/EmitGameSoundToClient)
     *
     * @function
     * @param {string} path - File path to the sound
     */
    broadcastSound(path) {
        var _a;
        if ((0, Utilities_js_1.checkBytes)(path, 256))
            return;
        return (_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.PlaySoundAll, path);
    }
}
exports.Players = Players;
