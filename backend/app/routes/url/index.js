const router = require('express').Router({ mergeParams: true });
const shorturl = require('./shorturl');
const redirecturl = require('./redirecturl');

//GET /:code -> Redirect to long/original URL
router.get('/:code', redirecturl);

//POST /shorten -> creates short url
router.post('/shorten', shorturl);

module.exports = router;
