const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

const createPipeline = (adminType, page) => {
  const pipeline = [
    {
      $project: {
        _id: 0,
        firstName: '$firstName',
        lastName: '$lastName',
        username: '$username',
        email: '$email',
        contact: '$contact',
      },
    },
  ];
  if (adminType !== undefined) {
    pipeline.unshift({
      $match: {
        isSuperAdmin: adminType === 'superAdmin',
      },
    });
  }
  if (page !== undefined) {
    pipeline.push(
      { $skip: constants.PAGINATION_LIMIT.GET_ADMINS * Number(page) },
      { $limit: constants.PAGINATION_LIMIT.GET_ADMINS }
    );
  }
  return pipeline;
};

module.exports = async (req, res, next) => {
  const options = req.query;
  const { page, type: adminType } = options;

  const [err, response] = await to(
    Admin.aggregate(createPipeline(adminType, page))
  );
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: err.code,
      message: err.message,
    });
    return next(error);
  }

  // eslint-disable-next-line no-underscore-dangle
  res.status(200).send(response);
  return next();
};
