const express = require("express");
const { getUserData } = require("../controllers/user");
const { CSData, initialCSData } = require("../../data/index.js");

const router = express.Router();

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	const CS = CSData.find((CS) => id === CS.id);
	if (!CS) {
		return res
			.status(404)
			.json({ error: "A book the provided ID does not exist" });
	}
	res.json({ data: CS });
});

router.post("/", (req, res) => {
	if (!req.body) {
		res.status(400).json({ error: "Request body not found" });
	}
	let id = CSData.length;
	id++;
	const CS = { ...req.body, id };
	CSData.push(CS.data);
	res.status(201).json({ data: CS });
});

module.exports = router;
