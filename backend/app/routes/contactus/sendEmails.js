const { ErrorHandler } = require('../../../helpers/error');
const { sendEmail } = require('../../../helpers/emailService');
const constants = require('../../../constants');

module.exports = async (req, res, emails, next) => {
  const data = { ...req.body };

  try {
    emails.map(async (item) => {
      const response = await sendEmail(item.email, data, 'USER-CONTACT-US-FORM');
      return response;
    });
  } catch (err) {
    if (err) {
      const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
        statusCode: '500',
        message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
        errorStack: err,
      });
      return next(error);
    }
  }

  return 'Responses Sent';
};
