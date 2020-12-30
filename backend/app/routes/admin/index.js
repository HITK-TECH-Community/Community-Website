const router = require('express').Router({ mergeParams: true });
const validationMiddleware = require('../../../helpers/middlewares/validation');
const {postSuperAdminSchema ,putSuperAdminSchema }= require('./@validationSchema');
const createSuperAdmin = require('./createSuperAdmin');
const postSuperAdmin = require('./postSuperAdmin');
const putSuperAdmin = require('./update_data');

router.get('/createSuperAdmin', createSuperAdmin);
router.post(
  '/superAdmin',
  validationMiddleware(postSuperAdminSchema),
  postSuperAdmin
);
router.put(
  '/:id',
  validationMiddleware(putSuperAdminSchema),
  putSuperAdmin
);
module.exports = router;
