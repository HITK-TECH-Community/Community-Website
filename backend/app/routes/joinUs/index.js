const router = require('express').Router({ mergeParams: true });
const postJoinUs = require('./post');
const getJoinUs = require('./get');
const JoinUsValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const {authMiddleware} = require('../../../helpers/middlewares/auth')

router.post('/', validation(JoinUsValidationSchema), postJoinUs);
// router.get('/', authMiddleware, getJoinUs);
router.get('/', getJoinUs);

module.exports = router;
