const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');
const faq = require('./faq/post');
const getFaq = require('./faq/getFaq');
const deleteFaq = require('./faq/deleteFaq');
const updateFaq = require('./faq/updateFaq')
const joinUs = require('./joinUs');
const contactus = require('./contactUs')
const question = require('./Q&A/question');
const answer = require('./Q&A/answers');
const teamMember = require('./teamMember');
const resource = require('./resources');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', faq);
router.use('/deleteFaq', deleteFaq);
router.use('/updateFaq',updateFaq)
router.use('/getFaq', getFaq);
router.use('/contactus', contactus);
router.use('/broadcast', broadcast);
router.use('/question', question);
router.use('/answers', answer);
router.use('/joinUs', joinUs);
router.use('/teamMember', teamMember);
router.use('/', tinyURL);
router.use('/resources', resource);
module.exports = router;
