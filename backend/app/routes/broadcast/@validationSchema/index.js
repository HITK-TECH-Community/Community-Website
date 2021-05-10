const Joi = require('joi');

const postBroadcastValidationSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string().uri().required(),
  expiresOn: Joi.date()
    .min(new Date(new Date() - 100000))
    .required(),
  imageUrl: Joi.array().min(1).items(Joi.string().uri()).required(),
  tags: Joi.array().min(1).items(Joi.string()).required(),
});

const getBroadcastsValidationSchema = Joi.object().keys({
  page: Joi.number().min(1).optional(),
  tags: Joi.string().optional(),
  year: Joi.number().optional(),
  month: Joi.number().min(1).max(12).optional(),
});

module.exports = {
  postBroadcastValidationSchema,
  getBroadcastsValidationSchema,
};
