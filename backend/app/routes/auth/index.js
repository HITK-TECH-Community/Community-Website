const router = require('express').Router({ mergeParams: true });
const { authMiddleware } = require('../../../helpers/middlewares/auth');
const login = require('./login');

router.use(authMiddleware);
router.post('/login', login);

module.exports = router;
