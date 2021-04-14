const router = require('express').Router({ mergeParams: true });
const faq = require('./post');
const FAQValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.post('/faq', validation(FAQValidationSchema), faq);

module.exports = router;
