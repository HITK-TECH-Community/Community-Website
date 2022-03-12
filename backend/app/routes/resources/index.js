
const router = require('express').Router({ mergeParams: true });
const addaResource = require('./addResource');
<<<<<<< HEAD
const deleteResource = require('./deleteResource');
=======
const getResource = require('./getResource');
>>>>>>> 35a4d66ba933238c7596691c6f15b171ae7f100a
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');
const { authMiddleware } = require('../../../helpers/middlewares/auth');
router.post('/', validation(ResourcesValidationSchema), addaResource);
<<<<<<< HEAD

//route for deleting a resource
router.delete('/deleteResource', deleteResource);
=======
router.get('/getresources', authMiddleware, getResource);
>>>>>>> 35a4d66ba933238c7596691c6f15b171ae7f100a
module.exports = router;
