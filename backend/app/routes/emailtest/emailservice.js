const sendEmail = require('../../../helpers/mailer');

module.exports = {
    sendVerificationEmail
}
async function sendVerificationEmail(fromEmail, toEmail) {
    await sendEmail({
        from : fromEmail,
        to: toEmail
    });
}