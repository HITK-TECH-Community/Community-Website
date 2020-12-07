import express from 'express';
import controller from '../controllers/controller.js';
const router = express.Router();

router.get('/' , controller.home); //Router path for home page

router.get('/resources' , controller.resource_index); //Router path for home page

router.use(controller.error); //Router path for page that does not exist

export default router;