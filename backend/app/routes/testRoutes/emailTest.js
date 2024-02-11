import to from "await-to-js";
import { ErrorHandler } from "../../../helpers/error";
import { sendEmail } from "../../../helpers/emailService";
import constants from "../../../constants";


export default emailTest = async (req, res, next) => {
  const { email, data, type } = req.body;

  const [err, response] = await to(sendEmail(email, data, type));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send(response);
  return next();
};
