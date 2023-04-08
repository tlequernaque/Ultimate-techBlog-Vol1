const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoute');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
