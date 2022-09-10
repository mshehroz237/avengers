const Post = require("./PostModel");
const User = require("./UserModel");
const Comment = require("./CommentModel");
const Hero = require("./HeroModel");
const DcHero = require("./DcHeroModel");
const MarvelHero = require("./MarvelHeroModel");

// one user can have many posts
User.hasMany(Post, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

// many posts can belong to one user
Post.belongsTo(User, {
	foreignKey: "user_id",
});

// one user can also have many comments
User.hasMany(Comment, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

// one comment can only belong to one user
Comment.belongsTo(User, {
	foreignKey: "user_id",
});

//one post can have many comments
Post.hasMany(Comment, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
});

// but one comment can only belong to one post, just like user
Comment.belongsTo(Post, {
	foreignKey: "post_id",
});

// one post can have many (2) heros
Post.hasMany(Hero, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
});

// heroes belongs to post
Hero.belongsTo(Post, {
	foreignKey: "post_id",
});
module.exports = { User, Post, Comment,MarvelHero, Hero, DcHero };
