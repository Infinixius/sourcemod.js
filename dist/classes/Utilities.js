"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UID = exports.checkBytes = exports.range = exports.randArray = exports.randInt = exports.RenderMode = exports.RenderEffect = exports.EngineVersion = void 0;
/**
 * Enum describing the version of the Source engine that SourceMod is running.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/EngineVersion)
 *
 * @readonly
 * @enum {number} EngineVersion
 */
exports.EngineVersion = {
    "NoEngine": 0,
    "Unknown": 1,
    "Original": 2,
    "SourceSDK2006": 3,
    "SourceSDK2007": 4,
    "Left4Dead": 5,
    "DarkMessiah": 6,
    "Left4Dead2": 7,
    "AlienSwarm": 8,
    "BloodyGoodTime": 9,
    "EYE": 10,
    "Portal2": 11,
    "CSGO": 12,
    "CSSOURCE": 13,
    "DOTA": 14,
    "HL2DM": 15,
    "DODS": 16,
    "TF2": 17,
    "NuclearDawn": 18,
    "SDK2013": 19,
    "Blade": 20,
    "Insurgency": 21,
    "Contagion": 22,
    "BlackMesa": 23,
    "DOI": 24
};
/**
 * Enum describing the type of render effect to apply.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/entity_prop_stocks/RenderFx)
 *
 * @readonly
 * @enum {number} RenderEffect
 */
exports.RenderEffect = {
    "NONE": 0,
    "PULSE_SLOW": 1,
    "PULSE_FAST": 2,
    "PULSE_SLOW_WIDE": 3,
    "PULSE_FAST_WIDE": 4,
    "FADE_SLOW": 5,
    "FADE_FAST": 6,
    "SOLID_SLOW": 7,
    "SOLID_FAST": 8,
    "STROBE_SLOW": 9,
    "STROBE_FAST": 10,
    "STROBE_FASTER": 11,
    "FLICKER_SLOW": 12,
    "FLICKER_FAST": 13,
    "NO_DISSIPATION": 14,
    "DISTORT": 15,
    "HOLOGRAM": 16,
    "EXPLODE": 17,
    "GLOWSHELL": 18,
    "CLAMP_MIN_SCALE": 19,
    "ENV_RAIN": 20,
    "ENV_SNOW": 21,
    "SPOTLIGHT": 22,
    "RAGDOLL": 23,
    "PULSE_FAST_WIDER": 24,
    "MAX": 25
};
/**
 * Enum describing the render mode to apply.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/entity_prop_stocks/RenderMode)
 *
 * @readonly
 * @enum {number} RenderMode
 */
exports.RenderMode = {
    "NORMAL": 1,
    "TRANSCOLOR": 2,
    "TRANSTEXTURE": 3,
    "GLOW": 4,
    "TRANSALPHA": 5,
    "TRANSADD": 6,
    "ENVIRONMENTAL": 7,
    "TRANSADDFRAMEBLEND": 8,
    "TRANSALPHAADD": 9,
    "WORLDGLOW": 10,
    "NONE": 11
};
/**
 * Returns a random number between min and max.
 * @private
 * @function
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randInt(min, max) {
    if (min === undefined)
        return new Error("Missing argument!");
    if (typeof min != "number")
        return new Error("Not a number!");
    if (max === undefined || typeof max != "number")
        return Math.floor((Math.random() * max));
    return Math.floor((Math.random() * max) + min);
}
exports.randInt = randInt;
/**
 * Returns a random item from the array.
 * example: [0,1,2,3,4,5,6,7,8,9].random()
 * @private
 * @function
 * @returns {any} Random item from the array
 */
function randArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randArray = randArray;
/**
 * Returns an array with elements up to amount, intended to be used in for loops. Essentially a port of Python's range().
 * example: Array.range(5) == [ 0, 1, 2, 3, 4 ]
 * @private
 * @function
 * @param {number} amount Amount of elements in the array
 * @returns {Array}
 */
function range(amount) {
    if (amount === undefined)
        return new Error("Missing argument!");
    if (typeof amount != "number")
        return new Error("Not a number!");
    var range = [];
    for (var i = 0; i < amount; i++) {
        range.push(i);
    }
    return range;
}
exports.range = range;
/**
 * Checks if a string exceeds a certain number of bytes. Used internally.
 * @private
 * @function
 * @param {string} str - The string to test.
 * @param {number} max - The maximum amount of bytes
 * @throws Will throw if `str` exceeds `max` bytes.
 * @returns {bool} - If the string exceeded `max` bytes
 */
function checkBytes(str, max) {
    if (Buffer.byteLength(str, "utf8") > max) {
        throw Error(`String "${str}" cannot exceed ${max} bytes! (is ${Buffer.byteLength(str, "utf8")} bytes)`);
    }
    return Buffer.byteLength(str, "utf8") > max;
}
exports.checkBytes = checkBytes;
/**
 * Generates a UID (unique id)
 * @private
 * @function
 * @returns {string} - The UID
 */
var uid = 0;
function UID() {
    uid++;
    return `${uid}-${randInt(0, 10000000)}`;
}
exports.UID = UID;
