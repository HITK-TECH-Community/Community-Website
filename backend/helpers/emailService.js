const nodemailer = require('nodemailer');
const to = require('await-to-js').default;
const ejs = require('ejs');
const { ErrorHandler } = require('./error');
const constants = require('../constants');
const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST } = require('../config/index');
const { getMailTemplate } = require('../utility/emailTemplates');

const transporter = nodemailer.createTransport({
  type: 'SMTP',
  host: EMAIL_HOST,
  secure: true,
  debug: true,
  port: 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

module.exports.sendEmail = async (email, data, type) => {
  const template = getMailTemplate(type);
  const { subject } = template;
  let { text } = template;
  text = ejs.render(text, data);
  const mailOptions = {
    from: EMAIL_USER,
    bcc: email,
    subject,
    text,
  };
  const [err, response] = await to(transporter.sendMail(mailOptions));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      errStack: err,
      user: email,
    });
    throw error;
  }
  return response;
};
