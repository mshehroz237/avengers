const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hero extends Model {}

Hero.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		hero_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "post",
				key: "id",
			},
			allowNull: true,
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "hero",
	}
);

module.exports = Hero;
