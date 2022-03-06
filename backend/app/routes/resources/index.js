const router = require('express').Router({ mergeParams: true });
const addaResource = require('./addResource');
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');
router.post('/', validation(ResourcesValidationSchema), addaResource);
module.exports = router;
