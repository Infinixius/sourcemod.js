Please make sure you've completed the basic [Installation]{@tutorial Installation} before reading this part!

In this part of the installation, we're going to install SourceMod and the neccessary plugins to your Source server.

## SourceMod

Download the latest stable version of [MetaMod: Source](https://www.sourcemm.net/downloads.php?branch=stable) and [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable) for your operating system. Any version should work, but it's important you get a version of SourceMod over **1.10**. Skip this part if you already have these two.

Unzip the `.zip` files you downloaded, and extract them directly into your server's game directory.

For example, if you're installing SourceMod 1.10.0 for Windows for a Team Fortress 2 server, you'd have the following files:
```
sourcemod-1.10.0-git6528-windows.zip/
├─ addons/
├─ cfg/
```

Copy `addons/` and `cfg/` directly into the `tf2` folder in your server's folder:
```
bin/
hl2/
platform/
steamapps/
tf2/ <-- unzip into this
srcds.exe
steam_appid.txt
thirdpartylegalnotices.txt
```

Go ahead and run your server, and ensure SourceMod is working by running `sm version`.
If you see something like this, it's working!
```
sm version
	SourceMod Version Information:
	SourceMod Version: 1.10.0.6528
	SourcePawn Engine: 1.10.0.6528, jit-x86 (build 1.10.0.6528)
	SourcePawn API: v1 = 5, v2 = 12
	Compiled on: Nov 16 2021 01:35:28
	Built from: https://github.com/alliedmodders/sourcemod/commit/9149a172
	Build ID: 6528:9149a172
	http://www.sourcemod.net/
```

## Plugins

Now that we've got SourceMod working, we need to get the plugins required.

- [sourcemod.js](https://github.com/Infinixius/sourcemod.js/releases) - Download the latest `.smx` file and drop it into `tf/addons/sourcemod/plugins`. (replace `tf` with your appropiate game server)
- [sm-json](https://github.com/clugg/sm-json/releases) - Download the latest Source code `.zip`. Unzip it, and copy the `addons` folder to your game's directory as we did earlier with SourceMod.
- [sm-websocket (fixed)](https://github.com/peace-maker/sm-websocket/files/7966813/websocket.zip) - Unzip the file and copy the `.smx` file into your plugins directory, as we just did with sourcemod.js. (note: This is an unofficial version of the plugin, compilied by me. The official build does [not work](https://github.com/peace-maker/sm-websocket/pull/7), and has yet to be fixed. This version has a fix for that issue. If you really don't trust me, just [compile it yourself](https://github.com/peace-maker/sm-websocket))
- [Sockets](http://forums.alliedmods.net/attachment.php?attachmentid=83286) - Unzip it, and copy the `addons` folder to your game's directory as we did earlier with SourceMod.

Go ahead and run your server. You should see the following if it worked:
```
[SMJS] sourcemod.js loaded!
[SMJS] Started WebSocket server on port 27013!
```

You can also run the console command `smjs_test`:
```
[SMJS] Test!
```

And that's it! sourcemod.js has successfully been installed to your Source server. Next up, it's time for the [client installation]{@tutorial InstallationClient}.