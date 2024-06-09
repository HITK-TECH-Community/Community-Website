const router = require('express').Router({ mergeParams: true });
const postResource = require('./postResource');
const validation = require('../../../helpers/middlewares/validation');
const postResourceValidationSchema = require('./@validationSchema');

// adding resouce in broadcast schema
router.post('/', validation(postResourceValidationSchema), postResource);

module.exports = router;
