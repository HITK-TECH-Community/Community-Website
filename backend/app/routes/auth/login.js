const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { generateJWT } = require('../../../helpers/middlewares/auth');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  const userRecord = await Admin.findOne({ email });
  if (!userRecord) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Invalid login credentials',
      user: email,
      errStack: 'Auth Login',
    });
    next(error);
  } else {
    const correctPassword = await argon2.verify(
      userRecord.passwordHash,
      password
    );
    if (!correctPassword) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Invalid login credentials',
        user: email,
        errStack: 'Auth Login',
      });
      next(error);
    }
  }
  req.body.data = generateJWT(req.body);
  res.status(200).send(req.body);
};
