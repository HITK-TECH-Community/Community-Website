
import { ErrorHandler } from '../error';
import constants from "../../constants"


const middleware = (schema, type = 'body') => (req, res, next) => {
  const { error, value } = schema.validate(type === 'body' ? req.body : req[type], { abortEarly: false });
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(', ');

    const err = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      errStack: message,
      message,
    });
    return next(err);
  }
  res.locals[type] = value;
  return next();
};
export default middleware;
