<p align="center">
<img src="https://sourcemod.js.org/assets/logo_shadow.png">
</p>

![npm](https://img.shields.io/npm/v/sourcemod.js?color=red&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTA0IiBoZWlnaHQ9IjEwNCIgdmlld0JveD0iMCAwIDEwNCAxMDQiPgogIDxpbWFnZSB4PSIyIiB5PSIyIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeGxpbms6aHJlZj0iZGF0YTppbWcvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFCa0NBWUFBQUJ3NHBWVUFBQUJSa2xFUVZSNG5PM2RRUXFETUFBQVFaWCsvOHNXV2l6MlZpalJGV2R1Z21ESUVnOUJ6THl1NjdUemRjRmg1dTFCaXhnSm43bmZnb2h4dmxlRFJZeVVkYm5RWUc5QmtCaEJZZ1NKRVNSR2tCaEJZZ1NKRVNSR2tCaEJZZ1NKRVNSR2tCaEJZZ1NKRVNSR2tCaEJZaDREaHpQL2NNK1ZEZmtXd1FxSkVTUkdrQmhCWWdTSkVTUkdrQmhCWWdTSkVTUkdrQmhCWWtadUxoN3RuODIrekVhb0ZSSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTSXdnTVlMRUNCSWpTTXpJWDJ0YzZZemR6Rml0a0JoQllnU0pFU1JHa0JoQllnU0pFU1JHa0JoQllnU0pFU1JHa0JoQllnU0pFU1JHa0pqbEJpZHlYc204clJCUnp2ZHFzSDlsaVhLZTk5eFAwL1FFbmp3T3lZMkJCZndBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K)
![github](https://img.shields.io/github/stars/Infinixius/sourcemod.js?color=yellow&logo=github)
![downloads](https://img.shields.io/npm/dw/sourcemod.js?color=blue&logo=gitlfs&logoColor=white)

A JavaScript wrapper over SourceMod.

[SourceMod](https://www.sourcemod.net/) by itself is a modification to Source servers, such as Team Fortress 2 and Counter-Strike: Global Offensive. It allows you to write plugins that modify the game in all sorts of ways, from new gamemodes, to simple administration plugins. SourceMod.JS is a wrapper over SourceMod that lets you write plugins or custom server logic in JavaScript.

The JavaScript side (where you write your code) interfaces with an actual SourceMod server (where you install the plugin), via [WebSockets](https://en.wikipedia.org/wiki/WebSocket). This effectively allows you to wirelessly control a server over the internet, but it is heavily recommended to host the SourceMod.JS plugin on the same machine (or network) as the actual SourceMod server, to reduce latency.

```
npm install sourcemod.js
```

```js
import { Server } from "../index.js"

const server = new Server("ws://localhost:12345", { auth: "admin" })
server.connect()

server.on("ready", async () => {
	console.log("Connected!")

	server.players.on("connect", (id, name) => {
		console.log(`${name} connected!`)
	})
	server.players.on("disconnect", (id, name) => {
		console.log(`${name} disconnected!`)
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

If you need help at any point, please feel free to contact me! You can find all of my links at [https://infinixi.us](https://infinixi.us), and my Discord is **infinixius#5875**. You can also ask for help on the [issues](https://github.com/Infinixius/sourcemod.js/issues) page.

# License

This project is under the [MIT License](https://mit-license.org/). This allows you to use, modify, and distribute the source code as long as you include the license.

This project also makes use of the following libraries and/or projects:

- [smlib](https://github.com/bcserv/smlib)
- [sm-json](https://github.com/clugg/sm-json)
- [sm-websocket](https://github.com/peace-maker/sm-websocket)
- [SourceMod Sockets](https://forums.alliedmods.net/showthread.php?t=67640)

- [ws](https://github.com/websockets/ws)

Big thanks to [punteroo](https://github.com/punteroo) for helping with the `GiveWeapon` code!