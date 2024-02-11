const to = require('await-to-js').default;
const TeamMemberModel = require('../../models/TeamMember');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');


module.exports = async (req, res, next) => {
  const memberId = req.params.id;
  const [err, member] = await to(TeamMemberModel.findById(memberId));

  if (err) {
    const errOptions = {
      statusCode: 500,
      message: 'Mongo Error: Fetching failed',
      errStack: err,
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, errOptions);
    return next(error);
  }

  if (!member) {
    const errOptions = {
      statusCode: 404,
      message: `Resource Not Found: No team member with id ${memberId}`,
      errStack: err,
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, errOptions);
    return next(error);
  }

  return res.json(member);
}
