const router = require('express').Router({ mergeParams: true });
const addaResource = require('./addResource');
const deleteResource = require('./deleteResource');
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');
router.post('/', validation(ResourcesValidationSchema), addaResource);

//route for deleting a resource
router.delete('/deleteResource', deleteResource);
module.exports = router;
