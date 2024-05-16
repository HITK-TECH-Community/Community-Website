const to = require('await-to-js').default;
const mongoose = require('mongoose');
const Answer = require('../../../models/answers');
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req, res, next) => {
  const qId = req.params.questionId;

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
