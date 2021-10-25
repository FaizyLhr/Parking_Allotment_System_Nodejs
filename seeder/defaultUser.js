const faker = require("faker");
const User = require("../server/models/User");

async function seedUser() {
	{
		let newUser = new User();
		newUser.username = "admin";
		newUser.email = "admin@gmail.com";
		newUser.type = 1;
		newUser.phone = "1234567899";
		newUser.address = {
			city: "grw",
			colony: "saleem colony",
		};
		newUser.password = "faizy";
		newUser.isEmailVerified = true;
		// console.log(newUser);
		await newUser.save();
	}
	{
		let newUser = new User();
		newUser.username = "faizy";
		newUser.email = "faizy@gmail.com";
		newUser.phone = "1234567899";
		newUser.address = {
			city: "grw",
			colony: "saleem colony",
		};
		newUser.password = "faizy";
		newUser.isEmailVerified = true;
		// console.log(newUser);
		await newUser.save();
	}
	console.log("Default Users Seeded");
}

module.exports = seedUser;
