/// <reference types="node" />
import EventEmitter from "events";
import { Players } from "./Players.js";
import { Weapon } from "./Weapon.js";
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
export declare class Player extends EventEmitter {
    players: Players;
    partial: boolean;
    id: any;
    authid: string;
    name: string;
    ip: string;
    health: number;
    weapon: string;
    gravity: number;
    kills: number;
    deaths: number;
    team: string;
    connectionTime: number;
    connectionTimeMinutes: number;
    render: {
        color: {
            r: any;
            g: any;
            b: any;
            a: any;
        };
        effect: any;
        mode: any;
    };
    /**
     * @constructor
     * @param {Players} players - The `Players` object this belongs to.
     * @param {object} data - Player data sent from the server.
     * @param {bool} partial - Whether this object is partial or not. Defaults to false.
     */
    constructor(players: Players, data: object, partial?: boolean);
    /**
     * Fetches information about this player from the server. Keep in mind that you must run this function to keep this player up-to-date. Similar to `Players.fetch()`
     * @function
     * @returns {Object} The new player object with fetched information.
     */
    fetch(): Promise<this | undefined>;
    /**
     * Updates the player with new information from `Player.fetch()`. Used internally.
     * @function
     * @returns {Object} The new player object with fetched information.
     */
    update(data: any): this;
    /**
     * Kicks a player from the server.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/clients/KickClient)
     *
     * @function
     * @param {string} reason - The reason for the kick. Cannot exceed 256 bytes.
     */
    kick(reason: string): Promise<unknown> | undefined;
    /**
     * Sends a message to a player's chatbox. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintToChat)
     *
     * @function
     * @param {string} message - The message to send.
     */
    chat(message: string): Promise<unknown> | undefined;
    /**
     * Sends a message to a player's hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintHintText)
     *
     * @function
     * @param {string} message - The message to send.
     */
    hint(message: string): Promise<unknown> | undefined;
    /**
     * Sends a message to a player's center hint box. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/halflife/PrintCenterText)
     *
     * @function
     * @param {string} message - The message to send.
     */
    centerHint(message: string): Promise<unknown> | undefined;
    /**
     * Plays a sound. The file path must be a game sound from `scripts/game_sound.txt` or `sound_misc_dir.vpk`. Cannot exceed 256 bytes.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_sound/EmitGameSoundToClient)
     *
     * @function
     * @param {string} path - File path to the sound
     */
    playSound(path: string): Promise<unknown> | undefined;
    /**
     * Teleports a player to another player.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_functions/TeleportEntity)
     *
     * @function
     * @param {Player} player - The player to teleport to.
     */
    teleport(player: Player): Promise<unknown> | undefined;
    /**
     * Slaps the player, with an optional amount of damage.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_functions/SlapPlayer)
     *
     * @function
     * @param {number} damage - The amount of damage to deal. Defaults to 0.
     */
    slap(damage: number): Promise<unknown> | undefined;
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
    setRendering(r: number, g: number, b: number, a: number, effect: number, mode: number): Promise<unknown> | undefined;
    /**
     * Resets the player's rendering color/effect/mode.
     * [SourceMod API Reference (SetEntityRenderColor)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderColor)
     * [SourceMod API Reference (SetEntityRenderFx)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderFx)
     * [SourceMod API Reference (SetEntityRenderMode)](https://sm.alliedmods.net/new-api/entity_prop_stocks/SetEntityRenderMode)
     *
     * @function
     */
    resetRendering(): Promise<unknown> | undefined;
    /**
     * Regenerates a player's health and ammo. Team Fortress 2 only!
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TF2_RegeneratePlayer)
     *
     * @function Player#regenerate
     */
    regenerate(): Promise<unknown> | undefined;
    /**
     * Gives a player a weapon with custom stats. Team Fortress 2 only! Requires [TF2Items](https://forums.alliedmods.net/showthread.php?t=115100).
     *
     * @param {Weapon} weapon - The weapon object to give.
     * @function Player#giveWeapon
     */
    giveWeapon(weapon: Weapon): Promise<unknown> | undefined;
    /**
     * Adds a condition to a player. Team Fortress 2 only.
     * [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TF2_AddCondition)
     *
     * @param {Condition} condition
     * @param {number} duration - How long to apply the condition for.
     */
    applyCondition(condition: Condition, duration?: number): Promise<unknown> | undefined;
}
export declare type Condition = typeof Condition[keyof typeof Condition];
/**
 * Enum describing conditions that can be applied to a player. Team Fortress 2 only! [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TFCond)
 *
 * Keep in mind that applying some of these won't do anything. Checking for them or removing them from a player would be more useful.
 *
 * @readonly
 * @enum {number} Condition
 *
*/
export declare const Condition: {
    Slowed: number;
    Zoomed: number;
    Disguising: number;
    Disguised: number;
    Cloaked: number;
    Ubercharged: number;
    TeleportGlow: number;
    Taunting: number;
    UberchargeFading: number;
    CloakFlicker: number;
    Teleporting: number;
    Kritzkrieged: number;
    DeadRingered: number;
    Bonked: number;
    Dazed: number;
    BuffBanner: number;
    DemoknightCharging: number;
    EyelanderEyeGlow: number;
    CritACola: number;
    InHealRadius: number;
    Healing: number;
    OnFire: number;
    Overhealed: number;
    Jarated: number;
    Bleeding: number;
    BattalionsBackup: number;
    MadMilk: number;
    QuickFix: number;
    Concheror: number;
    MarkedForDeath: number;
    NoHealingDamageBuff: number;
    DisciplinaryActionSpeed: number;
    HalloweenCritPumpkin: number;
    CritCanteen: number;
    CritDemoCharge: number;
    SodaPopperHype: number;
    ArenaFirstBlood: number;
    CritOnWin: number;
    CritOnFlagCapture: number;
    CritOnKill: number;
    RestrictToMelee: number;
    DefenseBuffNoCritBlock: number;
    PhlogistinatorCritMmmph: number;
    PhlogistinatorDefenseMmmph: number;
    HitmansHeatmakerFocus: number;
    EnforcerDisguiseRemoved: number;
    MarkedForDeathSilent: number;
    DisguisedAsDispenser: number;
    UberchargeCanteen: number;
    HalloweenBombHead: number;
    HalloweenForcedThrillerTaunt: number;
    RadiusHealing: number;
    CritOnDamage: number;
    UberOnDamage: number;
    VaccinatorUberBullet: number;
    VaccinatorUberBlast: number;
    VaccinatorUberFire: number;
    VaccinatorHealBullet: number;
    VaccinatorHealBlast: number;
    VaccinatorHealFire: number;
    BulletImmunity: number;
    BlastImmunity: number;
    FireImmunity: number;
    Buddha: number;
    HalloweenSpeedboost: number;
    HalloweenQuickheal: number;
    Giant: number;
    Tiny: number;
    HalloweenInHell: number;
    HalloweenGhost: number;
    MiniCritOnKill: number;
    BASEJumperParachute: number;
    BlastJumping: number;
    HalloweenKart: number;
    HalloweenKartDash: number;
    BalloonHead: number;
    MeleeOnly: number;
    SwimmingCurse: number;
    HalloweenKartNoTurn: number;
    HalloweenKartCage: number;
    Powerup: number;
    Powerup_Strength: number;
    Powerup_Haste: number;
    Powerup_Regeneration: number;
    Powerup_Resistance: number;
    Powerup_Vampire: number;
    Powerup_Reflect: number;
    Powerup_Precision: number;
    Powerup_Agility: number;
    GrapplingHook: number;
    GrapplingHookSafeFall: number;
    GrapplingHookLatched: number;
    GrapplingHookBleeding: number;
    DeadRingerAfterburnImmunity: number;
    Powerup_Knockout: number;
    Powerup_Imbalance: number;
    Powerup_Crit: number;
    PasstimeInterception: number;
    EscapedUnderworld: number;
    Powerup_King: number;
    Powerup_Plague: number;
    Powerup_Supernova: number;
    Powerup_Plague_Effect: number;
    Powerup_King_Effect: number;
    SpawnOutline: number;
    Airblasted: number;
    CompetitiveWinner: number;
    CompetitiveLoser: number;
    HealingDebuff: number;
    PasstimePenaltyDebuff: number;
    GrappledToPlayer: number;
    BASEJumperParachuteDeployed: number;
    GasPasser: number;
    DragonsFuryAfterburn: number;
    ThermalThrusterLaunched: number;
    LostFooting: number;
    ReducedAirControl: number;
    HalloweenHellHeal: number;
    Powerup_Dominant: number;
};
