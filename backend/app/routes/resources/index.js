const router = require('express').Router({ mergeParams: true });
const postResource = require('./postResource');
const deleteResource = require('./deleteResource');
const getResource = require('./getResource');
const validation = require('../../../helpers/middlewares/validation');
const postResourceValidationSchema = require('./@validationSchema');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

// adding resouce in broadcast schema
router.post('/', validation(postResourceValidationSchema), postResource);
router.delete('/deleteResource', deleteResource);
router.get('/getresources', authMiddleware, getResource);
module.exports = router;
