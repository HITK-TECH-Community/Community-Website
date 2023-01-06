const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postBroadcastValidationSchema, getBroadcastsValidationSchema, updateBroadcastValidationSchema } = require('./@validationSchema');
const postBroadcast = require('./postBroadcast');
const deleteBroadcast = require('./deleteBroadcast');
const getBroadcasts = require('./getBroadcasts');
const getallbroadcast = require('./getallbroadcasts');
const updateBroadcast = require('./updateBroadcast');

router.get('/', validationMiddleware(getBroadcastsValidationSchema, 'query'), getBroadcasts);
router.post('/', validationMiddleware(postBroadcastValidationSchema), authMiddleware, postBroadcast);
router.delete('/:id', authMiddleware, deleteBroadcast);
router.get('/all', getallbroadcast);
router.patch('/update', validationMiddleware(updateBroadcastValidationSchema), authMiddleware, updateBroadcast);
module.exports = router;
