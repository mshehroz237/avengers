const router = require("express").Router();
const { User, Post, Comment, Hero,DcHero,MarvelHero } = require("../models");
const withAuth = require("../utils/auth");

// to get all of the posts and render them
router.get("/", async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{ model: User, attributes: { exclude: ["password"] } }],
			// I want to order in descending orderr
			order: [["id", "DESC"]],
		});

		const posts = postData.map((post) => post.get({ plain: true }));

		res.render("homepage", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// to get one single post by the post id
router.get("/posts/:id", async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: { exclude: ["password"] },
				},
				{
					model: Comment,
					include: [{ model: User, attributes: { exclude: ["password"] } }],
				},
				{
					//include model avengers then another include for model justice league
					model: Hero,
					attributes: { exclude: ["category"] },
				},
			],
		});

		const singlePost = postData.get({ plain: true });

		res.render("postpage", {
			singlePost,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// the other page to render is the dashbaord page
router.get("/dashboard", withAuth, async (req, res) => {
	try {
		const postData = await Post.findAll({
			where: {
				user_id: req.session.user_id,
			},
			order: [["id", "DESC"]],
		});

		const dashboard = postData.map((post) => post.get({ plain: true }));

		res.render("dashboard", {
			dashboard,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// while on the dashbaord page, I want to create a post
router.get("/dashboard/newpost", withAuth, async (req, res) => {
	try {
		const avengerData = await Hero.findAll({
			where: {
				category: "avengers",
			},
		});
		const justiceData = await Hero.findAll({
			where: {
				category: "justiceLeague",
			},
		});

		const avengers = avengerData.map((avenger) => avenger.get({ plain: true }));
		const justiceLeague = justiceData.map((justice) =>
			justice.get({ plain: true })
		);

		res.render("newpost", {
			avengers,
			justiceLeague,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// also have the option to edit my posts
router.get("/dashboard/editpost/:id", withAuth, async (req, res) => {
	try {
		const editData = await Post.findByPk(req.params.id);

		const editPost = editData.get({ plain: true });

		res.render("editPost", {
			editPost,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// if possible, on a separte page, I want to be able to render posts that I have commented
router.get("/follow", withAuth, async (req, res) => {
	try {
		const commentedPostData = await Comment.findAll({
			where: {
				user_id: req.session.user_id,
			},
			include: {
				model: Post,
			},
		});

		const followComment = commentedPostData.map((post) =>
			post.get({ plain: true })
		);

		res.render("follow", {
			followComment,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// be able to render avengers/JL's name, image onto the page

// able to log in anywhere
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});
// able to log out anywhere
router.get("/signup", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("signup");
});


//add new

router.get("/like/comments/:id/:postid", async (req, res) => {
	try {
		const commentData = await Comment.findByPk(req.params.id);
		const singlecomment = commentData.get({ plain: true });
		var likedb=singlecomment.like

		commentData.update(
			{like:likedb+1}
		);

		// Simulate a mouse click:
		res.redirect("/posts/"+req.params.postid)
		
	} catch (err) {
		res.status(500).json(err);
	}
});

//add new

router.get("/dislike/comments/:id/:postid", async (req, res) => {
	try {
		const commentData = await Comment.findByPk(req.params.id);
		const singlecomment = commentData.get({ plain: true });
		var likedb=singlecomment.dislike
		commentData.update(
			{dislike:likedb+1}
		);

		// Simulate a mouse click:
		res.redirect("/posts/"+req.params.postid)
		
	} catch (err) {
		res.status(500).json(err);
	}
});

// this is by me
router.get("/MarvelAndDC", withAuth, async (req, res) => {
	try {
		

		const DcHerodata=await DcHero.findAll();
		const DcHeroView = DcHerodata.map((dcdata) => dcdata.get({ plain: true }));

		const MarvelHerodata=await MarvelHero.findAll();
		const MarvelHeroView = MarvelHerodata.map((marveldata) => marveldata.get({ plain: true }));
		

		res.render("MarvelAndDC", {
			DcHeroView,
			MarvelHeroView,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
