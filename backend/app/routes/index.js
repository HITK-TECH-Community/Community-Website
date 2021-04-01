const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/', tinyURL);

module.exports = router;