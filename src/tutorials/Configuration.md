sourcemod.js has various configuration options.

## Server Configuration

sourcemod.js has the following [ConVars](https://developer.valvesoftware.com/wiki/Developer_Console#Commands_and_variables):

- **smjs_debug 0** - Toggles whether extra debug logging is shown or not. 1 = true, 0 = false.
- **smjs_auth test** - Sets the authentication string that all clients must use to connect.
- **smjs_port 27013** - The port for sourcemod.js to listen on.
- **smjs_ip 0.0.0.0** - The IP address for sourcemod.js to listen on. 

The easiest way to change these ConVars is to add them to the launch options of a server:
```
srcds.exe +smjs_port 12345 +smjs_auth CustomAuthString +smjs_debug 0
```

Keep in mind that for security reasons, you cannot change these while the server is running.

## Client Configuration

sourcemod.js on the client is configured when connecting to a server:

```js
const server = await new Server("ws://localhost:6969",
	{
		auth: "test"
	}
)
```

Currently, the following options are provided:

- **auth** - The authentication string to provide by the server. (must be the same as `smjs_auth`)