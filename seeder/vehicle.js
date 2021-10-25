const faker = require("faker");

const Vehicle = require("../server/models/Vehicle");
const User = require("../server/models/User");

async function seedVehicle() {
	const getUser = await User.find();

	for (let i = 0; i < 100; i++) {
		let newVehicle = new Vehicle();
		newVehicle.number = Math.floor(1000 + Math.random() * 9000);
		newVehicle.type = faker.datatype.number({
			min: 1,
			max: 3,
		});
		newVehicle.allocatedFloor = faker.datatype.number({
			min: 1,
			max: 100,
		});
		newVehicle.model = faker.vehicle.model();

		newVehicle.owner = getUser[i]._id;
		// console.log(newVehicle);
		await newVehicle.save();
	}
	console.log("Vehicles Seeded");
}

module.exports = seedVehicle;
