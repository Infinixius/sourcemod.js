/**
 * @typedef EngineVersion
 * @property {number} NoEngine - Unknown engine
 * @property {number} Unknown - Could not determine the engine version
 * @property {number} Original - Original Source Engine (used by The Ship)
 * @property {number} SourceSDK2006 - Episode 1 Source Engine (second major SDK)
 * @property {number} SourceSDK2007 - Orange Box Source Engine (third major SDK)
 * @property {number} Left4Dead - Left 4 Dead
 * @property {number} DarkMessiah - Dark Messiah Multiplayer (based on original engine)
 * @property {number} Left4Dead2 - Left 4 Dead 2
 * @property {number} AlienSwarm - Alien Swarm (and Alien Swarm SDK)
 * @property {number} BloodyGoodTime - Bloody Good Time
 * @property {number} EYE - E.Y.E Divine Cybermancy
 * @property {number} Portal2 - Portal 2
 * @property {number} CSGO - Counter-Strike: Global Offensive
 * @property {number} CSSOURCE - Counter-Strike: Source
 * @property {number} DOTA - Dota 2
 * @property {number} HL2DM - Half-Life 2 Deathmatch
 * @property {number} DODS - Day of Defeat: Source
 * @property {number} TF2 - Team Fortress 2
 * @property {number} NuclearDawn - Nuclear Dawn
 * @property {number} SDK2013 - Source SDK 2013
 * @property {number} Blade - Blade Symphony
 * @property {number} Insurgency - Insurgency (2013 Retail version)
 * @property {number} Contagion - Contagion
 * @property {number} BlackMesa - Black Mesa Multiplayer
 * @property {number} DOI  - Day of Infamy
 */
 export const EngineVersion = {
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
}

/**
 * @typedef RenderEffects
 * @property {number} NONE
 * @property {number} PULSE_SLOW
 * @property {number} PULSE_FAST
 * @property {number} PULSE_SLOW_WIDE
 * @property {number} PULSE_FAST_WIDE
 * @property {number} FADE_SLOW
 * @property {number} FADE_FAST
 * @property {number} SOLID_SLOW
 * @property {number} SOLID_FAST
 * @property {number} STROBE_SLOW
 * @property {number} STROBE_FAST
 * @property {number} STROBE_FASTER
 * @property {number} FLICKER_SLOW
 * @property {number} FLICKER_FAST
 * @property {number} NO_DISSIPATION
 * @property {number} DISTORT
 * @property {number} HOLOGRAM
 * @property {number} EXPLODE
 * @property {number} GLOWSHELL
 * @property {number} CLAMP_MIN_SCALE
 * @property {number} ENV_RAIN
 * @property {number} ENV_SNOW
 * @property {number} SPOTLIGHT
 * @property {number} RAGDOLL
 * @property {number} PULSE_FAST_WIDER
 * @property {number} MAX
 */
 export const RenderEffects = {
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
}

/**
 * @typedef RenderModes
 * @property {number} NORMAL - src
 * @property {number} TRANSCOLOR - c*a+dest*(1-a)
 * @property {number} TRANSTEXTURE - src*a+dest*(1-a)
 * @property {number} GLOW - src*a+dest -- No Z buffer checks -- Fixed size in screen space
 * @property {number} TRANSALPHA - src*srca+dest*(1-srca)
 * @property {number} TRANSADD - src*a+dest
 * @property {number} ENVIRONMENTAL - not drawn, used for environmental effects
 * @property {number} TRANSADDFRAMEBLEND - use a fractional frame value to blend between animation frames
 * @property {number} TRANSALPHAADD - src + dest*(1-a)
 * @property {number} WORLDGLOW - Same as kRenderGlow but not fixed size in screen space
 * @property {number} NONE - Don't render.
 */
 export const RenderModes = {
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
 }

/**
 * Returns a random number between min and max.
 * @function
 * @param {number} min
 * @param {number} max 
 * @returns {number}
 */
export function randInt(min, max) {
	if (min === undefined) return new Error("Missing argument!")
	if (typeof min != "number") return new Error("Not a number!")

	if (max === undefined || typeof max != "number") return Math.floor((Math.random() * max))
	
	return Math.floor((Math.random() * max) + min)
}

/**
 * Returns a random item from the array.
 * // example: [0,1,2,3,4,5,6,7,8,9].random()
 * @function
 * @returns {any} Random item from the array
 */
export function randArray(array) {
	return array[Math.floor(Math.random() * this.length)]
}

/**
 * Returns an array with elements up to amount, intended to be used in for loops. Essentially a port of Python's range().
 * example: Array.range(5) == [ 0, 1, 2, 3, 4 ]
 * @function
 * @param {number} amount Amount of elements in the array
 * @returns {Array}
 */
export function range(amount) {
	if (amount === undefined) return new Error("Missing argument!")
	if (typeof amount != "number") return new Error("Not a number!")

	var range = []
	for (var i = 0; i < amount; i++) {
		range.push(i)
	}
	return range
}

/**
 * Checks if a string exceeds a certain number of bytes. Used internally.
 * @function
 * @param {string} str - The string to test.
 * @param {number} max - The maximum amount of bytes
 * @throws Will throw if `str` exceeds `max` bytes.
 * @returns {bool} - If the string exceeded `max` bytes
 */
 export function checkBytes(str, max) {
	if (Buffer.byteLength(str, "utf8") > max) {
		throw Error(`String "${str}" cannot exceed ${max} bytes! (is ${Buffer.byteLength(str, "utf8")} bytes)`)
	}

	return Buffer.byteLength(str, "utf8") > max
}

/**
 * Generates a UID (unique id)
 * @function
 * @returns {string} - The UID
 */
var uid = 0
export function UID() {
	uid++
	return `${uid}-${randInt(0, 10000000)}`
}