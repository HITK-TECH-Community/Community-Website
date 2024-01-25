import express from "express";
import shortenURL from "./shortenURL"
import redirectURL from "./redirectURL";
import validationMiddleware from '../../../helpers/middlewares/validation'
import tinyURLSchema from './@validationSchema'
const router = express.Router({mergeParams:true})

// GET /:code -> Redirect to long/original URL
router.get('/:code', redirectURL);

// POST /shorten -> creates short url
router.post('/shorten', validationMiddleware(tinyURLSchema), shortenURL);

export default router;
