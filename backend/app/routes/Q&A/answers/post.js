const to = require('await-to-js').default;
const answer = require('../../../models/answers');
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req, res, next) => {
  const [err, body] = await to(answer.create({ ...req.body }));

  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Answer has been added',
    id: body._id,
  });

  return next();
};
