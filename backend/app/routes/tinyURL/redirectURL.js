import to from "await-to-js"
import tinyURL from '../../models/tinyURL'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";


export default async (req, res, next) => {
  const [err, url] = await to(tinyURL.findOne({ urlCode: req.params.code }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      errStack: err,
    });
    return next(error);
  }
  if (!url) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 404,
      message: 'No URL found',
    });
    next(error);
    return false;
  }
  return res.status(200).redirect(url.longURL);
};
