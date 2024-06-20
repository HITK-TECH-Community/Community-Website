const to = require('await-to-js').default;
const Testimonial = require('../../models/Testimonial');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const [err, { _id }] = await to(Testimonial.create({ ...req.body, image: req.file?.path }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Testimonial added successfully',
    id: _id,
  });
  return next();
};
