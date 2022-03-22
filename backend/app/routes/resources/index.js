
const router = require('express').Router({ mergeParams: true });
const addaResource = require('./addResource');
const deleteResource = require('./deleteResource');
const getResource = require('./getResource');
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');
const { authMiddleware } = require('../../../helpers/middlewares/auth');
router.post('/', validation(ResourcesValidationSchema), addaResource);

//route for deleting a resource
router.delete('/deleteResource', deleteResource);
router.get('/getresources', authMiddleware, getResource);
module.exports = router;
