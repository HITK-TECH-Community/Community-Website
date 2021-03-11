const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { firstName, lastName, contact, username } = req.body;
  // Finding user through email which needs to be updated

  // Checking which fields are present and making changes to the present field

  // Updating the document with updated data
  // validation
  const userbody = {
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    ...(contact && { contact }),
    ...(username && { username }),
  };

  console.log(userbody);
  const [user, err] = await to(Admin.findOneAndUpdate({ email: res.locals.decode.email }, userbody));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: res.locals.decode.email,
    });
    return next(error);
  }
  res.json(user);
  // eslint-disable-next-line no-underscore-dangle
  return next();
};
