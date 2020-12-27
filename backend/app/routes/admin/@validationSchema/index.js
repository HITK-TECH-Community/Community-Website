const Joi = require('joi');

const postSuperAdminSchema = Joi.object({
  firstName: Joi.string()
    .optional()
    .pattern(/[a-zA-z]+$/, 'aplha'),
  lastName: Joi.string()
    .optional()
    .pattern(/[a-zA-z]+$/, 'aplha'),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  contact: Joi.string()
    .optional()
    .regex(/[+]91[6-9]{1}[0-9]{9}$/, 'phone'),
  username: Joi.string().optional(),
});

module.exports = postSuperAdminSchema;
