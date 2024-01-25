import to from "await-to-js"
import argon2 from "argon2"
import Admin from '../../models/Admin'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";
import { verifyToken } from "../../../helpers/middlewares/auth";

export default async (req, res, next) => {
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
