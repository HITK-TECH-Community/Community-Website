const answer = require('../../../models/answers');
const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req, res, next) => {
  let answerId = req.body.answerId;
  const [err] = await to(
    answer.updateOne({ _id: answerId }, [
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
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Answer has been down voted',
  });
};
