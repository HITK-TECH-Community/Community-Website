const router = require('express').Router({ mergeParams: true });
const faq = require('./post');
const getfaq = require('./getFaq');
const FAQValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const deleteFaq = require('./deleteFaq');
const updateFaq = require('./updateFaq');
const {authMiddleware}=require('../../../helpers/middlewares/auth')
router.post('/postFaq', validation(FAQValidationSchema), faq);
router.get('/getFaq', getfaq);
router.put('/deleteFaq',authMiddleware, deleteFaq);
router.patch('/updateFaq',updateFaq);

module.exports = router;
