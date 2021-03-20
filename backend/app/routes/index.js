const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const tinyURL = require('./tinyURL');
const broadcasts = require('./broadcasts');

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/', tinyURL);
router.use('/broadcasts', broadcasts);
module.exports = router;
