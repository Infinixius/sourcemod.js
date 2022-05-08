/**
 * @typedef Games
 * @property {string} None
 * @property {string} TeamFortress2
 */
export const Games = {
	None: "None",
	TeamFortress2: "TeamFortress2"
}

export class Game {
	constructor(type) {
		this.type = type ?? Games.None
	}

	serverModifier(server) {
		return server
	}

	playerModifier(player) {
		return player
	}
}