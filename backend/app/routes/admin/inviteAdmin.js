const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const { sendEmail } = require('../../../helpers/emailService');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { email, data } = req.body;
  const type = 'INVITE-ADMIN';
  const [err] = await to(sendEmail(email, data, type));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      user: res.locals.decode.email,
      errorStack: err,
    });
    return next(error);
  }
  res.status(200).send({ message: 'Email successfully sent' });
  return next();
};
