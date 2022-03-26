const TeamMemberModel = require('../../models/TeamMember');

module.exports = async (req, res) => {
  console.log(req.file);
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
  const result = await teammember.save();
  return res.json({ result });
};
