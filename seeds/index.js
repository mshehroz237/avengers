const sequelize = require("../config/connection");
const seedAvengers = require("./avengerSeed");
const seedJustice = require("./justiceSeed");

const seedAll = async () => {
	await sequelize.sync({ force: true });

	await seedAvengers();

	await seedJustice();

	process.exit(0);
};

seedAll();
