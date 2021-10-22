let router = require("express").Router();

router.use("/", require("./users"));
router.use("/", require("./floors"));
router.use("/", require("./vehicles"));
router.use("/", require("./bookings"));

router.use("/", (req, res) => {
	res.send("API Home");
});

module.exports = router;
