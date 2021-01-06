const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');

router.use(admin);
router.use(auth);

module.exports = router;
