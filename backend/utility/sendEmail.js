const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, subject, text) => {
  const msg = {
    to,
    from: { name: 'HITK Tech Community', email: process.env.SENDGRID_EMAIL },
    subject,
    html: text,
  };

  sgMail.send(msg, (err, _result) => {
    if (err) {
      return err;
    }
    return _result;
  });
};

module.exports = sendEmail;
