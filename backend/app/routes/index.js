const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');
const faq = require('./faq/post');
const getFaq = require('./faq/GetFaq');
const deleteFaq = require('./faq/DeleteFaq');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', faq);
router.use('/deleteFaq', deleteFaq);
router.use('/getFaq', getFaq);
router.use('/broadcast', broadcast);
router.use('/', tinyURL);
module.exports = router;
