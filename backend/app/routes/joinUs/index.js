const router = require('express').Router({ mergeParams: true });
const postJoinUs = require('./post');
const JoinUsValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.post('/joinUs', validation(JoinUsValidationSchema), postJoinUs);

module.exports = router;
