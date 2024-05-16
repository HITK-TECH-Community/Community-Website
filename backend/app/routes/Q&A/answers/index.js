const router = require('express').Router({ mergeParams: true });
const { answerValidationSchema, getAnswerValidationSchema, updateAnswerStatusSchema } = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

const postAnswer = require('./post');
const getAnswers = require('./getAnswers');
const upvoteAnswer = require('./upvoteAnswer');
const downvoteAnswer = require('./downvoteAnswer');
const updateAnswerStatus = require('./updateAnswerStatus');

// POST API FOR ANSWER
router.post('/', validation(answerValidationSchema), postAnswer);

// GET API FOR ANSWERS
router.get('/:questionId', validation(getAnswerValidationSchema), getAnswers);

// INCREASE UPVOTE FOR ANSWERS
router.patch('/upvote', upvoteAnswer);

// DECREASE UPVOTE FOR ANSWERS
router.patch('/downvote', downvoteAnswer);

// Update Answer Status
router.patch('/updateStatus', validation(updateAnswerStatusSchema), updateAnswerStatus);

module.exports = router;
