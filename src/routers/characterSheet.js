const express = require("express");
const { getUserData } = require("../controllers/user");
const { CSData, initialCSData } = require("../../data/index.js");

const router = express.Router();

router.get("/", (req, res) => {
	// TODO: Check id param for correct CSData, this is just testing atm
	res.json({ CSData });
});

module.exports = router;
