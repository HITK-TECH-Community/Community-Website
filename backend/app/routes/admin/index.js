const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const postSuperAdminSchema = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const postAdmin = require('./postAdmin');

router.get('/createSuperAdmin', createSuperAdmin);
router.post(
  '/superAdmin',
  validationMiddleware(postSuperAdminSchema),
  postSuperAdmin
);
router.post(
  '/admin',
  validationMiddleware(postSuperAdminSchema),
  postAdmin
);

module.exports = router;
