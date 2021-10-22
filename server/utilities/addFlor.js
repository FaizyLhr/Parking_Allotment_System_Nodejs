const FloorModel = require("../models/Floor");
const spot = require("../constants/spots");

const addFlor = async function (req, res) {
	console.log(spot.spots);

	const { numFloor } = req.body;

	// Validate floor input

	if (typeof numFloor === "undefined" || numFloor === null) {
		res.status(203).send({ message: "Please send numFloor" });
		return;
	}

	// Create floor in our database
	let floor = FloorModel();
	floor.numFloor = numFloor;
	floor.spots = spot.spots;

	floor.save((err, result) => {
		if (!err) {
			res.status(201).send(result);
		} else {
			res.status(203).send(err);
		}
	});
};

module.exports = addFlor;
