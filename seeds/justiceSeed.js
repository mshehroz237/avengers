const { Hero } = require("../models");

const justiceData = [
	{
		hero_name: "Green Lantern",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/14-alan-scott.jpg",
	},
	{
		hero_name: "Flash",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/263-flash.jpg",
	},
	{
		hero_name: "Superman",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/644-superman.jpg",
	},
	{
		hero_name: "Batman",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/69-batman.jpg",
	},
	{
		hero_name: "Wonder Woman",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/720-wonder-woman.jpg",
	},
	{
		hero_name: "Aquaman",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/38-aquaman.jpg",
	},
	{
		hero_name: "Martian Manhunter",
		category: "justiceLeague",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/432-martian-manhunter.jpg",
	},
];

const seedJustice = () => Hero.bulkCreate(justiceData);

module.exports = seedJustice;
