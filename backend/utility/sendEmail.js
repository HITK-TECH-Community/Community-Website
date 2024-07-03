const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");

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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL_ID_FOR_SENDING_MAIL,
      pass: process.env.EMAIL_PASS_FOR_NODEMAILER
  }
});

const SendEmailUsingNodeMailer = (to, subject, text) => {
  const mailoption = {
    from : { name: 'HITE-TECH' , email:process.env.EMAIL_ID_FOR_SENDING_MAIL},
    to : to,
    subject : subject,
    html: text
  }
  transporter.sendMail(mailoption, function(error, info){
    if(error){
      return error;
    }
  })
}

module.exports = {sendEmail, SendEmailUsingNodeMailer};
