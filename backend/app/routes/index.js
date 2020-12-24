const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');

router.use('/admin', admin);
module.exports = router;
