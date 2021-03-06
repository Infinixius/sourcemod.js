"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TF2Weapons = exports.Weapon = void 0;
/**
 * Object representing a weapon. Team Fortress 2 only!
 * @param {number} id - Index of the weapon in items_game.txt
 * @param {string} classname - Classname of the weapon in items_game.txt
 * @param {number} slot - Slot of the weapon. Should be 1-5
 * @param {boolean} preserveattributes - Whether to preserve the normal weapon's attributes or not.
 * @param {number} level - Level 1-100 of the weapon.
 * @param {number} quality - Quality of the weapon.
 * @returns {any}
 */
class Weapon {
    constructor(id, classname, slot, preserveattributes, level, quality) {
        var _a;
        this.id; // Used to represent the player this weapon is being gave to in Player.ts
        this.weaponid = id !== null && id !== void 0 ? id : 1;
        this.weaponclassname = classname !== null && classname !== void 0 ? classname : "tf_weapon_bottle";
        this.weaponslot = (_a = slot - 1) !== null && _a !== void 0 ? _a : 3;
        this.preserveattributes = preserveattributes !== null && preserveattributes !== void 0 ? preserveattributes : true;
        this.level = level !== null && level !== void 0 ? level : -1;
        this.quality = quality !== null && quality !== void 0 ? quality : -1;
        this.attributes = [];
    }
    /**
     * Function that adds an attribute to a item.
     * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
     *
     * @function
     * @param {number} id - ID of the attribute.
     * @param {any} value - A number or a boolean representing the value of the attribute.
     * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
     */
    addAttribute(id, value) {
        if (this.attributes.length >= 16) {
            throw "Exceeded maximum amount of attributes!";
        }
        if (typeof value == "boolean") {
            this.attributes.push({ id: id, value: value, type: "bool" });
        }
        else if (typeof value == "number") {
            if (value == Math.floor(value)) {
                this.attributes.push({ id: id, value: value, type: "int" });
            }
            else {
                this.attributes.push({ id: id, value: value, type: "float" });
            }
        }
    }
    /**
     * Turn the weapon into an australium if it can become one.
     * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
     *
     * @function
     * @throws Will throw an error if the weapon cannot be Australium.
     */
    setAustralium() {
        var _a;
        const newweaponid = (_a = ModifiedStockWeapons[this.weaponid]) !== null && _a !== void 0 ? _a : this.weaponid;
        if (!AustraliumWhitelist.includes(newweaponid)) {
            throw "Weapon cannot be australium!";
        }
        // This fixes a "bug" where stock weapons can't have the "is australium item" attribute.
        // Instead, you must use the Strange variant of a stock weapon to apply that attribute,
        // which is done automatically here. Thanks to puntero for helping me figure this out.
        this.weaponid = newweaponid;
        this.addAttribute(2027, true);
        this.addAttribute(2022, true);
        this.addAttribute(542, true);
    }
    /**
     * If the weapon can be festivized, add the attribute for turning it into one.
     * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
     *
     * @function
     * @throws Will throw an error if the weapon cannot be festivized.
     */
    setFestivized() {
        var _a;
        const newweaponid = (_a = ModifiedStockWeapons[this.weaponid]) !== null && _a !== void 0 ? _a : this.weaponid;
        if (!FestiveWhitelist.includes(newweaponid)) {
            /**
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            throw "Weapon cannot be festivized!";
        }
        // This fixes a "bug" where stock weapons can't have the "is australium item" attribute.
        // Instead, you must use the Strange variant of a stock weapon to apply that attribute,
        // which is done automatically here. Thanks to puntero for helping me figure this out.
        this.weaponid = newweaponid;
        this.addAttribute(2053, true);
    }
}
exports.Weapon = Weapon;
const AustraliumWhitelist = [200, 45, 205, 228, 208, 38, 206, 207, 132, 202, 424, 141, 197, 36, 211, 201, 203, 61, 194];
const FestiveWhitelist = [200, 220, 448, 449, 44, 221, 205, 228, 1104, 196, 447, 208, 215, 1178, 351, 740, 192, 214, 326, 206, 308, 996, 207, 130, 172, 327, 404, 202, 41, 312, 424, 425, 997, 197, 329, 305, 211, 35, 411, 37, 304, 201, 402, 203, 193, 401, 210, 194, 649, 209, 415, 199, 1153];
const ModifiedStockWeapons = {
    13: 200,
    23: 209,
    0: 190,
    18: 205,
    10: 199,
    6: 196,
    21: 208,
    12: 199,
    2: 192,
    19: 206,
    20: 207,
    1: 191,
    15: 202,
    11: 199,
    5: 195,
    9: 199,
    22: 209,
    7: 197,
    25: 737,
    17: 204,
    29: 211,
    8: 198,
    14: 201,
    16: 203,
    3: 193,
    24: 210,
    735: 736,
    4: 194,
    30: 212 // Invis Watch
};
/**
 * Object with every normal weapon/reskin in Team Fortress 2.
 * @example
 * player.giveWeapon(new TF2Weapons.Scattergun())
 * @readonly
 * @enum {class}
 * TODO: make it so all the weapons show up in the "TF2Weapons" properties list, but not in the global classes list
 * TODO: currently the only way to do this is by adding @ignore to every weapon
 */
exports.TF2Weapons = {
    /* Scout */
    /** @ignore */ Scattergun: class extends Weapon {
        constructor() { super(13, "tf_weapon_scattergun", 1); }
    },
    /** @ignore */ ForceANature: class extends Weapon {
        constructor() { super(45, "tf_weapon_scattergun", 1); }
    },
    /** @ignore */ Shortstop: class extends Weapon {
        constructor() { super(220, "tf_weapon_handgun_scout_primary", 1); }
    },
    /** @ignore */ SodaPopper: class extends Weapon {
        constructor() { super(448, "tf_weapon_soda_popper", 1); }
    },
    /** @ignore */ BabyFacesBlaster: class extends Weapon {
        constructor() { super(772, "tf_weapon_pep_brawler_blaster", 1); }
    },
    /** @ignore */ BackScatter: class extends Weapon {
        constructor() { super(1103, "tf_weapon_scattergun", 1); }
    },
    /** @ignore */ BonkAtomicPunch: class extends Weapon {
        constructor() { super(46, "tf_weapon_lunchbox_drink", 2); }
    },
    /** @ignore */ CritACola: class extends Weapon {
        constructor() { super(163, "tf_weapon_lunchbox_drink", 2); }
    },
    /** @ignore */ MadMilk: class extends Weapon {
        constructor() { super(222, "tf_weapon_jar_milk", 2); }
    },
    /** @ignore */ Winger: class extends Weapon {
        constructor() { super(449, "tf_weapon_handgun_scout_secondary", 2); }
    },
    /** @ignore */ PrettyBoysPocketPistol: class extends Weapon {
        constructor() { super(773, "tf_weapon_handgun_scout_secondary", 2); }
    },
    /** @ignore */ FlyingGuillotine: class extends Weapon {
        constructor() { super(812, "tf_weapon_cleaver", 2); }
    },
    /** @ignore */ MutatedMilk: class extends Weapon {
        constructor() { super(1121, "tf_weapon_jar_milk", 2); }
    },
    /** @ignore */ Bat: class extends Weapon {
        constructor() { super(0, "tf_weapon_bat", 3); }
    },
    /** @ignore */ Sandman: class extends Weapon {
        constructor() { super(190, "tf_weapon_bat_wood", 3); }
    },
    /** @ignore */ HolyMackerel: class extends Weapon {
        constructor() { super(190, "tf_weapon_bat_fish", 3); }
    },
    /** @ignore */ CandyCane: class extends Weapon {
        constructor() { super(317, "tf_weapon_bat", 3); }
    },
    /** @ignore */ BostonBasher: class extends Weapon {
        constructor() { super(325, "tf_weapon_bat", 3); }
    },
    /** @ignore */ SunOnAStick: class extends Weapon {
        constructor() { super(349, "tf_weapon_bat", 3); }
    },
    /** @ignore */ FanOWar: class extends Weapon {
        constructor() { super(355, "tf_weapon_bat", 3); }
    },
    /** @ignore */ Atomizer: class extends Weapon {
        constructor() { super(450, "tf_weapon_bat", 3); }
    },
    /** @ignore */ ThreeRuneBlade: class extends Weapon {
        constructor() { super(452, "tf_weapon_bat", 3); }
    },
    /** @ignore */ UnarmedCombat: class extends Weapon {
        constructor() { super(572, "tf_weapon_bat_fish", 3); }
    },
    /** @ignore */ WrapAssassin: class extends Weapon {
        constructor() { super(648, "tf_weapon_bat_giftwrap", 3); }
    },
    /** @ignore */ Batsaber: class extends Weapon {
        constructor() { super(30667, "tf_weapon_bat_giftwrap", 3); }
    },
    /* Soldier */
    /** @ignore */ RocketLauncher: class extends Weapon {
        constructor() { super(18, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ DirectHit: class extends Weapon {
        constructor() { super(127, "tf_weapon_rocketlauncher_directhit", 1); }
    },
    /** @ignore */ BlackBox: class extends Weapon {
        constructor() { super(228, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ RocketJumper: class extends Weapon {
        constructor() { super(237, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ LibertyLauncher: class extends Weapon {
        constructor() { super(414, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ CowMangler5000: class extends Weapon {
        constructor() { super(441, "tf_weapon_particle_cannon", 1); }
    },
    /** @ignore */ Original: class extends Weapon {
        constructor() { super(513, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ BeggarsBazooka: class extends Weapon {
        constructor() { super(730, "tf_weapon_rocketlauncher", 1); }
    },
    /** @ignore */ AirStrike: class extends Weapon {
        constructor() { super(1104, "tf_weapon_rocketlauncher_airstrike", 1); }
    },
    /** @ignore */ BuffBanner: class extends Weapon {
        constructor() { super(129, "tf_weapon_buff_item", 2); }
    },
    /** @ignore */ Gunboats: class extends Weapon {
        constructor() { super(133, "tf_wearable", 2); }
    },
    /** @ignore */ BattalionsBackup: class extends Weapon {
        constructor() { super(226, "tf_weapon_buff_item", 2); }
    },
    /** @ignore */ Concheror: class extends Weapon {
        constructor() { super(354, "tf_weapon_buff_item", 2); }
    },
    /** @ignore */ RighteousBison: class extends Weapon {
        constructor() { super(442, "tf_weapon_raygun", 2); }
    },
    /** @ignore */ Mantreads: class extends Weapon {
        constructor() { super(444, "tf_wearable", 2); }
    },
    /** @ignore */ Shovel: class extends Weapon {
        constructor() { super(6, "tf_weapon_shovel", 3); }
    },
    /** @ignore */ Equalizer: class extends Weapon {
        constructor() { super(128, "tf_weapon_shovel", 3); }
    },
    /** @ignore */ MarketGardener: class extends Weapon {
        constructor() { super(416, "tf_weapon_shovel", 3); }
    },
    /** @ignore */ DisciplinaryAction: class extends Weapon {
        constructor() { super(447, "tf_weapon_shovel", 3); }
    },
    /** @ignore */ EscapePlan: class extends Weapon {
        constructor() { super(775, "tf_weapon_shovel", 3); }
    },
    /* Pyro */
    /** @ignore */ FlameThrower: class extends Weapon {
        constructor() { super(21, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ Backburner: class extends Weapon {
        constructor() { super(40, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ Degreaser: class extends Weapon {
        constructor() { super(215, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ Phlogistinator: class extends Weapon {
        constructor() { super(594, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ Rainblower: class extends Weapon {
        constructor() { super(741, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ DragonsFury: class extends Weapon {
        constructor() { super(1178, "tf_weapon_flamethrower_fireball", 1); }
    },
    /** @ignore */ NostromoNapalmer: class extends Weapon {
        constructor() { super(30474, "tf_weapon_flamethrower", 1); }
    },
    /** @ignore */ FlareGun: class extends Weapon {
        constructor() { super(39, "tf_weapon_flaregun", 2); }
    },
    /** @ignore */ Detonator: class extends Weapon {
        constructor() { super(351, "tf_weapon_flaregun", 2); }
    },
    /** @ignore */ Manmelter: class extends Weapon {
        constructor() { super(595, "tf_weapon_flaregun_revenge", 2); }
    },
    /** @ignore */ ScorchShot: class extends Weapon {
        constructor() { super(740, "tf_weapon_flaregun", 2); }
    },
    /** @ignore */ ThermalThruster: class extends Weapon {
        constructor() { super(1179, "tf_weapon_rocketpack", 2); }
    },
    /** @ignore */ GasPasser: class extends Weapon {
        constructor() { super(1180, "tf_weapon_jar_gas", 2); }
    },
    /** @ignore */ FireAxe: class extends Weapon {
        constructor() { super(2, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ Axtinguisher: class extends Weapon {
        constructor() { super(38, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ Homewrecker: class extends Weapon {
        constructor() { super(153, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ Powerjack: class extends Weapon {
        constructor() { super(214, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ BackScratcher: class extends Weapon {
        constructor() { super(326, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ SharpenedVolcanoFragment: class extends Weapon {
        constructor() { super(348, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ PostalPummeler: class extends Weapon {
        constructor() { super(457, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ Maul: class extends Weapon {
        constructor() { super(446, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ ThirdDegree: class extends Weapon {
        constructor() { super(593, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ Lollichop: class extends Weapon {
        constructor() { super(739, "tf_weapon_fireaxe", 3); }
    },
    /** @ignore */ NeonAnnihilator: class extends Weapon {
        constructor() { super(813, "tf_weapon_breakable_sign", 3); }
    },
    /** @ignore */ HotHand: class extends Weapon {
        constructor() { super(1181, "tf_weapon_slap", 3); }
    },
    /* Demoman */
    /** @ignore */ GrenadeLauncher: class extends Weapon {
        constructor() { super(19, "tf_weapon_grenadelauncher", 1); }
    },
    /** @ignore */ LochNLoad: class extends Weapon {
        constructor() { super(308, "tf_weapon_grenadelauncher", 1); }
    },
    /** @ignore */ AliBabasWeeBooties: class extends Weapon {
        constructor() { super(405, "tf_weapon_wearable", 1); }
    },
    /** @ignore */ Bootlegger: class extends Weapon {
        constructor() { super(608, "tf_wearable", 1); }
    },
    /** @ignore */ LooseCannon: class extends Weapon {
        constructor() { super(996, "tf_weapon_cannon", 1); }
    },
    /** @ignore */ IronBomber: class extends Weapon {
        constructor() { super(1151, "tf_weapon_grenadelauncher", 1); }
    },
    /** @ignore */ StickybombLauncher: class extends Weapon {
        constructor() { super(20, "tf_weapon_pipebomblauncher", 2); }
    },
    /** @ignore */ ScottishResistance: class extends Weapon {
        constructor() { super(130, "tf_weapon_pipebomblauncher", 2); }
    },
    /** @ignore */ CharginTarge: class extends Weapon {
        constructor() { super(131, "tf_wearable_demoshield", 2); }
    },
    /** @ignore */ StickyJumper: class extends Weapon {
        constructor() { super(265, "tf_weapon_pipebomblauncher", 2); }
    },
    /** @ignore */ SplendidScreen: class extends Weapon {
        constructor() { super(406, "tf_wearable_demoshield", 2); }
    },
    /** @ignore */ TideTurner: class extends Weapon {
        constructor() { super(1099, "tf_wearable_demoshield", 2); }
    },
    /** @ignore */ QuickieBombLauncher: class extends Weapon {
        constructor() { super(1150, "tf_weapon_pipebomblauncher", 2); }
    },
    /** @ignore */ Bottle: class extends Weapon {
        constructor() { super(1, "tf_weapon_bottle", 3); }
    },
    /** @ignore */ Eyelander: class extends Weapon {
        constructor() { super(132, "tf_weapon_sword", 3); }
    },
    /** @ignore */ ScotsmansSkullcutter: class extends Weapon {
        constructor() { super(172, "tf_weapon_sword", 3); }
    },
    /** @ignore */ HorselessHeadlessHorsemannsHeadtaker: class extends Weapon {
        constructor() { super(266, "tf_weapon_sword", 3); }
    },
    /** @ignore */ UllapoolCaber: class extends Weapon {
        constructor() { super(307, "tf_weapon_stickbomb", 3); }
    },
    /** @ignore */ ClaidheamhMor: class extends Weapon {
        constructor() { super(327, "tf_weapon_sword", 3); }
    },
    /** @ignore */ PersianPersuader: class extends Weapon {
        constructor() { super(404, "tf_weapon_sword", 3); }
    },
    /** @ignore */ NessiesNineIron: class extends Weapon {
        constructor() { super(482, "tf_weapon_sword", 3); }
    },
    /** @ignore */ ScottishHandshake: class extends Weapon {
        constructor() { super(609, "tf_weapon_bottle", 3); }
    },
    /* Heavy */
    /** @ignore */ Minigun: class extends Weapon {
        constructor() { super(15, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ Natascha: class extends Weapon {
        constructor() { super(41, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ IronCurtain: class extends Weapon {
        constructor() { super(298, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ BrassBeast: class extends Weapon {
        constructor() { super(312, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ Tomislav: class extends Weapon {
        constructor() { super(424, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ HuoLongHeater: class extends Weapon {
        constructor() { super(811, "tf_weapon_minigun", 1); }
    },
    /** @ignore */ Sandvich: class extends Weapon {
        constructor() { super(42, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ DalokohsBar: class extends Weapon {
        constructor() { super(159, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ BuffaloSteakSandvich: class extends Weapon {
        constructor() { super(311, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ FamilyBusiness: class extends Weapon {
        constructor() { super(425, "tf_weapon_shotgun_hwg", 2); }
    },
    /** @ignore */ Fishcake: class extends Weapon {
        constructor() { super(433, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ RoboSandvich: class extends Weapon {
        constructor() { super(863, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ SecondBanana: class extends Weapon {
        constructor() { super(1190, "tf_weapon_lunchbox", 2); }
    },
    /** @ignore */ Fists: class extends Weapon {
        constructor() { super(5, "tf_weapon_fists", 3); }
    },
    /** @ignore */ KillingGlovesOfBoxing: class extends Weapon {
        constructor() { super(43, "tf_weapon_fists", 3); }
    },
    /** @ignore */ GlovesOfRunningUrgently: class extends Weapon {
        constructor() { super(239, "tf_weapon_fists", 3); }
    },
    /** @ignore */ WarriorsSpirit: class extends Weapon {
        constructor() { super(310, "tf_weapon_fists", 3); }
    },
    /** @ignore */ FistsOfSteel: class extends Weapon {
        constructor() { super(331, "tf_weapon_fists", 3); }
    },
    /** @ignore */ EvictionNotice: class extends Weapon {
        constructor() { super(426, "tf_weapon_fists", 3); }
    },
    /** @ignore */ ApocoFists: class extends Weapon {
        constructor() { super(587, "tf_weapon_fists", 3); }
    },
    /** @ignore */ HolidayPunch: class extends Weapon {
        constructor() { super(656, "tf_weapon_fists", 3); }
    },
    /** @ignore */ BreadBite: class extends Weapon {
        constructor() { super(1100, "tf_weapon_fists", 3); }
    },
    /* Engineer */
    /** @ignore */ ShotgunEngineer: class extends Weapon {
        constructor() { super(129, "tf_weapon_shotgun", 1); }
    },
    /** @ignore */ FrontierJustice: class extends Weapon {
        constructor() { super(141, "tf_weapon_sentry_revenge", 1); }
    },
    /** @ignore */ Widowmaker: class extends Weapon {
        constructor() { super(527, "tf_weapon_shotgun_primary", 1); }
    },
    /** @ignore */ Pomson6000: class extends Weapon {
        constructor() { super(588, "tf_weapon_drg_pomson", 1); }
    },
    /** @ignore */ RescueRanger: class extends Weapon {
        constructor() { super(997, "tf_weapon_shotgun_building_rescue", 1); }
    },
    /** @ignore */ Wrangler: class extends Weapon {
        constructor() { super(140, "tf_weapon_laser_pointer", 2); }
    },
    /** @ignore */ ShortCircuit: class extends Weapon {
        constructor() { super(528, "tf_weapon_mechanical_arm", 2); }
    },
    /** @ignore */ GigarCounter: class extends Weapon {
        constructor() { super(30668, "tf_weapon_laser_pointer", 2); }
    },
    /** @ignore */ Wrench: class extends Weapon {
        constructor() { super(7, "tf_weapon_wrench", 3); }
    },
    /** @ignore */ Gunslinger: class extends Weapon {
        constructor() { super(142, "tf_weapon_robot_arm", 3); }
    },
    /** @ignore */ SouthernHospitality: class extends Weapon {
        constructor() { super(155, "tf_weapon_wrench", 3); }
    },
    /** @ignore */ GoldenWrench: class extends Weapon {
        constructor() { super(169, "tf_weapon_wrench", 3); }
    },
    /** @ignore */ Jag: class extends Weapon {
        constructor() { super(329, "tf_weapon_wrench", 3); }
    },
    /** @ignore */ EurekaEffect: class extends Weapon {
        constructor() { super(589, "tf_weapon_wrench", 3); }
    },
    /** @ignore */ ConstructionPDA: class extends Weapon {
        constructor() { super(25, "tf_weapon_pda_engineer_build", 4); }
    },
    /** @ignore */ DestructionPDA: class extends Weapon {
        constructor() { super(26, "tf_weapon_pda_engineer_destroy", 5); }
    },
    /** @ignore */ Toolbox: class extends Weapon {
        constructor() { super(28, "tf_weapon_builder", 6); }
    },
    /* Medic */
    /** @ignore */ SyringeGun: class extends Weapon {
        constructor() { super(17, "tf_weapon_syringegun_medic", 1); }
    },
    /** @ignore */ Blutsauger: class extends Weapon {
        constructor() { super(36, "tf_weapon_syringegun_medic", 1); }
    },
    /** @ignore */ CrusadersCrossbow: class extends Weapon {
        constructor() { super(305, "tf_weapon_crossbow", 1); }
    },
    /** @ignore */ Overdose: class extends Weapon {
        constructor() { super(412, "tf_weapon_syringegun_medic", 1); }
    },
    /** @ignore */ MediGun: class extends Weapon {
        constructor() { super(29, "tf_weapon_medigun", 2); }
    },
    /** @ignore */ KritzKrieg: class extends Weapon {
        constructor() { super(35, "tf_weapon_medigun", 2); }
    },
    /** @ignore */ QuickFix: class extends Weapon {
        constructor() { super(411, "tf_weapon_medigun", 2); }
    },
    /** @ignore */ Vaccinator: class extends Weapon {
        constructor() { super(998, "tf_weapon_medigun", 2); }
    },
    /** @ignore */ Bonesaw: class extends Weapon {
        constructor() { super(8, "tf_weapon_bonesaw", 3); }
    },
    /** @ignore */ Ubersaw: class extends Weapon {
        constructor() { super(37, "tf_weapon_bonesaw", 3); }
    },
    /** @ignore */ VitaSaw: class extends Weapon {
        constructor() { super(173, "tf_weapon_bonesaw", 3); }
    },
    /** @ignore */ Amputator: class extends Weapon {
        constructor() { super(304, "tf_weapon_bonesaw", 3); }
    },
    /** @ignore */ SolemnVow: class extends Weapon {
        constructor() { super(413, "tf_weapon_bonesaw", 3); }
    },
    /* Sniper */
    /** @ignore */ SniperRifle: class extends Weapon {
        constructor() { super(14, "tf_weapon_sniperrifle", 1); }
    },
    /** @ignore */ Huntsman: class extends Weapon {
        constructor() { super(56, "tf_weapon_compound_bow", 1); }
    },
    /** @ignore */ SydneySleeper: class extends Weapon {
        constructor() { super(230, "tf_weapon_sniperrifle", 1); }
    },
    /** @ignore */ BazaarBargain: class extends Weapon {
        constructor() { super(402, "tf_weapon_sniperrifle_decap", 1); }
    },
    /** @ignore */ Machina: class extends Weapon {
        constructor() { super(526, "tf_weapon_sniperrifle", 1); }
    },
    /** @ignore */ HitmansHeatmaker: class extends Weapon {
        constructor() { super(752, "tf_weapon_sniperrifle", 1); }
    },
    /** @ignore */ AWPerHand: class extends Weapon {
        constructor() { super(851, "tf_weapon_sniperrifle", 1); }
    },
    /** @ignore */ FortifiedCompound: class extends Weapon {
        constructor() { super(1092, "tf_weapon_compound_bow", 1); }
    },
    /** @ignore */ Classic: class extends Weapon {
        constructor() { super(1098, "tf_weapon_sniperrifle_classic", 1); }
    },
    /** @ignore */ SMG: class extends Weapon {
        constructor() { super(16, "tf_weapon_smg", 2); }
    },
    /** @ignore */ Razorback: class extends Weapon {
        constructor() { super(57, "tf_wearable_razorback", 2); }
    },
    /** @ignore */ Jarate: class extends Weapon {
        constructor() { super(58, "tf_weapon_jar", 2); }
    },
    /** @ignore */ DarwinsDangerShield: class extends Weapon {
        constructor() { super(231, "tf_wearable", 2); }
    },
    /** @ignore */ CozyCamper: class extends Weapon {
        constructor() { super(642, "tf_wearable", 2); }
    },
    /** @ignore */ CleanersCarbine: class extends Weapon {
        constructor() { super(751, "tf_weapon_charged_smg", 2); }
    },
    /** @ignore */ SelfAwareBeautyMark: class extends Weapon {
        constructor() { super(1105, "tf_weapon_jar", 2); }
    },
    /** @ignore */ Kukri: class extends Weapon {
        constructor() { super(3, "tf_weapon_club", 3); }
    },
    /** @ignore */ TribalmansShiv: class extends Weapon {
        constructor() { super(171, "tf_weapon_club", 3); }
    },
    /** @ignore */ Bushwacka: class extends Weapon {
        constructor() { super(232, "tf_weapon_club", 3); }
    },
    /** @ignore */ Shahanshah: class extends Weapon {
        constructor() { super(401, "tf_weapon_club", 3); }
    },
    /* Spy */
    /** @ignore */ Revolver: class extends Weapon {
        constructor() { super(24, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ Ambassador: class extends Weapon {
        constructor() { super(61, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ BigKill: class extends Weapon {
        constructor() { super(161, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ LEtranger: class extends Weapon {
        constructor() { super(224, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ Enforcer: class extends Weapon {
        constructor() { super(460, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ Diamondback: class extends Weapon {
        constructor() { super(525, "tf_weapon_revolver", 1); }
    },
    /** @ignore */ Sapper: class extends Weapon {
        constructor() { super(735, "tf_weapon_builder", 2); }
    },
    /** @ignore */ RedTapeRecorder: class extends Weapon {
        constructor() { super(810, "tf_weapon_sapper", 2); }
    },
    /** @ignore */ ApSap: class extends Weapon {
        constructor() { super(933, "tf_weapon_sapper", 2); }
    },
    /** @ignore */ SnackAttack: class extends Weapon {
        constructor() { super(1102, "tf_weapon_sapper", 2); }
    },
    /** @ignore */ Knife: class extends Weapon {
        constructor() { super(4, "tf_weapon_knife", 3); }
    },
    /** @ignore */ YourEternalReward: class extends Weapon {
        constructor() { super(225, "tf_weapon_knife", 3); }
    },
    /** @ignore */ ConniversKunai: class extends Weapon {
        constructor() { super(356, "tf_weapon_knife", 3); }
    },
    /** @ignore */ BigEarner: class extends Weapon {
        constructor() { super(461, "tf_weapon_knife", 3); }
    },
    /** @ignore */ WangaPrick: class extends Weapon {
        constructor() { super(574, "tf_weapon_knife", 3); }
    },
    /** @ignore */ SharpDresser: class extends Weapon {
        constructor() { super(638, "tf_weapon_knife", 3); }
    },
    /** @ignore */ Spycicle: class extends Weapon {
        constructor() { super(649, "tf_weapon_knife", 3); }
    },
    /** @ignore */ BlackRose: class extends Weapon {
        constructor() { super(727, "tf_weapon_knife", 3); }
    },
    /** @ignore */ DisguiseKit: class extends Weapon {
        constructor() { super(27, "tf_weapon_pda_spy", 4); }
    },
    /** @ignore */ InvisWatch: class extends Weapon {
        constructor() { super(30, "tf_weapon_invis", 5); }
    },
    /** @ignore */ DeadRinger: class extends Weapon {
        constructor() { super(59, "tf_weapon_invis", 5); }
    },
    /** @ignore */ CloakAndDagger: class extends Weapon {
        constructor() { super(60, "tf_weapon_invis", 5); }
    },
    /** @ignore */ EnthusiastsTimepiece: class extends Weapon {
        constructor() { super(297, "tf_weapon_invis", 5); }
    },
    /** @ignore */ Quackenbirdt: class extends Weapon {
        constructor() { super(947, "tf_weapon_invis", 5); }
    },
    /* Multi Class */
    /** @ignore */ Pistol: class extends Weapon {
        constructor() { super(209, "tf_weapon_pistol", 2); }
    },
    /** @ignore */ VintageLugermorph: class extends Weapon {
        constructor() { super(160, "tf_weapon_pistol", 2); }
    },
    /** @ignore */ Lugermorph: class extends Weapon {
        constructor() { super(294, "tf_weapon_pistol", 2); }
    },
    /** @ignore */ CAPPER: class extends Weapon {
        constructor() { super(30666, "tf_weapon_pistol", 2); }
    },
    /** @ignore */ Shotgun: class extends Weapon {
        constructor() { super(129, "tf_weapon_shotgun", 2); }
    },
    /** @ignore */ ReserveShooter: class extends Weapon {
        constructor() { super(415, "tf_weapon_shotgun", 2); }
    },
    /** @ignore */ BASEJumper: class extends Weapon {
        constructor() { super(1101, "tf_weapon_parachute", 2); }
    },
    /** @ignore */ PainTrain: class extends Weapon {
        constructor() { super(154, "tf_weapon_shovel", 3); }
    },
    /** @ignore */ HalfZatoichi: class extends Weapon {
        constructor() { super(357, "tf_weapon_katana", 3); }
    },
    /* All Class */
    /** @ignore */ FryingPan: class extends Weapon {
        constructor() { super(264, "saxxy", 3); }
    },
    /** @ignore */ Saxxy: class extends Weapon {
        constructor() { super(423, "saxxy", 3); }
    },
    /** @ignore */ ConscientiousObjector: class extends Weapon {
        constructor() { super(474, "saxxy", 3); }
    },
    /** @ignore */ FreedomStaff: class extends Weapon {
        constructor() { super(880, "saxxy", 3); }
    },
    /** @ignore */ BatOuttaHell: class extends Weapon {
        constructor() { super(939, "saxxy", 3); }
    },
    /** @ignore */ MemoryMaker: class extends Weapon {
        constructor() { super(954, "saxxy", 3); }
    },
    /** @ignore */ HamShank: class extends Weapon {
        constructor() { super(1013, "saxxy", 3); }
    },
    /** @ignore */ GoldFryingPan: class extends Weapon {
        constructor() { super(1071, "saxxy", 3); }
    },
    /** @ignore */ NecroSmasher: class extends Weapon {
        constructor() { super(1123, "saxxy", 3); }
    },
    /** @ignore */ CrossingGuard: class extends Weapon {
        constructor() { super(1127, "saxxy", 3); }
    },
    /** @ignore */ PrinnyMachete: class extends Weapon {
        constructor() { super(30758, "saxxy", 3); }
    },
};
