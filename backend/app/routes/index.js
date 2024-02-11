import express from "express";
import admin from "./admin"
import auth from "./auth"
import {emailTest} from './testRoutes/emailTest'
import tinyURL from "./tinyURL"
import broadcast from "./broadcast"
import faq from "./faq/post"
import getFaq from "./faq/getFaq"
import deleteFaq from "./faq/deleteFaq"
import updateFaq from "./faq/updateFaq"
import joinUs from "./joinUs"
import contactUs from "./contactUs"


import getContactUs from "./contactUs/get"
import contactValidationSchema from "./contactUs/@validationSchema"
import validation from '../../helpers/middlewares/validation'

import question from "./Q&A/question"
import answer from "./Q&A/answers"
import teamMember from "./teamMember"
import resource from "./resources"
const router = express.Router({mergeParams:true});

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', faq);
router.use('/deleteFaq', deleteFaq);
router.use('/updateFaq',updateFaq)
router.use('/getFaq', getFaq);
router.use('/contactus', validation(contactValidationSchema), contactUs);
router.use('/getcontactus', getContactUs);
router.use('/broadcast', broadcast);
router.use('/question', question);
router.use('/answers', answer);
router.use('/joinUs', joinUs);
router.use('/teamMember', teamMember);
router.use('/', tinyURL);
router.use('/resources', resource);
export default router;
