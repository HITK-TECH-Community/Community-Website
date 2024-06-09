const Joi = require('joi');

const postResourceValidationSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string().uri().required(),
  expiresOn: Joi.date()
    .min(new Date(new Date() - 100000))
    .required(),
  imageUrl: Joi.array().min(1).items(Joi.string().uri()).required(),
  tags: Joi.array().min(1).items(Joi.string()).required(),
});

module.exports =  postResourceValidationSchema;