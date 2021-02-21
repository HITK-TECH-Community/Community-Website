const router = require('express').Router({ mergeParams: true });
const shortenURL = require('./shortenURL');
const redirectURL = require('./redirectURL');
const validationMiddleware = require('../../../helpers/middlewares/validation');
const tinyURLSchema = require('./@validationSchema');

// GET /:code -> Redirect to long/original URL
router.get('/:code', redirectURL);

// POST /shorten -> creates short url
router.post('/shorten', validationMiddleware(tinyURLSchema), shortenURL);

module.exports = router;
