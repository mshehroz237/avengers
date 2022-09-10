const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// posts can be created, updated, or deleted
// route to create post
router.post("/", withAuth, async (req, res) => {
	try {
		const newPost = await Post.create({
			title: req.body.title,
			contents: req.body.contents,
			user_id: req.session.user_id,
			// avenger_id: req.body.avenger_id
			//justice_id: req.body.justice_id
		});

		console.log(newPost);

		res.status(200).json(newPost);
	} catch (err) {
		res.status(400).json(err);
	}
});

// route to update the user's post
router.put("/:id", withAuth, async (req, res) => {
	try {
		const updatePost = await Post.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		// in case the post cannot be found
		if (!updatePost) {
			res.status(404).json({ message: "Cannot find post." });
		}

		res.status(200).json(updatePost);
	} catch (err) {
		res.status(400).json(err);
	}
});

// route to delete the user's post
router.delete("/:id", withAuth, async (req, res) => {
	try {
		const deletePost = await Post.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!deletePost) {
			res.status(404).json({ message: "Cannot find post." });
		}

		res.status(200).json(deletePost);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
