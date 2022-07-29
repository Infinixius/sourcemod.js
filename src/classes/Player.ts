import EventEmitter from "events"
import { Players } from "./Players.js"
import { Events, Messages } from "./Socket.js"
import { checkBytes } from "./Utilities.js"
import { Weapon } from "./Weapon.js"

/**
 * Object representing a player currently connected to the server.
 * @class
 * @property {object} players - The `Players` object this belongs to.
 * @property {bool} partial - Whether this object is partial or not. Partial objects are only guaranteed to contain the `id` property.
 * @property {number} id - ID of the player.
 * @property {string} authid - SteamID of the player.
 * @property {string} name - Name of the player.
 * @property {string} ip - IP address of the player. (without the port)
 * @property {number} health - Amount of health the player has.
 * @property {number} gravity - Gravity of the player.
 * @property {string} weapon - The current weapon the player has equipped. (Example: `tf_weapon_scattergun`)
 * @property {number} kills - Amount of kills the player currently has.
 * @property {number} deaths - Amount of deaths the player currently has.
 * @property {number} team - Team index of the player. Keep in mind that this is a generic response from the engine and not the game.
 * @property {number} connectionTime - The amount of time (in seconds) the player has been connected to the server. Will be 0 if the player is a bot/fake.
 * @property {object} render - Rendering information about the player (effects, color, etc).
 * @property {object} render.color - Rendering color information
 * @property {number} render.color.r - Rendering color (red 0-255)
 * @property {number} render.color.g - Rendering color (green 0-255)
 * @property {number} render.color.b - Rendering color (blue 0-255)
 * @property {number} render.color.a - Rendering color (alpha 0-255)
 * @property {number} render.effect - Rendering effect
 * @property {number} render.mode - Rendering mode
 */
 export class Player extends EventEmitter {
	players: Players
	partial: boolean
	id: any
	authid: string
	name: string
	ip: string
	health: number
	weapon: string
	gravity: number
	kills: number
	deaths: number
	team: string
	connectionTime: number
	connectionTimeMinutes: number
	render: { color: { r: any; g: any; b: any; a: any }; effect: any; mode: any }
	
	/**
	 * @constructor
	 * @param {Players} players - The `Players` object this belongs to.
	 * @param {object} data - Player data sent from the server.
	 * @param {bool} partial - Whether this object is partial or not. Defaults to false.
	 */
	constructor (players: Players, data: object, partial?: boolean) {
		super()
		this.players = players
		this.partial = partial ?? false

		this.update(data)

		this.players.on("chat", (plr, message, team) => {
			if (plr.id != this.id) return
			/**
			 * Fires when this player sends a chat message.
			 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/console/OnClientSayCommand)
			 * 
			 * @event Player#chat
			 * @param {string} message - Content of the chat message.
			 * @param {bool} team - True if the chat message was a team message, and false otherwise.
			 */
			this.emit("chat", message, team)
		})
	}

	/**
	 * Fetches information about this player from the server. Keep in mind that you must run this function to keep this player up-to-date. Similar to `Players.fetch()`
	 * @function
	 * @returns {Object} The new player object with fetched information.
	 */
	async fetch() {
		if (this.players.server.socket == undefined) return
		await this.players.server.socket.send(Messages.FetchPlayer, this.id)

		return this
	}

	/**
	 * Updates the player with new information from `Player.fetch()`. Used internally.
	 * @function
	 * @returns {Object} The new player object with fetched information.
	 */
	update(data: any) {
		this.id = data.id ?? 0
		this.authid = data.authid ?? ""
		this.name = data.name ?? ""
		this.ip = data.ip ?? ""
		this.health = data.health ?? 1
		this.weapon = data.weapon ?? ""
		this.gravity = data.gravity ?? 0
		this.kills = data.kills ?? 0
		this.deaths = data.deaths ?? 0
		this.team = data.team ?? 0
		this.connectionTime = Math.round(data.connectionTime) ?? 0
		this.connectionTimeMinutes = Math.round(data.connectionTime / 60 )?? 0

		this.render = {
			color: {
				r: data.colorr ?? 255,
				g: data.colorg ?? 255,
				b: data.colorb ?? 255,
				a: data.colora ?? 255
			},
			effect: data.rendereffect ?? 0,
			mode: data.rendermode ?? 0
		}

		return this
	}

	/**
	 * Kicks a player from the server.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/clients/KickClient)
	 * 
	 * @function
	 * @param {string} reason - The reason for the kick. Cannot exceed 256 bytes.
	 */
	kick(reason: string) {
		return this.players.server.socket?.send(Messages.KickPlayer, {
			id: this.id,
			reason: reason
		})
	}

	/**
	 * Sends a message to a player's chatbox. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChat)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	chat(message: string) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket?.send(Messages.PlayerChat, {
			id: this.id,
			message: message
		})
	}

	/**
	 * Sends a message to a player's hint box. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintHintText)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	hint(message: string) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket?.send(Messages.PlayerHint, {
			id: this.id,
			message: message
		})
	}

	/**
	 * Sends a message to a player's center hint box. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintCenterText)
	 * 
	 * @function
	 * @param {string} message - The message to send.
	 */
	centerHint(message: string) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket?.send(Messages.PlayerCenterHint, {
			id: this.id,
			message: message
		})
	}

	/**
	 * Plays a sound. The file path must be a game sound from `scripts/game_sound.txt` or `sound_misc_dir.vpk`. Cannot exceed 256 bytes.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_sound/EmitGameSoundToClient)
	 * 
	 * @function
	 * @param {string} path - File path to the sound
	 */
	playSound(path: string) {
		if (checkBytes(path, 256)) return
		return this.players.server.socket?.send(Messages.PlaySound, {
			id: this.id,
			path: path
		})
	}

	/**
	 * Teleports a player to another player.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_functions/TeleportEntity)
	 * 
	 * @function
	 * @param {Player} player - The player to teleport to.
	 */
	teleport(player: Player) {
		return this.players.server.socket?.send(Messages.TeleportPlayer, {
			to: player.id,
			from: this.id
		})
	}

	/**
	 * Slaps the player, with an optional amount of damage.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_functions/SlapPlayer)
	 * 
	 * @function
	 * @param {number} damage - The amount of damage to deal. Defaults to 0.
	 */
	slap(damage: number) {
		return this.players.server.socket?.send(Messages.SlapPlayer, {
			id: this.id,
			damage: damage ?? 0
		})
	}

	/**
	 * Updates the player's rendering, such as the color and render effects/modes. Every argument is optional, and won't change the value if not provided.
	 * [SourceMod API Reference (SetEntityRenderColor)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderColor)
	 * [SourceMod API Reference (SetEntityRenderFx)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderFx)
	 * [SourceMod API Reference (SetEntityRenderMode)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderMode)
	 * 
	 * @function
	 * @param {number} r - Rendering color (red 0-255)
	 * @param {number} g - Rendering color (green 0-255)
	 * @param {number} b - Rendering color (blue 0-255)
	 * @param {number} a - Rendering color (alpha 0-255)
	 * @param {number} effect - Rendering effect
	 * @param {number} mode - Rendering mode
	 */
	setRendering(r: number, g: number, b: number, a: number, effect: number, mode: number) {
		return this.players.server.socket?.send(Messages.SetPlayerRendering, {
			id: this.id,
			r: r ?? this.render.color.r,
			g: g ?? this.render.color.g,
			b: b ?? this.render.color.b,
			a: a ?? this.render.color.a,
			effect: effect ?? this.render.effect,
			mode: mode ?? this.render.mode
		})
	}

	/**
	 * Resets the player's rendering color/effect/mode.
	 * [SourceMod API Reference (SetEntityRenderColor)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderColor)
	 * [SourceMod API Reference (SetEntityRenderFx)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderFx)
	 * [SourceMod API Reference (SetEntityRenderMode)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderMode)
	 * 
	 * @function
	 */
	resetRendering() {
		return this.setRendering(255, 255, 255, 255, 0, 0)
	}

	/**
	 * Regenerates a player's health and ammo. Team Fortress 2 only!
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TF2_RegeneratePlayer)
	 * 
	 * @function Player#regenerate
	 */
	regenerate() {
		if (this.players.server.game != "TeamFortress2") {
			throw "This function is only available in Team Fortress 2."
		}
		return this.players.server.socket?.send(Messages.TF2_RegeneratePlayer, this.id)
	}

	/**
	 * Gives a player a weapon with custom stats. Team Fortress 2 only! Requires [TF2Items](https://forums.alliedmods.net/showthread.php?t=115100).
	 * 
	 * @param {Weapon} weapon - The weapon object to give.
	 * @function Player#giveWeapon
	 */
	giveWeapon(weapon: Weapon) {
		if (this.players.server.game != "TeamFortress2") {
			throw "This function is only available in Team Fortress 2."
		}
		weapon.id = this.id
		return this.players.server.socket?.send(Messages.TF2_GiveWeapon, weapon)
	}

	/**
	 * Adds a condition to a player. Team Fortress 2 only.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TF2_AddCondition)
	 * 
	 * @param {Condition} condition 
	 * @param {number} duration - How long to apply the condition for. 
	 */
	applyCondition(condition: Condition, duration: number = 0) {
		if (this.players.server.game != "TeamFortress2") {
			throw "This function is only available in Team Fortress 2."
		}
		return this.players.server.socket?.send(Messages.TF2_ApplyCondition, {
			id: this.id,
			condition: condition,
			duration: duration == 0 ? 0 : duration + 0.1
		})
	}
}

