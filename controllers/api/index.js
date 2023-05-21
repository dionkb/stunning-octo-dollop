// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
const userRoutes = require('./user-routes');

// Uses the js specified above when using the related routes
router.use('/users', userRoutes);

// Allows this to be exported elsewhere
module.exports = router;