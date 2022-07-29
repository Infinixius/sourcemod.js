import { Server } from "../index.js"

const server = new Server("ws://localhost:12345", { auth: "admin" })
server.connect()

server.on("ready", async () => {
	console.log("Connected!")

	server.players.on("connect", (name) => {
		console.log(`${name} connected!`)
	})
	server.players.on("disconnect", (name) => {
		console.log(`${name} disconnected!`)
	})
})