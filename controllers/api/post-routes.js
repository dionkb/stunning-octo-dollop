const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// TEST: POST route to CREATE a new blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({ ...req.body, userId: req.session.userId });
        console.log(newBlogPost); // TESTING
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// TODO: PUT route to UPDATE a blog post


// TODO: DELETE route to DELETE a blog post

module.exports = router;