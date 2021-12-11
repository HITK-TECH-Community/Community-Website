const router = require('express').Router({ mergeParams: true });
const faq = require('./post');
const Getfaq = require('./GetFaq.js');
const DeleteFaq = require('./DeleteFaq')
const FAQValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const DeleteFaq = require('./DeleteFaq');

router.post('/faq', validation(FAQValidationSchema), faq);
router.get('/getFaq', Getfaq);
router.put('deleteFaq', DeleteFaq);

module.exports = router;
