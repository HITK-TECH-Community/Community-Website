const to = require('await-to-js').default;
const ContactUs = require('../../models/ContactUs');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const getAdmins = require('./getAdmins');
const sendEmails = require('./sendEmails');

module.exports = async (req, res, next) => {
  const contactusData = {
    ...req.body,
  };

  const [err, response] = await to(ContactUs.create(contactusData));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: req.body.email,
    });
    return next(error);
  }

  const getAdminEmails = await getAdmins(req, res, next);

  await sendEmails(req, res, getAdminEmails, next);

  res.status(200).send({
    message: 'Your request has been submitted!',
    your_response: response,
  });
  return next();
};
