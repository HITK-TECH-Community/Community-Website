const router = require('express').Router({ mergeParams: true });

const createSuperAdmin = require('./createSuperAdmin');

router.get('/createSuperAdmin', createSuperAdmin);

module.exports = router;
