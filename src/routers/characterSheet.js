const express = require("express");
const { getUserData } = require("../controllers/user");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ CSData });
});

module.exports = router;
