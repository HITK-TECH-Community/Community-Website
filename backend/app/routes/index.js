const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const linkShortener = require('./linkShortener');

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/l', linkShortener);

module.exports = router;
