const Joi = require('joi');

const SubscriberValidationSchema = Joi.object().keys({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
});

module.exports = SubscriberValidationSchema;