const Joi = require('joi');

const postTestimonialValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
  position: Joi.string().required(),
  company: Joi.string().required(),
  image: Joi.string().uri().required(),
  text: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
});

const getTestimonialsValidationSchema = Joi.object().keys({
  page: Joi.number().min(1).optional(),
  company: Joi.string().optional(),
  year: Joi.number().optional(),
  month: Joi.number().min(1).max(12).optional(),
});

module.exports = {
  postTestimonialValidationSchema,
  getTestimonialsValidationSchema,
};
