const faker = require("faker");

const Booking = require("../server/models/Booking");
const User = require("../server/models/User");
const Floor = require("../server/models/Floor");
const Vehicle = require("../server/models/Vehicle");

async function seedBooking() {
	const getUser = await User.find();
	const getFloor = await Floor.find();
	const getVehicle = await Vehicle.find();

	for (let i = 0; i < 100; i++) {
		let newBooking = new Booking();
		newBooking.allocatedSlot = faker.datatype.number({
			min: 1,
			max: 25,
		});

		newBooking.owner = getUser[i]._id;
		newBooking.floor = getFloor[i]._id;
		newBooking.vehicle = getVehicle[i]._id;
		// console.log(newBooking);
		await newBooking.save();
	}
	console.log("Bookings Seeded");
}

module.exports = seedBooking;
