import to from "await-to-js"
import contactUs from '../../models/contactUs'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";

export default async (req, res, next) => {
  const [err, response] = await to(contactUs.find());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    ContactUs: response,
  });
  return next();
};
