// Import router and new routes
const router = require('express').Router();
const submissionRoutes = require('./submissionRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require("./comment")

// Apply routes to the router
router.use('/submission', submissionRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

// Export the updated router
module.exports = router;