const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MarvelHero extends Model {}

// posts should include the {id, title, of the post content of the post, who posted (maybe the user's id)}
MarvelHero.init(
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
		modelName: "MarvelHero",
	}
);

module.exports = MarvelHero;
