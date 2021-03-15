const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const { verifyToken } = require('../../../helpers/middlewares/auth');

module.exports = async (req, res, next) => {
  // Extracting the new password from the request
  const { newPassword } = req.body;
  try {
    // Extracting the TOKEN from URl /forgotpassword/:token
    const { token } = req.params;

    // Verifying the token and extracting the email from the payload
    const verifiedToken = await verifyToken(token);
    const { email } = verifiedToken;

    // Finding the admin that email
    const userRecord = await Admin.findOne({ email });

    // Throwing error in admin not found
    if (!userRecord) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Something went wron',
        user: email,
        errStack: 'Reset Password',
      });
      next(error);
      return false;
    }

    // Hashing the new password
    const hashedPassword = await argon2.hash(newPassword);

    // Updating the new password and saving it to the database
    userRecord.set({ passwordHash: hashedPassword });
    await userRecord.save();

    // Returning success response
    return res.status(200).send({ message: 'Reset Password Successful' });
  } catch (err) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Invalid token',
      user: null,
      errStack: 'Reset Password',
    });
    next(error);
    return false;
  }
};
