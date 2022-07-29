export declare type EngineVersion = typeof EngineVersion[keyof typeof EngineVersion];
/**
 * Enum describing the version of the Source engine that SourceMod is running.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/EngineVersion)
 *
 * @readonly
 * @enum {number} EngineVersion
 */
export declare const EngineVersion: {
    NoEngine: number;
    Unknown: number;
    Original: number;
    SourceSDK2006: number;
    SourceSDK2007: number;
    Left4Dead: number;
    DarkMessiah: number;
    Left4Dead2: number;
    AlienSwarm: number;
    BloodyGoodTime: number;
    EYE: number;
    Portal2: number;
    CSGO: number;
    CSSOURCE: number;
    DOTA: number;
    HL2DM: number;
    DODS: number;
    TF2: number;
    NuclearDawn: number;
    SDK2013: number;
    Blade: number;
    Insurgency: number;
    Contagion: number;
    BlackMesa: number;
    DOI: number;
};
export declare type RenderEffect = typeof RenderEffect[keyof typeof RenderEffect];
/**
 * Enum describing the type of render effect to apply.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/entity_prop_stocks/RenderFx)
 *
 * @readonly
 * @enum {number} RenderEffect
 */
export declare const RenderEffect: {
    NONE: number;
    PULSE_SLOW: number;
    PULSE_FAST: number;
    PULSE_SLOW_WIDE: number;
    PULSE_FAST_WIDE: number;
    FADE_SLOW: number;
    FADE_FAST: number;
    SOLID_SLOW: number;
    SOLID_FAST: number;
    STROBE_SLOW: number;
    STROBE_FAST: number;
    STROBE_FASTER: number;
    FLICKER_SLOW: number;
    FLICKER_FAST: number;
    NO_DISSIPATION: number;
    DISTORT: number;
    HOLOGRAM: number;
    EXPLODE: number;
    GLOWSHELL: number;
    CLAMP_MIN_SCALE: number;
    ENV_RAIN: number;
    ENV_SNOW: number;
    SPOTLIGHT: number;
    RAGDOLL: number;
    PULSE_FAST_WIDER: number;
    MAX: number;
};
export declare type RenderMode = typeof RenderMode[keyof typeof RenderMode];
/**
 * Enum describing the render mode to apply.
 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/entity_prop_stocks/RenderMode)
 *
 * @readonly
 * @enum {number} RenderMode
 */
export declare const RenderMode: {
    NORMAL: number;
    TRANSCOLOR: number;
    TRANSTEXTURE: number;
    GLOW: number;
    TRANSALPHA: number;
    TRANSADD: number;
    ENVIRONMENTAL: number;
    TRANSADDFRAMEBLEND: number;
    TRANSALPHAADD: number;
    WORLDGLOW: number;
    NONE: number;
};
/**
 * Returns a random number between min and max.
 * @private
 * @function
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export declare function randInt(min: number, max: number): number | Error;
/**
 * Returns a random item from the array.
 * example: [0,1,2,3,4,5,6,7,8,9].random()
 * @private
 * @function
 * @returns {any} Random item from the array
 */
export declare function randArray(array: Array<any>): any;
/**
 * Returns an array with elements up to amount, intended to be used in for loops. Essentially a port of Python's range().
 * example: Array.range(5) == [ 0, 1, 2, 3, 4 ]
 * @private
 * @function
 * @param {number} amount Amount of elements in the array
 * @returns {Array}
 */
export declare function range(amount: number): Error | Number[];
/**
 * Checks if a string exceeds a certain number of bytes. Used internally.
 * @private
 * @function
 * @param {string} str - The string to test.
 * @param {number} max - The maximum amount of bytes
 * @throws Will throw if `str` exceeds `max` bytes.
 * @returns {bool} - If the string exceeded `max` bytes
 */
export declare function checkBytes(str: string, max: number): boolean;
export declare function UID(): string;
