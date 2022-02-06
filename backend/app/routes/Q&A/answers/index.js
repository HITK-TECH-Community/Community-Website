const router = require('express').Router({ mergeParams: true });
const postAnswer = require('./post');
const answerValidationSchema = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

router.post('/', validation(answerValidationSchema), postAnswer);

module.exports = router;