var uid = 0

export function random(min, max) {
	if (min === undefined) throw new Error("Missing argument!")
	if (typeof min != "number") throw new Error("Not a number!")

	if (max === undefined) return Math.floor((Math.random() * max))
	if (typeof max != "number") throw new Error("Not a number!")
	
	return Math.floor((Math.random() * max) + min)
}

export function uuid() {
	uid++
	return `${uid}-${random(0, 10000000)}`
}