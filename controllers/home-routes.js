const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll({
        // include: [
        //     {
        //     model: Painting,
        //     attributes: ['filename', 'description'],
        //     },
        // ],
        });

        const blogPosts = dbBlogPostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );

        res.render('homepage', {
        blogPosts,
        loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// // GET one blogpost
// router.get('/blogpost/:id', withAuth, async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page

//     // If the user is logged in, allow them to view the blogpost
//     try {
//     const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
//         include: [
//         {
//             model: Painting,
//             attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//             ],
//         },
//         ],
//     });
//     const blogPost = dbBlogPostData.get({ plain: true });
//     res.render('blogpost', { blogpost, loggedIn: req.session.loggedIn });
//     } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//     }
// });

// // GET one painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
// // If the user is logged in, allow them to view the painting
// try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
// } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
// }
// });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
