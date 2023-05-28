// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

// Uses the js specified above when using the related routes
router.use('/users', userRoutes);
router.use('/blogPosts', postRoutes);
router.use('/comments', commentRoutes);

// Allows this to be exported elsewhere
module.exports = router;