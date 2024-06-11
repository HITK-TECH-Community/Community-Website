const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postTestimonialValidationSchema } = require('./@validationSchema');
const postTestimonial = require('./postTestimonial');
const getTestimonials = require('./getTestimonials');

router.post('/', validationMiddleware(postTestimonialValidationSchema), authMiddleware, postTestimonial);
router.get('/getTestimonials', getTestimonials);


module.exports = router;
