const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { firstName, lastName, contact, username } = req.body;
  const userRecord = await Admin.findOne({
    email: res.locals.decode.email,
  });

  if (username === userRecord.username) {
    return res.status(400).send({ error: 'Username already exists' });
  }

  const [err] = await to(
    Admin.findOneAndUpdate({ email: userRecord.email }, { $set: { firstName, lastName, contact, username } })
  );

  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Updation Failed',
      errStack: err,
      user: userRecord.email,
    });
    return next(error);
  }

  const response = {
    email: userRecord.email,
    ...req.body,
  };
  res.status(201).send(response);
  return next();
};
