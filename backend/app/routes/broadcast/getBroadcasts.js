const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

const limit = constants.PAGINATION_LIMIT.GET_BROADCASTS;

const getBroadcastsAggregate = (startIndex, match) => {
  const pipeline = [
    { $match: match },
    {
      $project: {
        _id: 1,
        title: 1,
        // imageUrl: 1,
        // link: 1,
        // content: 1,
        // tags: 1,
        // expiresOn: 1,
        createdAt: 1,
        // updatedAt: 1,
      },
    },
    { $sort: { createdAt: -1 } },
    { $skip: startIndex && startIndex - 1 },
    { $limit: startIndex ? limit + 2 : limit + 1 },
  ];
  return pipeline;
};
module.exports = async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  // match for tag filtering
  const match = req.query.tags ? { tags: { $in: req.query.tags.split(',') } } : {};
  const startIndex = (page - 1) * limit;
  const results = {};
  const [err, broadcasts] = await to(Broadcast.aggregate(getBroadcastsAggregate(startIndex, match)).exec());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  // check if previous page exists
  if (startIndex > 0) {
    [results.previous] = broadcasts;
  }
  // check if next page exists
  if (startIndex === 0 || broadcasts.length === limit + 2) {
    results.next = broadcasts.slice(-1);
  }
  // current broadcasts
  results.results = startIndex ? broadcasts.slice(1, limit + 1) : broadcasts.slice(0, limit);
  res.status(200).json(results);
  return next();
};
