const { sign } = require('jsonwebtoken');
const Admin = require('../../models/Admin');
const config = require('../../../config');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const userRecord = await Admin.findOne({ email });
  if (!userRecord) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Invalid login credentials',
      user: email,
      errStack: 'Auth Login',
    });
    next(error);
    return false;
  }

  // Generating a JWT token with the expiration period of 1hr (60 min)
  const generateJWT = (payload) =>
    sign(payload, config.JWT_SECRET_KEY, { expiresIn: config.JWT_RESET_PASSWORD_EXPIRES_IN });

  // Setting EMAIL as the token payload
  const JWTPayload = { email };

  const token = generateJWT(JWTPayload);

  // Sending the reset password URL as a response (http://localhost:3500/:token)
  res.status(200).send({
    resetPasswordURL: `${config.LOCAL_DEV_ENV}${token}`,
  });
  return next();
};
