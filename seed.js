const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/PLS", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useFindAndModify: false,
		// useCreateIndex: true,
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	})
	.then(() => {
		console.log("connected to db in development environment");
		init();
	});

const defaultUser = require("./seeder/defaultUser");
const user = require("./seeder/user");
const floor = require("./seeder/floor");
const vehicle = require("./seeder/vehicle");
const booking = require("./seeder/booking");

async function init() {
	console.log("dropping DB");
	await mongoose.connection.db.dropDatabase();

	await defaultUser();
	await user();
	await floor();
	await vehicle();
	await booking();

	exit();
}

function exit() {
	console.log("exiting");
	process.exit(1);
}
