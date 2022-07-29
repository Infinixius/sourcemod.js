sourcemod.js has various configuration options.

## Server Configuration

sourcemod.js has the following [ConVars](https://developer.valvesoftware.com/wiki/Developer_Console#Commands_and_variables):

- **smjs_debug 0** - Toggles whether extra debug logging is shown or not. 1 = true, 0 = false.
- **smjs_auth 098f...** - Sets the MD5 hash authentication string that all clients must use to connect.
- **smjs_port 27013** - The port for sourcemod.js to listen on.
- **smjs_ip 0.0.0.0** - The IP address for sourcemod.js to listen on. 

The easiest way to change these ConVars is to add them to the launch options of a server:
```
srcds.exe +smjs_port 12345 +smjs_auth 3a52... +smjs_debug 0
```

`smjs_auth` must be an [MD5 Hash](https://en.wikipedia.org/wiki/MD5) of the password you'd like to use. You can easily generate an MD5 hash [online](https://www.md5hashgenerator.com/), or with the command `smjs_generateauth`.
```bash
smjs_auth adminpassword
# Even if a client tries to authenticate with the password "adminpassword", they will NOT be able to connect!

smjs_generateauth adminpassword
# [SMJS] Generated hash: 'e3274be5c857fb42ab72d786e281b4b8'
smjs_auth e3274be5c857fb42ab72d786e281b4b8
# Now the client can connect with the password "adminpassword"!
```
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