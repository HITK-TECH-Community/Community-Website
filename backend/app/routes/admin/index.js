const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const {
  postSuperAdminSchema,
  getAdminsSchema,
  passwordChangeSchema,
} = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const postAdmin = require('./postAdmin');
const getAdmins = require('./getAdmins');
const changePassword = require('./changePassword');

router.get(
  '/',
  validationMiddleware(getAdminsSchema, 'query'),
  authMiddleware,
  getAdmins
);
router.get('/createSuperAdmin', createSuperAdmin);
router.post(
  '/superAdmin',
  validationMiddleware(postSuperAdminSchema),
  postSuperAdmin
);
router.post(
  '/',
  validationMiddleware(postSuperAdminSchema),
  authMiddleware,
  postAdmin
);

router.put(
  '/password',
  validationMiddleware(passwordChangeSchema),
  authMiddleware,
  changePassword
);

module.exports = router;
