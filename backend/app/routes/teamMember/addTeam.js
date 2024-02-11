import to from "await-to-js"
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";
import TeamMemberModel from '../../models/TeamMember'


export default async (req, res, next) => {
  const payload = res.locals.decode;
  if (payload.isSuperAdmin === false) {
    res.status(401).json({ error: 'You are not an admin' });
  }

  const { fullName, description, linkedlinUrl, githubUrl, twitterUrl, teams } = req.body;
  const teammember = new TeamMemberModel({
    full_name: fullName,
    image: req.file.path,
    description,
    linkedlin_url: linkedlinUrl,
    github_url: githubUrl,
    twitter_url: twitterUrl,
    teams,
  });

  const [err, result] = await to(teammember.save());
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });
    return next(error);
  }

  res.status(200).json({ result });
  return next();
};
