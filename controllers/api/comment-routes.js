const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// the user should be able to comment on posts
router.post("/", withAuth, async (req, res) => {
	try {
		const createComments = await Comment.create({
			contents: req.body.contents,
			user_id: req.session.user_id,
			post_id: req.body.post_id,
		});

		res.status(200).json(createComments);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
