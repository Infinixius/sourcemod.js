/*
	This example showcases a Discord bot that mirrors messages
	from a Discord channel to in-game chat.
	
	Make sure to run `npm install discord.js` beforehand!
*/
const TOKEN = "OTQzNjM3OTk3NzQ2NzkwNTEx.Yg19Xg.8Y0T-fxbd5E4DikzqSxgP5ER-oM" // Replace with your bot token from https://discord.com/developers/applications
const CHANNEL = "943637050027040828" // Replace with the channel ID to send messages in.

import { Client, Intents } from "discord.js"
import { Server } from "sourcemod.js"
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (msg) => {
	if (msg.channel.id != CHANNEL) return


})