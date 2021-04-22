const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postBroadcastValidationSchema } = require('./@validationSchema');
const postBroadcast = require('./postBroadcast');
const deleteBroadcast = require('./deleteBroadcast');

router.post('/', validationMiddleware(postBroadcastValidationSchema), authMiddleware, postBroadcast);
router.delete('/:id', authMiddleware, deleteBroadcast);

module.exports = router;
