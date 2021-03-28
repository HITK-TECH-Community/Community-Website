const to = require('await-to-js').default;
const ContactUs = require('../../models/ContactUs');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
// TODO:const { sendEmail } = require('../../../helpers/emailService');

module.exports = async (req, res, next) => {
  const contactusData = {
    ...req.body,
  };

  const [err, contactUsResponse] = await to(ContactUs.create(contactusData));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: req.body.email,
    });
    return next(error);
  }

  // TODO:SEND EMAIL TO ALL ADMINS

  // eslint-disable-next-line no-underscore-dangle
  const responseDoc = { ...contactUsResponse._doc };
  res.status(200).send({
    status: 'Success, Your response has been submitted',
    name: responseDoc.name,
    email: responseDoc.email,
    subject: responseDoc.subject,
    message: responseDoc.message,
  });
  return next();
};
