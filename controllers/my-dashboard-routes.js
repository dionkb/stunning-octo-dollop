const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Handles dashboard page rendering of ALL users own posts
router.get('/', withAuth, (req, res) => {
    let user_id = req.session.user_id;
    BlogPost.findAll({
        where: { user_id:  user_id },
        attribute: ['id', 'title', 'post_date', 'body_text', 'user_id'], 
        include: [
            {
                model: Comment,
                attributes: ['id', 'body_text', 'user_Id', 'blogpost_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
        order: [['created_at', 'DESC']],
    })
    .then((userPostData) => {
        const userPosts = userPostData.map((userPost) => userPost.get({ plain: true }));
        const noPosts = {
            id: null,
            title: "You do not have any posts",
            createdAt: new Date(),
            body_text: "Make your first post by clicking the 'Create New Post' button",
            user_id: user_id,
        };
        if (userPosts.length === 0) {
            userPosts.push(noPosts);
        };

        res.render('dashboard', { 
            userPosts,
            loggedIn: req.session.loggedIn, 
            username: req.session.username,
        })  
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// TODO: Handles dashboard page rendering of INDIVIDUAL user post
// router.get('/', withAuth, (req, res) => {
    //
// });

// TODO: CREATE a new user blog post
// router.post('/', withAuth, (req, res) => {
    //
// });

// Exports these routes!
module.exports = router;