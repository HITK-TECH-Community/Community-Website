import express from "express";
import {answerValidationSchema, getAnswerValidationSchema, updateAnswerStatus} from './@validationSchema'
import validation from '../../../../helpers/middlewares/validation'
import postAnswer from "./post";
import getAnswers from "./getAnswers"
import upvoteAnswer from "./upvoteAnswer";
import downvoteAnswer from "./downvoteAnswer"
import updateAnswerStatus from "./updateAnswerStatus";
const router = express.Router({mergeParams:true});

// POST API FOR ANSWER
router.post('/', validation(answerValidationSchema), postAnswer);

// GET API FOR ANSWERS
router.get('/', validation(getAnswerValidationSchema), getAnswers);

// INCREASE UPVOTE FOR ANSWERS
router.patch('/upvote', upvoteAnswer);

// DECREASE UPVOTE FOR ANSWERS
router.patch('/downvote', downvoteAnswer);

// Update Answer Status
router.patch('/updateStatus', validation(updateAnswerStatusSchema), updateAnswerStatus);

export default router;
