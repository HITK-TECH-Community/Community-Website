const nodemailer = require("nodemailer");
const config = require("../config");
const gettemplates = require("./emailTemplates");

module.exports = sendEmail;

async function sendEmail({ to, from = config.smtpOptions.auth.user, details, tempname}) {
    var template = gettemplates(details);
    var subject = template[tempname].SUBJECT;
    var html = template[tempname].BODY;
    console.log(subject, html);
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html});
}