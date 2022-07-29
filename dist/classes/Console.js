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
exports.Console = void 0;
const events_1 = __importDefault(require("events"));
const Socket_js_1 = require("./Socket.js");
/**
 * Object for managing, sending, and receiving messages from the server's console.
 *
 * Accessable from a `Server` object via `Server.console`.
 *
 * @class
 * @property {object} Server - The Server object this belongs to.
 */
class Console extends events_1.default {
    /**
     * @constructor
     * @param {object} server - The server this belongs to.
     */
    constructor(server) {
        super();
        this.server = server;
    }
    /**
     * Prints a message to the server's console.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/PrintToServer)
     *
     * @function
     * @param {string} message - The message to be printed.
     */
    print(message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.PrintToServer, message));
        });
    }
    /**
     * Runs a command as if it were executed on the server console (or RCON).
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/ServerCommand)
     *
     * @function
     * @param {string} command - The command to be ran.
     */
    command(command) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.server.socket) === null || _a === void 0 ? void 0 : _a.send(Socket_js_1.Messages.ServerCommand, command));
        });
    }
}
exports.Console = Console;
