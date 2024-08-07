const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');
const faq = require('./faq');
const joinUs = require('./joinUs');
const contactus = require('./contactUs')
const question = require('./Q&A/question');
const answer = require('./Q&A/answers');
const teamMember = require('./teamMember');
const resource = require('./resources');
const testimonial = require('./testimonial');
const subscriber=require('./subscribers');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', faq);
router.use('/contactus', contactus);
router.use('/broadcast', broadcast);
router.use('/question', question);
router.use('/answers', answer);
router.use('/joinUs', joinUs);
router.use('/teamMember', teamMember);
router.use('/', tinyURL);
router.use('/resources', resource);
router.use('/testimonials', testimonial);
router.use('/subscriber',subscriber)
module.exports = router;
