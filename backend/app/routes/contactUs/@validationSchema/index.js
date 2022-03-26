const Joi = require('joi');

const contactValidationSchema = Joi.object().keys({
  name: Joi.string().trim().required().min(3),
  email: Joi.string().trim().email().required(),
  subject: Joi.string().trim().required().min(5),
  message: Joi.string().trim().required().min(8),
});

module.exports = contactValidationSchema;
