import to from "await-to-js"
import mongoose from "mongoose";
import Answer from '../../../models/answers'
import { ErrorHandler } from "../../../../helpers/error";
import constants from "../../../../constants";


export default async (req, res, next) => {
  const qId = req.body.question_id;

  const [err, answers] = await to(
    Answer.aggregate([{ $match: { question_id: mongoose.Types.ObjectId(qId) } }, { $sort: { upvotes: -1 } }])
  );

  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    num: Object.keys(answers).length,
    data: answers,
  });
  return next();
};
