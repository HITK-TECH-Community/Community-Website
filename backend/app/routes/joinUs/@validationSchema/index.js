const Joi = require('joi');

const JoinUsValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  linkdin: Joi.string().required(),
  description: Joi.string().required(),
  year: Joi.string().required(),
  college: Joi.string().required(),
  contact: Joi.string().required(),
  otherDomain: Joi.string(),
  interestedDomain: Joi.array().required(),
  department: Joi.string(),
});

module.exports = JoinUsValidationSchema;
