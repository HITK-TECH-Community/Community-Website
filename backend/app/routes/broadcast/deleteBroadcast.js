const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const [err, broadcast] = await to(Broadcast.findByIdAndDelete(req.params.id));
  if (!broadcast) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: "Broadcast doesn't exist",
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
    message: 'Broadcast deleted successfully',
  });
  return next();
};
