const Joi = require('joi');

const faqSchema = Joi.object().keys({
  question : Joi.string().required(),
  answer : Joi.string().required(),
});

module.exports = faqSchema;