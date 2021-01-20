const to = require('await-to-js').default;
const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  if (oldPassword === newPassword) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'New password cannot be identical to Old password',
      user: res.locals.decode.email,
      errStack: 'Password change',
    });
    return next(error);
  }

  const userRecord = await Admin.findOne({
    email: res.locals.decode.email,
  });

  const isPasswordCorrect = await argon2.verify(
    userRecord.passwordHash,
    oldPassword
  );

  if (!isPasswordCorrect) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Wrong old password',
      user: userRecord.email,
      errStack: 'Password change',
    });
    return next(error);
  }

  const hashedPassword = await argon2.hash(newPassword);

  const [err] = await to(
    Admin.findOneAndUpdate(
      { email: userRecord.email },
      { $set: { passwordHash: hashedPassword } },
    )
  );

  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: userRecord.email,
    });
    return next(error);
  }

  const response = userRecord.email;
  res.status(200).send(response);
  return next();
};
