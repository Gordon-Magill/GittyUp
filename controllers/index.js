const router = require('express').Router();
const staticRoutes = require('./staticRoutes');
const apiRoutes = require('./api')

router.use('/', staticRoutes);
router.use('/api', apiRoutes);

module.exports = router;