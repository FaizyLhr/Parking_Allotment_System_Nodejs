const faker = require("faker");
const User = require("../server/models/User");

async function defaultUser() {
	for (let i = 0; i < 100; i++) {
		let newUser = new User();
		newUser.username = faker.internet.userName();
		newUser.email = faker.internet.email();
		newUser.phone = faker.phone.phoneNumber();
		newUser.address = {
			city: faker.address.city(),
			colony: faker.address.streetPrefix(),
		};
		newUser.password = faker.internet.password();
		// console.log(newUser);
		await newUser.save();
	}
	console.log("Users Seeded");
}

module.exports = defaultUser;
