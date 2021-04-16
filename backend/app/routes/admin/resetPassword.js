const to = require('await-to-js').default;
const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const { verifyToken } = require('../../../helpers/middlewares/auth');

module.exports = async (req, res, next) => {
  // Extracting the new password from the request
  const { newPassword } = req.body;
  // Extracting the TOKEN from URl /resetpassword/:token
  const { token } = req.params;

  // Verifying the token and extracting the email from the payload
  const [verifyTokenErr, verifiedToken] = await to(verifyToken(token));

  if (verifyTokenErr) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Invalid token',
      user: null,
      errStack: 'Reset Password',
    });
    next(error);
    return false;
  }

  const { email } = verifiedToken;

  // Hashing the new password
  const hashedPassword = await argon2.hash(newPassword);

  // Finding and updating the admin password
  const [err] = await to(Admin.findOneAndUpdate({ email }, { passwordHash: hashedPassword }, { new: true }));

  // Throwing error in admin not found
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Something went wrong',
      user: email,
      errStack: 'Reset Password',
    });
    next(error);
    return false;
  }

  // Returning success response
  next();
  return res.status(200).send({ message: 'Reset Password Successful' });
};
