const Joi = require('joi');

const postSubscriberValidationSchema = Joi.object().keys({
  email: Joi.string().required(),
});

module.exports =  {postSubscriberValidationSchema};