const router = require('express').Router({ mergeParams: true });
const contactValidationSchema = require('./@validationSchema');
const validation = require('../../../helpers/middlewares/validation');

router.post('/contactus', validation(contactValidationSchema));

module.exports = router;
