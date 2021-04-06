const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');

const postResponse = require('./postResponse');
const { postResponseSchema } = require('./@validationSchema');

router.post('/', validationMiddleware(postResponseSchema), postResponse);

module.exports = router;
