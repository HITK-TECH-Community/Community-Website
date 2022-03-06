//Creating a router
const router = require('express').Router({ mergeParams: true });

//Getting addResource function which deals with posting data
const addaResource = require('./addResource');

//Importing middlewatr for validation
const validation = require('../../../helpers/middlewares/validation');
const ResourcesValidationSchema = require('./@validationSchema');

//Route by default for post
router.post('/', validation(ResourcesValidationSchema), addaResource);

//Exporting router to use it in "index.js"
module.exports = router;
