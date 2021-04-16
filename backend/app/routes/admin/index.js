const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const {
  postSuperAdminSchema,
  getAdminsSchema,
  passwordChangeSchema,
  inviteAdminSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const postAdmin = require('./postAdmin');
const getAdmins = require('./getAdmins');
const inviteAdmin = require('./inviteAdmin');
const changePassword = require('./changePassword');
const forgotPassword = require('./forgotPassword');
const resetPassword = require('./resetPassword');

router.get('/', validationMiddleware(getAdminsSchema, 'query'), authMiddleware, getAdmins);
router.get('/createSuperAdmin', createSuperAdmin);

router.post('/superAdmin', validationMiddleware(postSuperAdminSchema), postSuperAdmin);
router.post('/', validationMiddleware(postSuperAdminSchema), authMiddleware, postAdmin);
router.post('/inviteAdmin', validationMiddleware(inviteAdminSchema), authMiddleware, inviteAdmin);
router.post('/forgotpassword', validationMiddleware(forgotPasswordSchema), forgotPassword);
router.post('/resetpassword/:token', validationMiddleware(resetPasswordSchema), resetPassword);

router.put('/password', validationMiddleware(passwordChangeSchema), authMiddleware, changePassword);

module.exports = router;
