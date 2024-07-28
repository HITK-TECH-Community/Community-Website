const fs = require('fs');
const path = require('path');
const teamMemberModel = require('../../models/TeamMember');

module.exports = async (req, res) => {
  try {
    const payload = res.locals.decode;
    const { memberId } = req.body;
    if (payload.isSuperAdmin === false) {
      return res.status(401).json({ error: 'You are not an admin' });
    }
    const result = await teamMemberModel.findByIdAndDelete(memberId);
    if (!result) {
      return res.status(401).json({ error: 'Invalid id' });
    }
    if (result?.image) {
      const fileName = path.basename(result.image);
      const imagePath = path.join(__dirname, '../../../uploads/teamMembersProfile/', fileName);
      fs.unlink(imagePath, (err) => console.log(err));
    }
    return res.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Some internal server error' });
  }
};
