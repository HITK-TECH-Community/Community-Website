const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');
const FAQ = require('./faq/post');
const GetFaq = require('./faq/GetFaq');
const DeleteFaq = require('./faq/DeleteFaq');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', FAQ);
router.use('/deleteFaq', DeleteFaq);
router.use('/getFaq', GetFaq);
router.use('/broadcast', broadcast);
router.use('/', tinyURL);
module.exports = router;
