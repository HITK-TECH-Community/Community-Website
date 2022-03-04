const router = require('express').Router({ mergeParams: true });
const { answerValidationSchema, getAnswerValidationSchema } = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

const approveAnswer = require('./approve');
const postAnswer = require('./post');
const getAnswers = require('./getAnswers');

// POST API FOR ANSWER
router.post('/', validation(answerValidationSchema), postAnswer);

//GET API FOR ANSWERS
router.get('/', validation(getAnswerValidationSchema), getAnswers);

//this route will update isApproved field of questions
router.patch('/approveAnswer', approveAnswer);
module.exports = router;