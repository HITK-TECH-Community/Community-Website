const to = require("await-to-js").default;
const Subscriber = require('../../models/Subscriber');
const { ErrorHandler } = require('../../../helpers/error')
const constants = require('../../../constants');
const nodemailer = require('nodemailer')
const config = require('../../../config')
const { welcomeSubscriberMailTemplate } = require('../../../utility/emailTemplates')

module.exports = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    type: 'SMTP',
    host: config.EMAIL_HOST,
    secure: true,
    debug: true,
    port: 465,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
  });
  const [err, response] = await to(Subscriber.create({ ...req.body }));
  if (err) {
    if (err.code === 11000) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Bad request: Email already registered',
        user: req.body.email,
      });
      return next(error);
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    return next(error);
  }
  const mailOptions = {
    from: `HITK TECH Community <${config.EMAIL_USER}>`,
    to: req.body.email,
    subject: 'Welcome to the HITK TECH Community newsletter 😍',
    html: welcomeSubscriberMailTemplate(),
  };
  await transporter.sendMail(mailOptions).catch((err) => {
    if (err) {
      const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
        statusCode: 500,
        message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
        errStack: err,
        user: req.body.email,
      });
      throw error;
    }
  });
  res.status(200).send({
    message: 'Subscribed Successfully',
    response: response,
  });
  return next();
};