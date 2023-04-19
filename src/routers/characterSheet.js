const express = require("express");
const CSData = require("../../data/index.js");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ data: CSData });
});

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	const CS = CSData.find((CS) => id === CS.id);
	if (!CS) {
		return res
			.status(404)
			.json({ error: "A character sheet with the provided ID does not exist" });
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
	CSData.push(CS);
	res.status(201).json({ data: CS });
	return CSData;
});

router.put("/:id", (req, res) => {
	const id = Number(req.params.id);
	const CS = CSData.find((CS) => id === CS.id);
	if (!CS) {
		return res
			.status(404)
			.json({ error: "A character sheet with the provided ID does not exist" });
	}
	if (!req.body) {
		res.status(400).json({ error: "Request body not found" });
	}
	Object.keys(req.body).forEach((prop) => {
		CS[prop] = req.body[prop];
	});
	res.json({ data: CS });
});

router.delete("/:id", (req, res) => {
	const id = Number(req.params.id);
	const CS = CSData.find((CS) => id === CS.id);
	if (!CS) {
		return res
			.status(404)
			.json({ error: "A character sheet with the provided ID does not exist" });
	}

	CSData.splice(CSData.indexOf(CS), 1);
	res.json({ data: CS });
});

module.exports = router;
