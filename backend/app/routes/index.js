const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const emailtest = require('./emailtest/control')

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/emailtest',emailtest);

module.exports = router;
