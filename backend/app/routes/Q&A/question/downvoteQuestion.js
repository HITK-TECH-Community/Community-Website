import to from "await-to-js"
import question from '../../../models/question';
import { ErrorHandler } from "../../../../helpers/error";
import constants from "../../../../constants";


export default async (req, res, next) => {
  const { questionId } = req.body;
  const [err] = await to(
    question.updateOne({ _id: questionId }, [
      {
        $set: {
          upvotes: {
            $cond: [
              {
                $gt: ['$upvotes', 0],
              },
              {
                $subtract: ['$upvotes', 1],
              },
              0,
            ],
          },
        },
      },
    ])
  );
  if (err) {
    console.log(err);
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Question has been down voted',
  });
  return next();
};
