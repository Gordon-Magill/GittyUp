const router = require('express').Router();
const submissionRoutes = require('./submissionRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require("./comment")

router.use('/submission', submissionRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;