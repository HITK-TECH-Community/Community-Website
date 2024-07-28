const router = require('express').Router({ mergeParams: true });
const { answerValidationSchema, updateAnswerStatusSchema } = require('./@validationSchema');
const validation = require('../../../../helpers/middlewares/validation');

const postAnswer = require('./post');
const getAnswers = require('./getAnswers');
const upvoteAnswer = require('./upvoteAnswer');
const downvoteAnswer = require('./downvoteAnswer');
const updateAnswerStatus = require('./updateAnswerStatus');
const { authMiddleware } = require('../../../../helpers/middlewares/auth');
const deleteAnswer = require('./deleteAnswer');

// POST API FOR ANSWER
router.post('/', validation(answerValidationSchema), postAnswer);

// GET API FOR ANSWERS
router.get('/:questionId', getAnswers);

// INCREASE UPVOTE FOR ANSWERS
router.patch('/upvote', upvoteAnswer);

// DECREASE UPVOTE FOR ANSWERS
router.patch('/downvote', downvoteAnswer);

// Update Answer Status
router.patch('/updateStatus', validation(updateAnswerStatusSchema), updateAnswerStatus);

// Delete Answer by Id
router.delete('/deleteanswer', authMiddleware, deleteAnswer);

module.exports = router;
