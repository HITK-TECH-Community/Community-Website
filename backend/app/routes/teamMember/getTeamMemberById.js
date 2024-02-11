import to from "await-to-js";
import TeamMemberModel from '../../models/TeamMember'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";


export default async (req, res, next) => {
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
