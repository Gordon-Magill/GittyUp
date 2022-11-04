const router = require('express').Router();
const submissionRoutes = require('./submissionRoutes');
const userRoutes = require('./userRoutes');

router.use('/submission', submissionRoutes);
router.use('/user', userRoutes);

module.exports = router;
