const teamMemberModel = require('../../models/TeamMember');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res, next) => {
  try {
    const payload = res.locals.decode;
    const memberId = req.body.memberId;

    if (payload.isSuperAdmin === false) {
      return res.status(401).json({ error: 'You are not an admin' });
    }

    const member = await teamMemberModel.findById(memberId);
    if (!member) {
      return res.status(401).json({ error: 'Invalid id' });
    }

    const result = await teamMemberModel.findByIdAndDelete(memberId);
    if (!result) {
      return res.status(401).json({ error: 'Invalid id' });
    }

    const fileName = path.basename(member.image);
    const imagePath = path.join(__dirname, '../../../uploads/teamMembersProfile/', fileName);
    fs.unlink(imagePath, (err) => console.log(err));

    return res.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Some internal server error' });
  }
};
