import { Game, Games } from "../classes/Game.js"
import { Messages } from "../classes/Socket.js"

export class TeamFortress2 extends Game {
	constructor() {
		super(Games.TeamFortress2)
	}

	serverModifier(server) {
		return server
	}

	playerModifier(player) {
		/**
		 * Regenerates a player's health and ammo. Team Fortress 2 only!
		 * [SourceMod API Reference](https://sm.alliedmods.net/new-api/tf2/TF2_RegeneratePlayer)
		 * 
		 * @function Player#regenerate
		 */
		player.regenerate = function() {
			return player.players.server.socket.send(Messages.TF2_RegeneratePlayer, player.id)
		}

		return player
	}
}