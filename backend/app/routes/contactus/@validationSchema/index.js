const Joi = require('joi');

const postResponseSchema = Joi.object({
  name: Joi.string()
    .optional()
    .pattern(/[a-zA-z]+$/, 'aplha'),
  email: Joi.string().min(3).required().email(),
  subject: Joi.string().min(5),
  message: Joi.string().min(8),
});

module.exports = {
  postResponseSchema,
};
