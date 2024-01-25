import to from "await-to-js"
import Broadcast from '../../models/Broadcast'
import constants from "../../../constants";
import { ErrorHandler } from "../../../helpers/error";

export default async (req, res, next) => {
  const [err, response] = await to(Broadcast.find());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }

  res.status(200).json(response);
  return next();
};
