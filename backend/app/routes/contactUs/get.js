const to = require('await-to-js').default;
const contactUs = require('../../models/contactUs');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const payload = res.locals.decode;
  if (!payload.isSuperAdmin) {
    return res.status(401).json({ error: 'You are not authorized to perform this action' });
  }
  const [err, response] = await to(contactUs.find());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    ContactUs: response,
  });
  return next();
};
