const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

const limit = constants.PAGINATION_LIMIT.GET_BROADCASTS;

const getBroadcastsAggregate = (startIndex, match) => {
  const pipeline = [
    {
      $project: {
        _id: 1,
        title: 1,
        imageUrl: 1,
        link: 1,
        content: 1,
        tags: 1,
        expiresOn: 1,
        createdAt: 1,
        updatedAt: 1,
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' },
      },
    },
    { $match: match },
    { $unset: ['year', 'month'] },
    { $sort: { createdAt: -1 } },
    { $skip: startIndex },
    { $limit: limit },
  ];
  return pipeline;
};
module.exports = async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const tags = req.query.tags?.split(',');
  const year = parseInt(req.query.year, 10);
  const month = parseInt(req.query.month, 10);
  // match for filtering
  const match = {};
  if (tags) {
    match.tags = { $in: tags };
  }
  if (year) {
    match.year = year;
  }
  if (month) {
    match.month = month;
  }
  const startIndex = (page - 1) * limit;
  let results = {};
  const [err, broadcasts] = await to(Broadcast.aggregate(getBroadcastsAggregate(startIndex, match)).exec());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Fetching Failed',
      errStack: err,
    });
    return next(error);
  }
  results = broadcasts.slice(0, limit);
  res.status(200).json(results);
  return next();
};
