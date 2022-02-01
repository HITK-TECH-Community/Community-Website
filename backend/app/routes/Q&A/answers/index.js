const router = require('express').Router({ mergeParams: true });
const postAnswer = require('./post');
const AnswerValidationSchema = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

router.post('/', validation(AnswerValidationSchema), postAnswer);

module.exports = router;