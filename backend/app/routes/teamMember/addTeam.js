const teamMemberModel = require('../../models/TeamMember');
module.exports = async (req, res, next) => {
  console.log(req.file);
  let payload = req.payload;
  if (payload.isSuperAdmin == false) {
    res.status(401).json({ error: 'You are not an admin' });
  }

  const { full_name, description, linkedlin_url, github_url, twitter_url, teams } = req.body;
  const teammember = new teamMemberModel({
    full_name,
    image: req.file.path,
    description,
    linkedlin_url,
    github_url,
    twitter_url,
    teams,
  });
  const result = await teammember.save();
  return res.json({ result: result });
};
