
import express from "express";
import postQuestion from "./post";
import {QuestionValidationSchema , updateQuestionStatusSchema} from './@validationSchema'
import getAllQuestion from './getAllQuestion'
import getQuestionById from "./getQuestionById"
import validation from '../../../../helpers/middlewares/validation'
import upvoteQuestion from "./upvoteQuestion"
import downvoteQuestion from "./downvoteQuestion"
import updateQuestionStatus from "./updateQuestionStatus"
const router = express.Router({mergeParams:true})

router.post('/', validation(QuestionValidationSchema), postQuestion);

// This route will give all questions from db
router.get('/getallquestions', getAllQuestion);

// This route will give question by given id
router.get('/getQuestionById', getQuestionById);

// This route will increase upvote by one.
router.patch('/upvote', upvoteQuestion);

// This route will decrease upvote by one.
router.patch('/downvote', downvoteQuestion);

// route for updating the question status
router.patch('/updateStatus', validation(updateQuestionStatusSchema), updateQuestionStatus);

export default router;
