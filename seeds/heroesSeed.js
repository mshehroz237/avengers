const { Hero } = require("../models");

const heroesData = [
	{
		hero_name: "Iron Man",
		category: "Avengers",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/346-iron-man.jpg",
	},
	{
		hero_name: "Ant-Man",
		category: "Avengers",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/30-ant-man.jpg",
	},
	{
		hero_name: "Wasp",
		category: "Avengers",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/708-wasp.jpg",
	},
	{
		hero_name: "Thor",
		category: "Avengers",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/659-thor.jpg",
	},
	{
		hero_name: "Hulk",
		category: "Avengers",
		image:
			"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/332-hulk.jpg",
	},
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

const seedHeroes = () => Hero.bulkCreate(heroesData);

module.exports = seedHeroes;
