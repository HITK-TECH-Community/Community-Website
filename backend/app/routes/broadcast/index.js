const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postBroadcastValidationSchema, getBroadcastsValidationSchema } = require('./@validationSchema');
const postBroadcast = require('./postBroadcast');
const deleteBroadcast = require('./deleteBroadcast');
const getBroadcasts = require('./getBroadcasts');

router.get('/', validationMiddleware(getBroadcastsValidationSchema, 'query'), getBroadcasts);
router.post('/', validationMiddleware(postBroadcastValidationSchema), authMiddleware, postBroadcast);
router.delete('/:id', authMiddleware, deleteBroadcast);

module.exports = router;
