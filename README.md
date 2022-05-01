<p align="center">
<img src="https://infinixi.us/sourcemod.js/assets/logo_shadow.png">
</p>

![npm](https://img.shields.io/npm/v/sourcemod.js)

A JavaScript wrapper over SourceMod.

[SourceMod](https://www.sourcemod.net/) is a modification to Source servers, such as Team Fortress 2 and Counter-Strike: Global Offensive. SourceMod allows you to write plugins that modify the game in all sorts of ways, while SourceMod.JS lets you write plugins or custom server logic in JavaScript (instead of SourcePawn, the complicated language SourceMod uses), then interface with a SourceMod server via WebSockets.

```
npm install sourcemod.js
```

```js
import { Server } from "sourcemod.js"

const server = await new Server("ws://localhost:12345")
server.connect()

server.on("ready", async () => {
	console.log("Connected!")
	server.players.on("connect", (player) => {
		console.log(`${player.name} connected!`)
	})
	server.players.on("disconnect", (player) => {
		console.log(`${player.name} disconnected!`)
	})
})

// node test.js
// Connected!
// infinixius connected!
// infinixius disconnected!
```

Documentation is available at [https://sourcemod.js.org/](https://sourcemod.js.org/).

# Contributing

Before creating an issue or pull request, please ensure that it hasn't already been reported or suggested, and double-check the [docs](https://infinixi.us/sourcemod.js).

Currently, the only supported and tested game server is Team Fortress 2. If you'd like to help port and test sourcemod.js to other Source games, feel free to!

Other than that, feel free to contribute! Bugfixes, new features, or just better code in general are all greatly appreciated!

# License

This project is under the [MIT License](https://mit-license.org/). This allows you to use, modify, and distribute the source code as long as you include the license.