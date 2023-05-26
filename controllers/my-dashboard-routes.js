const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Handles dashboard page rendering of ALL users own posts
router.get('/', withAuth, (req, res) => {
    // TODO: Fill in the rest!
    res.render('dashboard', { loggedIn: req.session.loggedIn });
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