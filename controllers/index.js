// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./my-dashboard-routes.js');
const apiRoutes = require('./api');

// Uses the js specified above when using the related routes
router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);

// Allows this to be exported elsewhere
module.exports = router;
