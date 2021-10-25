const faker = require("faker");
const Floor = require("../server/models/Floor");
const spot = require("../server/constants/spots");

async function seedFloor() {
	for (let i = 0; i < 100; i++) {
		let newFloor = new Floor();
		newFloor.numFloor = i + 1;
		newFloor.spots = spot;

		await newFloor.save();
	}
	console.log("Floors Seeded");
}

module.exports = seedFloor;
