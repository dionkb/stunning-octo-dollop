const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// GET all posts for testing purposes
router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [ 
                { model: User, attributes: ['username']}, 
                { model: Comment, attributes: ['id', 'body_text', 'user_id', 'createdAt', 'updatedAt'] } 
            ],
        });
        res.status(200).json(blogPostData);
        } catch (err) {
        res.status(500).json(err);
    }
});

// GET one blogpost
router.get('/:id', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
            include: [ 
                { model: User, attributes: ['username']}, 
                { model: Comment, attributes: ['id', 'body_text', 'user_id', 'createdAt', 'updatedAt'] } 
            ],
        });
    const blogPost = dbBlogPostData.get({ plain: true });

    res.render('blogPosts', { blogPost, loggedIn: req.session.loggedIn });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

// TEST: POST route to CREATE a new blog post
// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newBlogPost = await BlogPost.create({ ...req.body, userId: req.session.userId });
//         console.log(newBlogPost); // TESTING
//         res.status(200).json(newBlogPost);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// TODO: PUT route to UPDATE a blog post


// TODO: DELETE route to DELETE a blog post

module.exports = router;