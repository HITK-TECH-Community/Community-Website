/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
const to = require('await-to-js').default;
const faq = require('../../models/faq');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const Admin = require('../../models/Admin');

module.exports = async (req, res, next) => {
  // eslint-disable-next-line prefer-destructuring
  const userId = req.body.userId;
  const faqId = req.body.faqId;
  if (!userId || !faqId) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `You don't have the required permissions`,
      errStack: '',
    });
    return next(error);
  }
  // eslint-disable-next-line no-unused-vars
  const [err, response] = await to(Admin.findById(userId));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `You don't have the required permissions`,
      errStack: err,
    });
    return next(error);
  }
  const [err2, response2] = await to(faq.findByIdAndDelete(faqId));
  if (err2) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `Faq doesn't exist`,
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'FAQ deleted successfully',
  });
  return next();
};
