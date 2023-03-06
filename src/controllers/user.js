const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserData = async (req, res) => {
	const data = await prisma.user.findMany();
	res.json({ user: data });
};

module.exports = {
	getUserData,
};
