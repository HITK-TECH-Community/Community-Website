const nodemailer = require('nodemailer');
const Admin = require('../../models/Admin');
const config = require('../../../config');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const { generateJWT } = require('../../../helpers/middlewares/auth');
const { resetPasswordMailTemplate } = require('../../../utility/emailTemplates');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    type: 'SMTP',
    host: config.EMAIL_HOST,
    secure: true,
    debug: true,
    port: 465,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
  });
  const userRecord = await Admin.findOne({ email });
  console.log(userRecord)
  if (!userRecord) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Invalid email',
      user: email,
      errStack: 'User not found',
    });
    next(error);
    return false;
  }

  // Setting EMAIL as the token payload
  const JWTPayload = { email };
  const token = await generateJWT(JWTPayload, constants.JWT_RESET_PASSWORD_EXPIRES_IN);
  const data = {
    adminName: `${userRecord.firstName} ${userRecord.lastName}`,
    url: `${config.FRONTEND_URL}/forgot-password/${token}`,
  };
  const mailOptions = {
    from: `HITK TECH Community <${config.EMAIL_USER}>`,
    to: email,
    subject: 'Reset Password | HITK TECH Community',
    html: resetPasswordMailTemplate(data),
  };
  await transporter.sendMail(mailOptions).catch((err) => {
    if (err) {
      const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
        statusCode: 500,
        message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
        errStack: err,
        user: email,
      });
      throw error;
    }
  });
  // Sending the reset password URL as a response (http://localhost:3500/:token)
  res.status(200).send({
    success: 'Reset mail sent',
    resetPasswordURL: `${config.FRONTEND_URL}/forgot-password/${token}`,
  });
  return next();
};
