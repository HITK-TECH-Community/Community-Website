const to = require("await-to-js").default;
const Subscriber = require('../../models/Subscriber');
const { ErrorHandler } = require('../../../helpers/error')
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const [err, response] = await to(Subscriber.create({ ...req.body }));
  if (err) {
    if (err.code === 11000) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Bad request: Email already registered',
        user: req.body.email,
      });
      return next(error);
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Subscribed Successfully',
    response: response,
  });
  return next();
};