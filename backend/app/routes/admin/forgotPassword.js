const Admin = require('../../models/Admin');
const config = require('../../../config');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const { generateJWT } = require('../../../helpers/middlewares/auth');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const userRecord = await Admin.findOne({ email });
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

  // Sending the reset password URL as a response (http://localhost:3500/:token)
  res.status(200).send({
    resetPasswordURL: `${config.LOCAL_DEV_ENV}admin/resetpassword/${token}`,
  });
  return next();
};
