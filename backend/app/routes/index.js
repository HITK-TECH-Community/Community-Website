const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const url = require('./url');

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/', url);

module.exports = router;
