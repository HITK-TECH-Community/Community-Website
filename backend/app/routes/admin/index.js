const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');
const {
  postSuperAdminSchema,
  getAdminsSchema,
} = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const getAdmins = require('./getAdmins');

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

module.exports = router;
