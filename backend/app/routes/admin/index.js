import express from "expresss";
import validationMiddleware from '../../../helpers/middlewares/validation'
import { authMiddleware } from "../../../helpers/middlewares/auth";
const router = express.Router({ mergeParams: true });

const {
  postSuperAdminSchema,
  getAdminsSchema,
  passwordChangeSchema,
  inviteAdminSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updateAdminSchema,
  deleteAdminSchema,
} = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const postAdmin = require('./postAdmin');
const getAdmins = require('./getAdmins');
const inviteAdmin = require('./inviteAdmin');
const changePassword = require('./changePassword');
const forgotPassword = require('./forgotPassword');
const resetPassword = require('./resetPassword');
const updateAdmin = require('./updateAdmin');
const deleteAdmin = require('./deleteAdmin');

router.get('/', validationMiddleware(getAdminsSchema, 'query'), authMiddleware, getAdmins);
router.get('/createSuperAdmin', createSuperAdmin);

router.post('/superAdmin', validationMiddleware(postSuperAdminSchema), postSuperAdmin);
router.post('/', validationMiddleware(postSuperAdminSchema), authMiddleware, postAdmin);
router.post('/inviteAdmin', validationMiddleware(inviteAdminSchema), authMiddleware, inviteAdmin);
router.post('/forgotpassword', validationMiddleware(forgotPasswordSchema), forgotPassword);
router.post('/resetpassword/:token', validationMiddleware(resetPasswordSchema), resetPassword);

router.put('/password', validationMiddleware(passwordChangeSchema), authMiddleware, changePassword);
router.put('/:id/:token', validationMiddleware(updateAdminSchema), updateAdmin);

router.delete('/deleteAdmin', validationMiddleware(deleteAdminSchema), authMiddleware, deleteAdmin);

export default router;