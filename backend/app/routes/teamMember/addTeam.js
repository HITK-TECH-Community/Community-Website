const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const TeamMemberModel = require('../../models/TeamMember');

module.exports = async (req, res, next) => {
  const payload = res.locals.decode;
  if (payload.isSuperAdmin === false) {
    res.status(401).json({ error: 'You are not an admin' });
  }

  const { fullName, description, linkedinUrl, githubUrl, twitterUrl, teams } = req.body;
  const teammember = new TeamMemberModel({
    full_name: fullName,
    image: req.file?.path,
    description,
    linkedin_url: linkedinUrl,
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
