const to = require('await-to-js').default;
const Testimonial = require('../../models/Testimonial');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const [err, testimonial] = await to(Testimonial.findByIdAndDelete(req.params.id));
  if (!testimonial) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: "Testimonial doesn't exist",
    });
    return next(error);
  }
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Deletion Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Testimonial deleted successfully',
  });
  return next();
};
