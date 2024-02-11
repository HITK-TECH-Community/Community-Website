
import to from "await-to-js"
import TeamMemberModel from '../../models/TeamMember'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";



export default async (req, res, next) => {
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
