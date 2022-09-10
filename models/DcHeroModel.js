const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class DCHero extends Model {}

// posts should include the {id, title, of the post content of the post, who posted (maybe the user's id)}
DCHero.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		HeroName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		herolink: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		
		
	},
	{
		timestamps:false,
		createdAt:false,
		updatedAt:false,
		sequelize,
		freezeTableName: true,
		modelName: "DCHero",

	}
);

module.exports = DCHero;
