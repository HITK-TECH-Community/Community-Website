/* eslint-disable import/extensions */
const router = require('express').Router({ mergeParams: true });
const faq = require('./post');
const getfaq = require('./getFaq.js');
const FAQValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const deleteFaq = require('./deleteFaq');

router.post('/faq', validation(FAQValidationSchema), faq);
router.get('/getFaq', getfaq);
router.put('/deleteFaq', deleteFaq);

module.exports = router;
