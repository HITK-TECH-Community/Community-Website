/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, subject, text) => {
  const msg = {
    to: to,
    from: { name: 'HITK Tech Community', email: process.env.SENDGRID_EMAIL },
    subject,
    html: text,
  };

  sgMail.send(msg, (err, result) => {
    if (err) {
      return err;
    }
  });
};

module.exports = sendEmail;
