const router = require('express').Router({ mergeParams: true });
const login = require('./login');
const loginSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.post('/login', validation(loginSchema), login);

module.exports = router;
