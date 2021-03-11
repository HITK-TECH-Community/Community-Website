const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const userRecord = await Admin.findOne({
    email: res.locals.decode.email,
  });

  // Finding user through email which needs to be updated
  const user = await Admin.findOne({ email: userRecord.email });

  // Checking which fields are present and making changes to the present field
  if (user) {
    user.username = req.body.username || user.username;
    user.contact = req.body.contact || user.contact;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.Name;
  }

  // Updating the document with updated data
  const [err] = await to(Admin.findOneAndUpdate({ email: userRecord.email }, user));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: user.email,
    });
    return next(error);
  }
  // eslint-disable-next-line no-underscore-dangle
  res.json(user);
  return next();
};
