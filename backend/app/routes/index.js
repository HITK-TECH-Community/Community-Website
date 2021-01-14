const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const dummy = require('./dummy/control')

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/dummy',dummy);

module.exports = router;
