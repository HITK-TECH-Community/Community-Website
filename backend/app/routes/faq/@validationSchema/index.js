const Joi = require('joi');

const FAQValidationSchema = Joi.object().keys({
  question : Joi.string().required(),
  answer : Joi.string().required(),
  tags : Joi.string().required()
});

module.exports = FAQValidationSchema;