import express from "express";
import postJoinUs from "./post"
import getJoinUs from "./get";
import JoinUsValidationSchema from './@validationSchema'
import validation from '../../../helpers/middlewares/validation'
import { authMiddleware } from "../../../helpers/middlewares/auth";
import deleteJoinUs from "./deleteJoinUs"
const router = express.Router({mergeParams:true})

router.post('/', validation(JoinUsValidationSchema), postJoinUs);
router.get('/', authMiddleware, getJoinUs);
router.delete('/deleteJoinUs',deleteJoinUs)

export default router;
