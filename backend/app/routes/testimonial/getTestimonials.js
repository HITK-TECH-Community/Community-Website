const to = require('await-to-js').default;
const Testimonial = require('../../models/Testimonial');
const constants = require('../../../constants');
const { ErrorHandler } = require('../../../helpers/error');

module.exports = async (req, res, next) => {
  const [err, response] = await to(Testimonial.find());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }

  res.status(200).json(response);
  return next();
};
