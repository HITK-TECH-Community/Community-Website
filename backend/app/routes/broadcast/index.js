const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postBroadcastValidationSchema } = require('./@validationSchema');
const postBroadcast = require('./postBroadcast');

router.post('/', validationMiddleware(postBroadcastValidationSchema), authMiddleware, postBroadcast);

module.exports = router;
