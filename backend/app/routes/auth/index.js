import express from "express";
import login from "./login";
import loginSchema from './@validationSchema'
import validation from '../../../helpers/middlewares/validation'
const router = express.Router({ mergeParams: true });

router.post('/login', validation(loginSchema), login);

export default router;
