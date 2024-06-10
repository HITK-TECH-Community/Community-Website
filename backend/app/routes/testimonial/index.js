const router = require('express').Router({ mergeParams: true });

const getTestimonials = require('./getTestimonials');

router.get('/getTestimonials', getTestimonials);

module.exports = router;
