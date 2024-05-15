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

const getAdminsSchema = Joi.object({
  type: Joi.string()
    .optional()
    .pattern(/^(superAdmin|admin|self)$/),
  page: Joi.number().optional(),
  email: Joi.string().email().optional(),
});

const passwordChangeSchema = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});

const inviteAdminSchema = Joi.object({
  email: Joi.string().required().email(),
  data: Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required().uri(),
  }),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().required(),
});
const updateAdminSchema =Joi.object({
  firstName:Joi.string(),
  lastName:Joi.string(),
  contact:Joi.string().regex(/[+]91[6-9]{1}[0-9]{9}$/, 'phone'),
  username:Joi.string(),
});

const deleteAdminSchema = Joi.object({
  id : Joi.string().min(24).max(24).required()
})

module.exports = {
  postSuperAdminSchema,
  getAdminsSchema,
  passwordChangeSchema,
  inviteAdminSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updateAdminSchema,
  deleteAdminSchema
};