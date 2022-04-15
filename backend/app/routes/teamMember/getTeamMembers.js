const to = require('await-to-js').default;
const TeamMemberModel = require('../../models/TeamMember');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');


module.exports = async (req, res, next) => {
  const [err, members] = await to(TeamMemberModel.find());

  if (err) {
    const errOptions = {
      statusCode: 500,
      message: 'Mongo Error: Fetching failed',
      errStack: err,
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, errOptions);
    return next(error);
  }

  return res.json(members);
}
