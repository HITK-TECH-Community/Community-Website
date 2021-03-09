const nodemailer = require('nodemailer');

const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, SENDER_EMAIL } = require('../config/index');
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

module.exports.sendEmail = async (email, type) => {
  const { subject, text } = getMailTemplate(type);
  const mailOptions = {
    from: SENDER_EMAIL,
    to: email,
    subject,
    text,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};
