const Joi = require('joi');

const addBroadcastValidation = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string().uri().required(),
  isExpired: Joi.boolean().required(),
  imageUrl: Joi.array().min(1).items(Joi.string().uri()).required(),
  category: Joi.string().required(),
});

module.exports = {
  addBroadcastValidation,
};
