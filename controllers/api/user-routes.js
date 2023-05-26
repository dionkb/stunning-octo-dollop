// TEST: 
const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// GET all users for testing purposes
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [ 
                { model: BlogPost, attributes: ['id', 'title', 'body_text', 'user_id', 'createdAt', 'updatedAt'] }, 
                { model: Comment, attributes:  ['id', 'body_text', 'user_id', 'blogpost_id', 'createdAt', 'updatedAt']} 
            ],
        });
        res.status(200).json(userData);
        } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = dbUserData.username;
            req.session.user_id = dbUserData.id;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login to user account
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
        where: {
            email: req.body.email,
        },
        });

        if (!dbUserData) {
        res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
        return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
        res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
        return;
        }

        req.session.save(() => {
        req.session.loggedIn = true;
        req.session.username = dbUserData.username;
        req.session.user_id = dbUserData.id;

        res
            .status(200)
            .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
