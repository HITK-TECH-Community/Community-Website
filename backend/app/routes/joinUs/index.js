const router = require('express').Router({ mergeParams: true });
const postJoinUs = require('./post');
const getJoinUs = require('./get');
const JoinUsValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const {authMiddleware} = require('../../../helpers/middlewares/auth')
const deleteJoinUs = require("./deleteJoinUs")

router.post('/', validation(JoinUsValidationSchema), postJoinUs);
router.get('/', authMiddleware, getJoinUs);
router.delete('/deleteJoinUs',deleteJoinUs)

module.exports = router;
