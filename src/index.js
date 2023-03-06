// Import express and cors
const express = require("express");
const cors = require("cors");

const app = express();
app.disable("x-powered-by");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS HERE

// GET route on root for testing
app.get("*", (req, res) => {
	res.json({ test: true });
});

// server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`\n Server is running on http://localhost:${port}\n`);
});
