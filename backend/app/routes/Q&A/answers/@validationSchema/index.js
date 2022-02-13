const Joi = require('joi');

const answerValidationSchema = Joi.object().keys({
    question_id : Joi.string().trim().required().max(24).min(24),
    created_by : Joi.string().trim().required().min(3),
    answer : Joi.string().trim().required().min(15),
    created_on : Joi.date().required()
});

const getAnswerValidationSchema = Joi.object().keys({
    question_id : Joi.string().trim().required().max(24).min(24)
});
  
module.exports = {
    answerValidationSchema,
    getAnswerValidationSchema,
};