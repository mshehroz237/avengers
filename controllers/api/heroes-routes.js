const router = require("express").Router();
const { Hero } = require("../../models");
const withAuth = require("../../utils/auth");

router.get;

//have user have a form field
// drop down select will contain everything we rendered on home routes... so we have all the info of heroes
// need to write an api request that fetches from the database
// adds the image thing and name and w/e and adds it onto post during creation
// include model heroes

// <select id="justice">
// {#each justice as justice}
// <option value={{id}}>{{nanme}}</option>
//{/each}
// </select

// each post has 2 heroes
// heroes can be part of many posts
// HeroPost model
// id, hero id, post id

// many to many
