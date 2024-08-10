const Joi = require('joi');

const loginSchema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
  keepMeLoggedIn:Joi.boolean()
});

module.exports = loginSchema;
