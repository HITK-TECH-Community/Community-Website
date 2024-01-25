import to from "await-to-js"
import answer from '../../../models/answers'
import { ErrorHandler } from "../../../../helpers/error";
import constants from "../../../../constants";


export default async (req, res, next) => {
  const { answerId } = req.body;
  const [err] = await to(answer.updateOne({ _id: answerId }, { $inc: { upvotes: 1 } }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Answer has been upvoted',
  });
  return next();
};
