import express from "express";
import contactValidationSchema from './@validationSchema'
import validation from '../../../helpers/middlewares/validation'
import postContact from "./post";
import getContact from "./get"
import { authMiddleware } from "../../../helpers/middlewares/auth";
const router = express.Router({mergeParams:true})

router.get('/getcontactus', authMiddleware, getContact);
router.post('/contactus', validation(contactValidationSchema), postContact);

export default router;
