const router = require('express').Router({ mergeParams: true });
const contactValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');
const postContact = require('./post');
const getContact = require('./get');
const deleteContactUs = require('./delete');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

router.get('/getcontactus', authMiddleware, getContact);
router.post('/', validation(contactValidationSchema), postContact);
router.delete('/deleteContactUs', authMiddleware, deleteContactUs);

module.exports = router;
