Please make sure you've completed the basic [Installation]{@tutorial Installation} and the [Server Installation]{@tutorial InstallationServer} before reading this part!

In this part of the installation, we're going to install the sourcemod.js NPM module! Thankfully, it's much easier than the server installation.

## Installation

Go to the folder you'd like to install sourcemod.js to, and run the following command:
```
npm install sourcemod.js
```

All the neccessary modules should be installed into the `node_modules` folder. You can use the following to require it:
```js
import { Server } from "sourcemod.js" // ES2016
```

```js
const { Server } = require("sourcemod.js") // CJS
```

And that's it! sourcemod.js has successfully been installed. You can start writing plugins in JavaScript!

While the connection via WebSockets technically allows you to remotely control a SourceMod server using the plugin, it's ideal to have the server and the sourcemod.js plugin running on the same computer (or network) to minimize latency.