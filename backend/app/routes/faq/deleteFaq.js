import to from "await-to-js"
import faq from '../../models/faq'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";
import Admin from '../../models/Admin'

export default async (req, res, next) => {
  const { userId } = req.body;
  const { faqId } = req.body;
  if (!userId || !faqId) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `You don't have the required permissions`,
      errStack: '',
    });
    return next(error);
  }
  const [err] = await to(Admin.findById(userId));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `You don't have the required permissions`,
      errStack: err,
    });
    return next(error);
  }
  const [err2] = await to(faq.findByIdAndDelete(faqId));
  if (err2) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `Faq doesn't exist`,
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'FAQ deleted successfully',
  });
  return next();
};
