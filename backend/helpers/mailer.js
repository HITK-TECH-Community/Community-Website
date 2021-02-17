const nodemailer = require("nodemailer");
const config = require("../config");
const gettemplates = require("./emailTemplates");

module.exports = sendEmail;

async function sendEmail({ to, from = config.smtpOptions.auth.user, name, link, tempname}) {
    var template = gettemplates(name, link);
    var subject = template[tempname].SUBJECT;
    var html = template[tempname].BODY;
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html});
}