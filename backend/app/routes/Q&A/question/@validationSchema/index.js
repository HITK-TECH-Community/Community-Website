const Joi = require('joi');

const QuestionValidationSchema = Joi.object().keys({
  title: Joi.string().trim().required().min(5),
  description: Joi.string().trim().required().min(10),
  tags: Joi.array().required(),
  created_by:Joi.string().trim().required().min(5)
});

const updateQuestionStatusSchema = Joi.object().keys({
  id : Joi.string().min(24).max(24).required(),
  status : Joi.boolean().required()
});

module.exports = { QuestionValidationSchema, updateQuestionStatusSchema };
