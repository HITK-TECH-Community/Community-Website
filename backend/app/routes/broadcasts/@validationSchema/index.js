const Joi = require('joi');

const addBroadcastValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  link: Joi.string().uri(),
  isExpired: Joi.boolean().required(),
  imageUrl: Joi.string().uri(),
  category: Joi.string().required(),
});

module.exports = {
  addBroadcastValidation,
};
