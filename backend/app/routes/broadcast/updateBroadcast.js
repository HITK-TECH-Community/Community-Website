const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  if (Object.keys(req.body).length <= 1) {
    return res.status(200).send({
      message: 'Not Sufficient Data',
    });
  }

  const data = {
    ...req.body,
  };

  delete data.id;

  const [err, result] = await to(Broadcast.findOneAndUpdate({ _id: req.body.id }, { $set: data }));

  // error occured due to the some problem
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  // if result is null that means broadcast with given id is not exist in collection
  if (result === null) {
    const broadcastNotExistsError = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Broadcast Not Exist...',
    });

    return next(broadcastNotExistsError);
  }

  // success response
  res.status(200).send({
    message: 'Broadcast Updated...',
  });

  return next();
};
