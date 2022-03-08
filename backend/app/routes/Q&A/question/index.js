const router = require('express').Router({ mergeParams: true });
const postQuestion = require('./post');
const QuestionValidationSchema = require('./@validationSchema');
const getAllQuestion = require('./getAllQuestion');
const getQuestionById = require('./getQuestionById');
const validation = require('../../../../helpers/middlewares/validation');
const upvoteQuestion = require('./upvoteQuestion');
const downvoteQuestion = require('./downvoteQuestion');

router.post('/', validation(QuestionValidationSchema), postQuestion);

//this route will give all questions from db
router.get('/getallquestions', getAllQuestion);

//this route will give question by given id
router.get('/getQuestionById', getQuestionById);

//this route will increase upvote by one.
router.patch('/upvote', upvoteQuestion);

//this route will decrease upvote by one.
router.patch('/downvote', downvoteQuestion);

module.exports = router;
