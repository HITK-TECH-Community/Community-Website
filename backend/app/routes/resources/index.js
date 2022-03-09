
const router = require('express').Router({ mergeParams: true });
const addaResource = require('./addResource');
const getResource = require('./getResource');
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');
const { authMiddleware } = require('../../../helpers/middlewares/auth');
router.post('/', validation(ResourcesValidationSchema), addaResource);
router.get('/getresources', authMiddleware, getResource);
module.exports = router;