export type Condition = typeof Condition[keyof typeof Condition]
/**
 * Enum describing conditions that can be applied to a player. Team Fortress 2 only! [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TFCond)
 * 
 * Keep in mind that applying some of these won't do anything. Checking for them or removing them from a player would be more useful.
 * 
 * @readonly
 * @enum {number} Condition
 * 
*/
export const Condition = {
	Slowed: 0,
	Zoomed: 1,
	Disguising: 2,
	Disguised: 3,
	Cloaked: 4,
	Ubercharged: 5,
	TeleportGlow: 6,
	Taunting: 7,
	UberchargeFading: 8,
	CloakFlicker: 9,
	Teleporting: 10,
	Kritzkrieged: 11,
	//TmpDamageBonus: 12,
	DeadRingered: 13,
	Bonked: 14,
	Dazed: 15,
	BuffBanner: 16,
	DemoknightCharging: 17,
	EyelanderEyeGlow: 18,
	CritACola: 19,
	InHealRadius: 20,
	Healing: 21,
	OnFire: 22,
	Overhealed: 23,
	Jarated: 24,
	Bleeding: 25,
	BattalionsBackup: 26,
	MadMilk: 27,
	QuickFix: 28,
	Concheror: 29,
	MarkedForDeath: 30,
	NoHealingDamageBuff: 31,
	DisciplinaryActionSpeed: 32,
	HalloweenCritPumpkin: 33,
	CritCanteen: 34,
	CritDemoCharge: 35,
	SodaPopperHype: 36,
	ArenaFirstBlood: 37,
	CritOnWin: 38,
	CritOnFlagCapture: 39,
	CritOnKill: 40,
	RestrictToMelee: 41,
	DefenseBuffNoCritBlock: 42,
	//Reprogrammed: 43,
	PhlogistinatorCritMmmph: 44,
	PhlogistinatorDefenseMmmph: 45,
	HitmansHeatmakerFocus: 46,
	EnforcerDisguiseRemoved: 47,
	MarkedForDeathSilent: 48,
	DisguisedAsDispenser: 49,
	// MvMSapperSparkle: 50,
	// MvMUberchargedHidden: 51,
	UberchargeCanteen: 52,
	HalloweenBombHead: 53,
	HalloweenForcedThrillerTaunt: 54,
	RadiusHealing: 55,
	CritOnDamage: 56,
	UberOnDamage: 57,
	VaccinatorUberBullet: 58,
	VaccinatorUberBlast: 59,
	VaccinatorUberFire: 60,
	VaccinatorHealBullet: 61,
	VaccinatorHealBlast: 62,
	VaccinatorHealFire: 63,
	// Stealthed: 64,
	// MedigunDebuff: 65,
	// StealthedUserBuffFade: 66,
	BulletImmunity: 67,
	BlastImmunity: 68,
	FireImmunity: 69,
	Buddha: 70,
	// MvMRadiowave: 71,
	HalloweenSpeedboost: 72,
	HalloweenQuickheal: 73,
	Giant: 74,
	Tiny: 75,
	HalloweenInHell: 76,
	HalloweenGhost: 77,
	MiniCritOnKill: 78,
	// DodgeChance: 79,
	BASEJumperParachute: 80,
	BlastJumping: 81,
	HalloweenKart: 82,
	HalloweenKartDash: 83,
	BalloonHead: 84,
	MeleeOnly: 85,
	SwimmingCurse: 86,
	HalloweenKartNoTurn: 87,
	HalloweenKartCage: 88,
	Powerup: 89,
	Powerup_Strength: 90,
	Powerup_Haste: 91,
	Powerup_Regeneration: 92,
	Powerup_Resistance: 93,
	Powerup_Vampire: 94,
	Powerup_Reflect: 95,
	Powerup_Precision: 96,
	Powerup_Agility: 97,
	GrapplingHook: 98,
	GrapplingHookSafeFall: 99,
	GrapplingHookLatched: 100,
	GrapplingHookBleeding: 101,
	DeadRingerAfterburnImmunity: 102,
	Powerup_Knockout: 103,
	Powerup_Imbalance: 104,
	Powerup_Crit: 105,
	PasstimeInterception: 106,
	//SwimmingNoEffects: 107,
	EscapedUnderworld: 108,
	Powerup_King: 109,
	Powerup_Plague: 110,
	Powerup_Supernova: 111,
	Powerup_Plague_Effect: 112,
	Powerup_King_Effect: 113,
	SpawnOutline: 114,
	Airblasted: 115,
	CompetitiveWinner: 116,
	CompetitiveLoser: 117,
	// NoTaunting,
	// NoTaunting_DEPRECATED: 118,
	HealingDebuff: 118,
	PasstimePenaltyDebuff: 119,
	GrappledToPlayer: 120,
	// GrappledByPlayer: 121,
	BASEJumperParachuteDeployed: 122,
	GasPasser: 123,
	DragonsFuryAfterburn: 124,
	ThermalThrusterLaunched: 125,
	LostFooting: 126,
	ReducedAirControl: 127,
	HalloweenHellHeal: 128,
	Powerup_Dominant: 129
}