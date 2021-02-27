const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { firstName, lastName, contact, username } = req.body;

  Admin.findOne({ username }, async (error, userInfo) => {
    if (error) throw error;

    if (userInfo) {
      return res.status(400).send({ errorMessage: 'Username already exists' });
    }
    const userRecord = await Admin.findOne({
      email: res.locals.decode.email,
    });

    const [err] = await to(
      Admin.updateOne({ email: userRecord.email }, { $set: { firstName, lastName, contact, username } })
    );

    if (err) {
      const erro = new ErrorHandler(constants.ERRORS.DATABASE, {
        statusCode: 500,
        message: 'Mongo Error: Updation Failed',
        errStack: err,
        user: userRecord.email,
      });
      return next(erro);
    }

    const response = {
      email: userRecord.email,
      ...req.body,
    };

    res.status(201).send(response);
    return next();
  });
};
