const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Handles dashboard page rendering of ALL users own posts
router.get('/', withAuth, (req, res) => {
    BlogPost.findAll({
        where: { user_id: 4 },  // Swap this out for line below once validation is added
        // where: { user_id: req.sessions.user_id }, FIXME: Add validation so if user has no posts, then display that!
        attribute: ['id', 'title', 'author', 'post_date', 'body_text', 'user_id'], 
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
        console.log(userPosts);
        console.log(userPosts[0].title);

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