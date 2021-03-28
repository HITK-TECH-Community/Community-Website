const router = require('express').Router({ mergeParams: true });

const postResponse = require('./postResponse');

router.post('/', postResponse);

module.exports = router;
