const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { addBroadcastValidation } = require('./@validationSchema');
const addBroadcast = require('./addBroadcast');

router.post('/', validationMiddleware(addBroadcastValidation), authMiddleware, addBroadcast);

module.exports = router;
