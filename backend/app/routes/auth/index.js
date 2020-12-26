const router = require('express').Router({ mergeParams: true });
const { authMiddleware } = require('../../../helpers/middlewares/auth');
const login = require('./login');
const loginSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.post('/login', authMiddleware, validation(loginSchema), login);

module.exports = router;
