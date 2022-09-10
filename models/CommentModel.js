const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

// comments should include the {id, content of the comment, who commented, and be linked to a post}
Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		contents: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		like: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue:0,
		},
		dislike: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue:0,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
			allowNull: false,
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "post",
				key: "id",
			},
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "comment",
	}
);

module.exports = Comment;
