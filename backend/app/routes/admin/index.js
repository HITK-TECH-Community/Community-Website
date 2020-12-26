const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const postSuperAdminSchema = require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');

router.get('/createSuperAdmin', createSuperAdmin);
router.post(
  '/superAdmin',
  validationMiddleware(postSuperAdminSchema),
  postSuperAdmin
);

module.exports = router;
