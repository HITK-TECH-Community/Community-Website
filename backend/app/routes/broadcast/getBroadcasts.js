const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  if (!page || !limit) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Input Error: Fetching Failed',
    });
    return next(error);
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit,
    };
  }
  if (endIndex < (await Broadcast.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit,
    };
  }
  const [err, broadcasts] = await to(Broadcast.find().limit(limit).skip(startIndex).exec());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  results.results = broadcasts;
  res.status(200).json(results);
  return next();
};
