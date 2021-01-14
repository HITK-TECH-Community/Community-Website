const sendEmail = require('../../../helpers/mailer');

module.exports = {
    sendVerificationEmail
}
async function sendVerificationEmail(email) {
    console.log("Workin!", email)
    await sendEmail({
        to: email
    });
}