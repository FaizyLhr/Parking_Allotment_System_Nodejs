const router = require("express").Router();
const FloorModel = require("../../models/Floor");

const addFloor = require("../../utilities/addFlor");

router.post("/addFloor", addFloor);

module.exports = router;
