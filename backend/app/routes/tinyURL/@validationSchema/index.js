const Joi = require('joi');

const tinyURLSchema = Joi.object().keys({
  longURL: Joi.string().required().uri(),
});

module.exports = tinyURLSchema;
