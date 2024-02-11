import express from "express";
import validationMiddleware from '../../../helpers/middlewares/validation'
import { authMiddleware } from "../../../helpers/middlewares/auth";
const router = express.Router({mergeParams:true})


import { postBroadcastValidationSchema,getBroadcastsValidationSchema,updateBroadcastValidationSchema } from "./@validationSchema";
import postBroadcast from "./postBroadcast"
import deleteBroadcast from "./deleteBroadcast";
import getBroadcasts from "./getBroadcasts";
import getallbroadcast from "./getallbroadcasts";
import updateBroadcast from "./updateBroadcast"


router.get('/', validationMiddleware(getBroadcastsValidationSchema, 'query'), getBroadcasts);
router.post('/', validationMiddleware(postBroadcastValidationSchema), authMiddleware, postBroadcast);
router.delete('/:id', authMiddleware, deleteBroadcast);
router.get('/all', getallbroadcast);
router.patch('/update', validationMiddleware(updateBroadcastValidationSchema), authMiddleware, updateBroadcast);
export default router;
