//Getting resource modal
const Resource = require('../../models/resource');
//Getting resource handler
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  try {
    //Destructuring fields which are must
    const { name, email, url, trustLevel, expiryDate } = req.body;
    //If required fields are empty raising special error:
    if (!name || !email || !url || !trustLevel || !expiryDate) {
      const error = new ErrorHandler(constants.ERRORS.REQEMPTYFIELDS, {
        statusCode: 500,
        message: 'Required Fields Must Be Filled',
        user: req.body.email,
        errStack: 'Unable to post resource',
      });
      return next(error);
    }
    //If all important fields are provided going ahead with storing data in DB
    const newResource = await Resource.create({ ...req.body });
    //If data is not stored in DB, throwing DB error
    if (!newResource) {
      const error = new ErrorHandler(constants.ERRORS.DATABASE, {
        statusCode: 500,
        message: 'Database Error',
        user: req.body.email,
        errStack: 'Unable to post resource',
      });
      return next(error);
    }
    //Else sending data stored as response
    res.status(200).send(newResource);
    return next();
  } catch (e) {
    //If due to some reason data is not posted, User will get this message
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      user: req.body.email,
      errStack: 'Unable to post resource',
    });
    return next(error);
  }
};
