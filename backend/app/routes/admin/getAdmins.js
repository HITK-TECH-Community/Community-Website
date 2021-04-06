const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

const getAdminsAggregate = (match, page) => {
  const pipeline = [
    { $match: match },
    {
      $project: {
        _id: 0,
        firstName: 1,
        lastName: 1,
        username: 1,
        email: 1,
        contact: 1,
        isSuperAdmin: 1,
      },
    },
    { $skip: constants.PAGINATION_LIMIT.GET_ADMINS * (Number(page) - 1) },
    { $limit: constants.PAGINATION_LIMIT.GET_ADMINS },
  ];
  return pipeline;
};

module.exports = async (req, res, next) => {
  const page = req.query.page || 1;
  const adminType = req.query.type;
  let match = {};
  if (adminType) {
    match = {
      isSuperAdmin: adminType === 'superAdmin',
    };
  }
  const [err, response] = await to(Admin.aggregate(getAdminsAggregate(match, page)));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      errorStack: err,
    });
    return next(error);
  }
  res.status(200).send(response);
  return next();
};
