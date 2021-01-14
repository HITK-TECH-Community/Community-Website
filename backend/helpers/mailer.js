const nodemailer = require("nodemailer");

const config = require("../config/dev");
const templates = require("../config/sendmail")

module.exports = sendEmail;

async function sendEmail({ to, subject = templates.INVITE_ADMIN.SUBJECT, html = templates.INVITE_ADMIN.BODY, from = config.from }) {
    console.log(to,subject,from,html);
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html},function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ');
        }
      });
}