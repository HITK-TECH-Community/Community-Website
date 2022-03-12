const question = require('../../../models/question');
const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req, res, next) => {
  let questionId = req.body.questionId;
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
};
