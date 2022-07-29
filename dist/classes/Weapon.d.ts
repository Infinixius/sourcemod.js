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
export declare class Weapon {
    id: number | undefined;
    weaponid: number;
    weaponclassname: string;
    weaponslot: number;
    preserveattributes: boolean;
    level: number;
    quality: number;
    attributes: Array<any>;
    constructor(id: number, classname: string, slot: number, preserveattributes?: boolean, level?: number, quality?: number);
    /**
     * Function that adds an attribute to a item.
     * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
     *
     * @function
     * @param {number} id - ID of the attribute.
     * @param {any} value - A number or a boolean representing the value of the attribute.
     * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
     */
    addAttribute(id: number, value: number | boolean): void;
    /**
     * Turn the weapon into an australium if it can become one.
     * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
     *
     * @function
     * @throws Will throw an error if the weapon cannot be Australium.
     */
    setAustralium(): void;
    /**
     * If the weapon can be festivized, add the attribute for turning it into one.
     * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
     *
     * @function
     * @throws Will throw an error if the weapon cannot be festivized.
     */
    setFestivized(): void;
}
/**
 * Object with every normal weapon/reskin in Team Fortress 2.
 * @example
 * player.giveWeapon(new TF2Weapons.Scattergun())
 * @readonly
 * @enum {class}
 * TODO: make it so all the weapons show up in the "TF2Weapons" properties list, but not in the global classes list
 * TODO: currently the only way to do this is by adding @ignore to every weapon
 */
export declare const TF2Weapons: {
    /** @ignore */ Scattergun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ForceANature: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Shortstop: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SodaPopper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BabyFacesBlaster: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BackScatter: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BonkAtomicPunch: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CritACola: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ MadMilk: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Winger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ PrettyBoysPocketPistol: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FlyingGuillotine: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ MutatedMilk: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Bat: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Sandman: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HolyMackerel: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CandyCane: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BostonBasher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SunOnAStick: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FanOWar: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Atomizer: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ThreeRuneBlade: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ UnarmedCombat: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ WrapAssassin: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Batsaber: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RocketLauncher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DirectHit: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BlackBox: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RocketJumper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ LibertyLauncher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CowMangler5000: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Original: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BeggarsBazooka: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ AirStrike: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BuffBanner: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Gunboats: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BattalionsBackup: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Concheror: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RighteousBison: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Mantreads: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Shovel: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Equalizer: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ MarketGardener: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DisciplinaryAction: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ EscapePlan: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FlameThrower: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Backburner: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Degreaser: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Phlogistinator: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Rainblower: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DragonsFury: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ NostromoNapalmer: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FlareGun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Detonator: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Manmelter: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ScorchShot: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ThermalThruster: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GasPasser: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FireAxe: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Axtinguisher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Homewrecker: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Powerjack: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BackScratcher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SharpenedVolcanoFragment: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ PostalPummeler: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Maul: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ThirdDegree: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Lollichop: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ NeonAnnihilator: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HotHand: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GrenadeLauncher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ LochNLoad: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ AliBabasWeeBooties: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Bootlegger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ LooseCannon: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ IronBomber: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ StickybombLauncher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ScottishResistance: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CharginTarge: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ StickyJumper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SplendidScreen: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ TideTurner: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ QuickieBombLauncher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Bottle: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Eyelander: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ScotsmansSkullcutter: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HorselessHeadlessHorsemannsHeadtaker: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ UllapoolCaber: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ClaidheamhMor: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ PersianPersuader: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ NessiesNineIron: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ScottishHandshake: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Minigun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Natascha: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ IronCurtain: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BrassBeast: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Tomislav: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HuoLongHeater: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Sandvich: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DalokohsBar: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BuffaloSteakSandvich: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FamilyBusiness: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Fishcake: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RoboSandvich: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SecondBanana: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Fists: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ KillingGlovesOfBoxing: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GlovesOfRunningUrgently: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ WarriorsSpirit: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FistsOfSteel: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ EvictionNotice: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ApocoFists: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HolidayPunch: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BreadBite: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ShotgunEngineer: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FrontierJustice: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Widowmaker: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Pomson6000: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RescueRanger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Wrangler: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ShortCircuit: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GigarCounter: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Wrench: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Gunslinger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SouthernHospitality: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GoldenWrench: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Jag: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ EurekaEffect: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ConstructionPDA: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DestructionPDA: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Toolbox: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SyringeGun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Blutsauger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CrusadersCrossbow: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Overdose: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ MediGun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ KritzKrieg: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ QuickFix: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Vaccinator: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Bonesaw: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Ubersaw: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ VitaSaw: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Amputator: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SolemnVow: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SniperRifle: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Huntsman: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SydneySleeper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BazaarBargain: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Machina: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HitmansHeatmaker: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ AWPerHand: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FortifiedCompound: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Classic: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SMG: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Razorback: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Jarate: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DarwinsDangerShield: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CozyCamper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CleanersCarbine: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SelfAwareBeautyMark: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Kukri: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ TribalmansShiv: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Bushwacka: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Shahanshah: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Revolver: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Ambassador: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BigKill: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ LEtranger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Enforcer: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Diamondback: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Sapper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ RedTapeRecorder: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ApSap: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SnackAttack: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Knife: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ YourEternalReward: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ConniversKunai: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BigEarner: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ WangaPrick: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ SharpDresser: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Spycicle: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BlackRose: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DisguiseKit: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ InvisWatch: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ DeadRinger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CloakAndDagger: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ EnthusiastsTimepiece: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Quackenbirdt: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Pistol: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ VintageLugermorph: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Lugermorph: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CAPPER: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Shotgun: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ReserveShooter: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BASEJumper: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ PainTrain: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HalfZatoichi: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FryingPan: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ Saxxy: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ ConscientiousObjector: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ FreedomStaff: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ BatOuttaHell: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ MemoryMaker: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ HamShank: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ GoldFryingPan: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ NecroSmasher: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ CrossingGuard: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
    /** @ignore */ PrinnyMachete: {
        new (): {
            id: number | undefined;
            weaponid: number;
            weaponclassname: string;
            weaponslot: number;
            preserveattributes: boolean;
            level: number;
            quality: number;
            attributes: Array<any>;
            /**
             * Function that adds an attribute to a item.
             * You can find a giant list of all possible attributes at the [TF2 Wiki](https://wiki.teamfortress.com/wiki/List_of_item_attributes).
             *
             * @function
             * @param {number} id - ID of the attribute.
             * @param {any} value - A number or a boolean representing the value of the attribute.
             * @throws Will throw an error if the weapon already has 16 attributes or more. This is a limitation of TF2 itself.
             */
            addAttribute(id: number, value: number | boolean): void;
            /**
             * Turn the weapon into an australium if it can become one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be Australium.
             */
            setAustralium(): void;
            /**
             * If the weapon can be festivized, add the attribute for turning it into one.
             * Keep in mind this method internally calls `addAttribute`, and as such will throw if 16 attributes are exceeded.
             *
             * @function
             * @throws Will throw an error if the weapon cannot be festivized.
             */
            setFestivized(): void;
        };
    };
};
