const router = require("express").Router();
const { User } = require("../../models");

// sign up and create credentials in the database
router.post("/", async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			res.status(200).json(userData);
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// user can be logged in by creating the session
// need to compare the password with the password stored in the seeds
// will need to reference the email to match the entered password
router.post("/login", async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!userData) {
			res.status(400).json({
				message: "The email or password is incorrect. Please try again.",
			});
			return;
		}

		const userPassword = await userData.checkPassword(req.body.password);
		if (!userPassword) {
			res.status(400).json({
				message: "The email or password is incorrect. Please try again.",
			});
			return;
		}
		
		req.session.save(() => {
			req.session.user_id = userData.dataValues.id;
			req.session.loggedIn = true;
			res.json({ user: userData, message: "Successful logged in. Welcome!" });
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// and also be logged out by deleting the session
router.post("/logout", async (req, res) => {
	try {
		if (req.session.loggedIn) {
			req.session.destroy(() => {
				res.status(204).end();
			});
		} else {
			res.status(400).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
