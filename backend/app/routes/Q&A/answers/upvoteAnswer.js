const to = require('await-to-js').default;
const answer = require('../../../models/answers');
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');
const { getVoteCookieName } = require('../../../../helpers/middlewares/cookie');

module.exports = async (req, res, next) => {
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

  res.cookie(getVoteCookieName('answer', answerId), true, { maxAge: 20 * 365 * 24 * 60 * 60 * 1000,sameSite:"none",secure:true });

  res.status(200).send({
    message: 'Answer has been upvoted',
  });
  return next();
};
