import EventEmitter from "events"
import { Events, Messages } from "./Socket.js"
import { checkBytes } from "./Utilities.js"

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
 * @property {number} team - Team index of the player. Keep in mind that this is a generic response from the engine and not the game, and the game-specific `Player.getTeam()` should be used instead.
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
	/**
	 * @constructor
	 * @param {string} players - The `Players` object this belongs to.
	 * @param {object} data - Player data sent from the server.
	 * @param {bool} partial - Whether this object is partial or not. Defaults to false.
	 */
	constructor (players, data, partial) {
		super()
		this.players = players
		this.partial = partial ?? false

		this.update(data)
		this.players.server.game.playerModifier(this)

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
	update(data) {
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
	kick(reason) {
		return this.players.server.socket.send(Messages.KickPlayer, {
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
	chat(message) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket.send(Messages.PlayerChat, {
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
	hint(message) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket.send(Messages.PlayerHint, {
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
	centerHint(message) {
		if (checkBytes(message, 256)) return
		return this.players.server.socket.send(Messages.PlayerCenterHint, {
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
	playSound(path) {
		if (checkBytes(path, 256)) return
		return this.players.server.socket.send(Messages.PlaySound, {
			id: this.id,
			path: path
		})
	}

	/**
	 * Teleports a player to another player.
	 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/sdktools_functions/TeleportEntity)
	 * 
	 * @function
	 * @param {Object} player - The player to teleport to.
	 */
	teleport(player) {
		return this.players.server.socket.send(Messages.TeleportPlayer, {
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
	slap(damage) {
		return this.players.server.socket.send(Messages.SlapPlayer, {
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
	setRendering(r, g, b, a, effect, mode) {
		return this.players.server.socket.send(Messages.SetPlayerRendering, {
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
}