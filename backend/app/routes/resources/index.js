import express from "express";
import addaResource from './addResource'
import deleteResource from "./deleteResource"
import getResource from "./getResource"
import validation from '../../../helpers/middlewares/validation'
import ResourcesValidationSchema from './@validationSchema'
import { authMiddleware } from "../../../helpers/middlewares/auth";
const router = express.Router({mergeParams:true})

router.post('/', validation(ResourcesValidationSchema), addaResource);

// Route for deleting a resource
router.delete('/deleteResource', deleteResource);
router.get('/getresources', authMiddleware, getResource);
export default router;
