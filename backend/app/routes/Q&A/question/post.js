
import to from "await-to-js"
import question from '../../../models/question'
import { ErrorHandler } from "../../../../helpers/error";
import constants from "../../../../constants";


export default async (req, res, next) => {
  const [err, body] = await to(question.create({ ...req.body }));

  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Question has been added',
    id: body._id,
  });

  return next();
};
