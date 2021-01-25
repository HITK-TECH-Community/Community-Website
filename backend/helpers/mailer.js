const nodemailer = require("nodemailer");
const config = require("../config");
const templates = require("./sendmail")

module.exports = sendEmail;

async function sendEmail({ to, subject = templates.INVITE_ADMIN.SUBJECT, html = templates.INVITE_ADMIN.BODY, from}) {
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html});
}