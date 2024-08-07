const router = require('express').Router({ mergeParams: true });
const postSubscriber = require('./postSubscriber');
const validation = require('../../../helpers/middlewares/validation');
const {postSubscriberValidationSchema} = require('./@validationSchema');

// add new subscriber for news letter
router.post('/', validation(postSubscriberValidationSchema), postSubscriber);

module.exports = router;
