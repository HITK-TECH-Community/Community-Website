const to = require('await-to-js').default;
const FAQ = require('../../models/faq');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const Admin = require('../../models/Admin');

module.exports = async (req, res, next) => {
  const userId = req.body.userId;
  const faqId = req.body.faqId;
  const [err, response] = await to(Admin.findById(userId));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'No Admin',
      errStack: err,
    });
    return next(error);
  }
  const [err2, response2] = await to(FAQ.findByIdAndDelete(faqId));
  if (err2) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'No FAQ found',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'FAQ deleted successfully',
  });
  return next();
};
