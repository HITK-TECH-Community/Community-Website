const router = require('express').Router({ mergeParams: true });
const faq = require('./faq');
const faqSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.use('/faq', validation(faqSchema), faq);

module.exports = router;
