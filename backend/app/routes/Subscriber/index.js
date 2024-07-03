const router = require('express').Router({ mergeParams: true });
const SubscriberValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const postSubscriber = require('./post');

router.post('/', validation(SubscriberValidationSchema), postSubscriber);

module.exports = router;
