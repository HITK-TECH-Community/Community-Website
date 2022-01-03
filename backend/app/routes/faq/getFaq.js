const to = require('await-to-js').default;
const FAQ = require('../../models/faq');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const [err, response] = await to(FAQ.find());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    Faq: response,
  });
  return next();
};
