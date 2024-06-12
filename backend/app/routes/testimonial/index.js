const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postTestimonialValidationSchema } = require('./@validationSchema');
const postTestimonial = require('./postTestimonial');
const getTestimonials = require('./getTestimonials');
const deleteTestimonial = require('./deleteTestimonial');

router.post('/', validationMiddleware(postTestimonialValidationSchema), authMiddleware, postTestimonial);
router.get('/getTestimonials', getTestimonials);
router.delete('/:id', authMiddleware, deleteTestimonial);

module.exports = router;
