const Joi = require('joi');

const QuestionValidationSchema = Joi.object().keys({
  title: Joi.string().trim().required().min(5),
  description: Joi.string().trim().required().min(10),
  tags: Joi.array().required(),
});

module.exports = QuestionValidationSchema;
