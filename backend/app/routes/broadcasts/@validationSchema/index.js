const Joi = require('joi');

const addBroadcastValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string().uri().required(),
  isExpired: Joi.boolean().required(),
  imageUrl: Joi.string().uri().required(),
  category: Joi.string().required(),
});

module.exports = {
  addBroadcastValidation,
};
