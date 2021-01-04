const Joi = require('joi');

const linkSchema = Joi.object().keys({
  link: Joi.string().uri(),
});

const shortUrlSchema = Joi.object().keys({
  shorturl: Joi.string(),
});

module.exports = { linkSchema, shortUrlSchema };
