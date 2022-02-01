const router = require('express').Router({ mergeParams: true });
const postQuestion = require('./post');
const QuestionValidationSchema = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

router.post('/', validation(QuestionValidationSchema), postQuestion);

module.exports = router;
