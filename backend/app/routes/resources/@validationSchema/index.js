const Joi = require('joi');

// const ResourcesValidationSchema = Joi.object().keys({
//   name: Joi.string().trim().required().min(3),
//   email: Joi.string().trim().email().required(),
//   url: Joi.string().trim().required().min(10),
//   description: Joi.string().trim().required().min(5),
//   trustLevel: Joi.number().integer().required(),
//   expiryDate: Joi.date().required(),
//   additionalInfo: Joi.string().trim().min(5),
// });

// module.exports = ResourcesValidationSchema;


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