You may come into a variety of problems and errors while using sourcemod.js. This guide tries to help with the most common ones.

## Server Errors

These errors only occur on the Source server.

### `Exception reported: Invalid match index passed.`

This is an issue with `sm-websockets`. Use [this version](https://github.com/peace-maker/sm-websocket/files/7966813/websocket.zip) I built myself that contains the fix, or just build it yourself.

## Client Errors

These errors only occur on the JavaScript plugin.

### `Error: connect ECONNREFUSED`

This error boils down to the JavaScript plugin not being able to connect to the WebSocket server. This could be for several reasons:

- The SourceMod server isn't up
- The SourceMod plugin isn't working
- The port is taken by another service, or isn't port forwarded properly. (you need to port forward if you aren't accessing the WebSocket server from a LAN connection)
- You aren't connected to the internet

### `Error: Timed out!`

This occurs when the server doesn't send a message in 5 seconds. This likely means the connection was terminated without the client knowing, or the server was forcefully shut down.

### `Error: Unauthorized!`

This occurs when the authentication string provided to the server was incorrect.

The authentication defaults to `test`, and is configured on the server via the [ConVar](https://developer.valvesoftware.com/wiki/Developer_Console#Commands_and_variables) `smjs_auth`.

You can authenticate like this:
```js
const server = await new Server("ws://localhost:6969", {auth: "test"})
```