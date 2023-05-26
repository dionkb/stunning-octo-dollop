const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// TEST: GET route to view all comments
router.get('/', async (req, res) => {
    try{ 
        const savedComments = await Comment.findAll({});
        if (!savedComments) {
            res.status(404).json({ message: "No comments to display"});
            return;
        };
        res.status(200).json(savedComments);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: GET route to view comments from one post? Will I need this?


// CREATE new comment on a blog post
router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({   
            // post_date: req.body.post_date,
            author: req.session.username,
            post_date: new Date(),
            body_text: req.body.body_text,
            user_id: req.session.user_id
        });
        console.log(commentData); //TEST:
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// TEST: DELETE route to delete a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const savedComment = await Comment.destroy({
            where: {id: req.params.id},
        });        
        if (!savedComment) {
            res.status(404).json({ message: 'No comment is found' });
        return;
        }  
        res.status(200).json({savedComment, success: true});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;