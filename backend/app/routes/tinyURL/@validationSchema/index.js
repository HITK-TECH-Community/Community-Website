import Joi from "joi"

const tinyURLSchema = Joi.object().keys({
  longURL: Joi.string().required().uri(),
});

export default tinyURLSchema;
