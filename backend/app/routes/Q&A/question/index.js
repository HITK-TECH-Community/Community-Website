const router = require('express').Router({ mergeParams: true });
const postQuestion = require('./post');
const QuestionValidationSchema = require('./@validationSchema');
const getAllQuestion = require('./getAllQuestion');
const getQuestionById = require('./getQuestionById');
const approveQuestion = require('./approve');
const validation = require('../../../../helpers/middlewares/validation');

router.post('/', validation(QuestionValidationSchema), postQuestion);

//this route will give all questions from db
router.get('/getallquestions', getAllQuestion);

//this route will give question by given id
router.get('/getQuestionById', getQuestionById);

//this route will update isApproved field of questions
router.patch('/approveQuestion', approveQuestion);
module.exports = router;
