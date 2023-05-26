const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all blogposts for homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll({
            attribute: ['id', 'title', 'author', 'post_date', 'body_text', 'user_id'] // Is author redundant due to user_id??
        // include: [  ------------> Will I need this to remove author redundancy? TODO: Try later
        //     {
        //     model: User,
        //     attributes: ['username'],
        //     },
        // ],
        });

        const blogPosts = dbBlogPostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );

        res.render('homepage', {
        blogPosts,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        user_id: req.session.user_id
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one blogpost
router.get('/blogPosts/:id', withAuth, async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                model: User,
                attributes: ['id'],
                },
            ],
        });
    const blogPost = dbBlogPostData.get({ plain: true });
    res.render('blogPosts', { blogPost, loggedIn: req.session.loggedIn });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

// Handles login page rendering and redirecting
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Handles createAccount page rendering and redirecting
router.get('/createAccount', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('createAccount', { loggedIn: req.session.loggedIn });
});

// Exports these routes!
module.exports = router;
