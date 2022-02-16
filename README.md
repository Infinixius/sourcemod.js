<p align="center">
<img src="https://infinixi.us/sourcemod.js/assets/logo_shadow.png">
</p>

![npm](https://img.shields.io/npm/v/sourcemod.js)

A JavaScript wrapper over SourceMod.

[SourceMod](https://www.sourcemod.net/) is a modification to Source servers, such as Team Fortress 2 and Counter-Strike: Global Offensive. SourceMod allows you to write plugins that modify the game in all sorts of ways. SourceMod.JS lets you write plugins or custom server logic in JavaScript, then interface with a SourceMod server via WebSockets.

# Installation
```
npm install sourcemod.js
```

First of all, install [MetaMod: Source](https://www.sourcemm.net/) and [SourceMod](https://www.sourcemod.net/) onto your Source server. Any version over **1.10** should work. Run your server and ensure SourceMod is working by running `sm version`.

Head over to the [releases](https://github.com/Infinixius/sourcemod.js/releases), and grab the latest plugin download. Drop it in `tf\addons\sourcemod\plugins`.

The plugin also uses [clugg's `sm-json`](https://github.com/clugg/sm-json) and [peace-maker's `sm-websocket`](https://github.com/peace-maker/sm-websocket) to communicate with the JavaScript plugin over WebSockets. Go ahead and install them to your server.

Go ahead and run your server. You should see the following if it worked:
```
[SMJS] sourcemod.js loaded!
[SMJS] Started WebSocket server on port 12345!
```

You can also run the console command `smjs_test`:
```
[SMJS] Test!
```

While the connection via WebSockets technically allows you to remotely control a SourceMod server, it's ideal to have the server and the SourceMod.JS plugin running on the same computer (or network) to minimize latency.

# Examples

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

Other than that, feel free to contribute! Bugfixes, new features, or just better code in general are all greatly appreciated!

# License

This project is under the [MIT License](https://mit-license.org/). This allows you to use, modify, and distribute the source code as long as you include the license.

# Troubleshooting

### `Exception reported: Invalid match index passed.`

This is an issue with `sm-websockets`. Use [this version](https://github.com/peace-maker/sm-websocket/files/7966813/websocket.zip) I built myself that contains the fix, or just build it yourself.

### `Error: connect ECONNREFUSED`

This error boils down to the JavaScript plugin not being able to connect to the WebSocket server. This could be for several reasons:

- The SourceMod server isn't up
- The SourceMod plugin isn't working
- The port (`12345`) is taken by another service, or isn't port forwarded properly. (you need to port forward this port if you aren't accessing the WebSocket server from a LAN connection)
- You aren't connected to the internet