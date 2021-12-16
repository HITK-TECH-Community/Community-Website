const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const JoinUs = require('../../models/joinUs');

module.exports = async (req, res, next) => {
  const [err] = await to(JoinUs.create({ ...req.body }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Request Submitted Successfully',
  });
  return next();
};
  