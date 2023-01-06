const Joi = require('joi');

const ResourcesValidationSchema = Joi.object().keys({
  name: Joi.string().trim().required().min(3),
  email: Joi.string().trim().email().required(),
  url: Joi.string().trim().required().min(10),
  description: Joi.string().trim().required().min(5),
  trustLevel: Joi.number().integer().required(),
  expiryDate: Joi.date().required(),
  additionalInfo: Joi.string().trim().min(5),
});

module.exports = ResourcesValidationSchema;
