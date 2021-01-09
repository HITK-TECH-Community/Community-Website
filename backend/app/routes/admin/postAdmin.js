const to = require('await-to-js').default;
const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const adminData = {
    ...req.body,
    isSuperAdmin: false,
  };
  adminData.passwordHash = await argon2.hash(adminData.password);
  delete adminData.password;

  // checking whether the loggedin user is a SuperAdmin or not
  const userLoggedIn = await Admin.findOne({ email: res.locals.decode.email });
  if (!userLoggedIn.isSuperAdmin) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Bad request: You are not a SuperAdmin',
      user: req.body.email,
    });
    return next(error);
  }

  const [err, user] = await to(Admin.create(adminData));
  if (err) {
    if (err.code === 11000) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Bad request: User already exists',
        user: req.body.email,
      });
      return next(error);
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: req.body.email,
    });
    return next(error);
  }
  // eslint-disable-next-line no-underscore-dangle
  const response = { ...user._doc };
  delete response.passwordHash;
  res.status(200).send(response);
  return next();
};
