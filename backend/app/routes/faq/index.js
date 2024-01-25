import express from "express";
import faq from "./post"
import getfaq from "./getFaq"
import FAQValidationSchema from './@validationSchema'
import validation from '../../../helpers/middlewares/validation';
import deleteFaq from "./deleteFaq"
import updateFaq from "./updateFaq";
const router = express.Router({mergeParams:true})

router.post('/faq', validation(FAQValidationSchema), faq);
router.get('/getFaq', getfaq);
router.put('/deleteFaq', deleteFaq);
router.patch('/updateFaq',updateFaq);

export default router;
