const to = require('await-to-js').default;
const faq = require('../../models/faq');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { faqId } = req.body;
  const payload = res.locals.decode;
  if (!payload.isSuperAdmin) {
    return res.status(401).json({ error: 'You are not authorized to perform this action' });
  }
  if (!faqId) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: `You don't have the required permissions`,
      errStack: '',
    });
    return next(error);
  }
  const [err] = await to(faq.findByIdAndDelete(faqId));
  if (err) {
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
