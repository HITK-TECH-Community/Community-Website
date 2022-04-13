const TeamMemberModel = require('../../models/TeamMember');


module.exports = async (req, res, next) => {
    try {
        const members = await TeamMemberModel.find();
        return res.json(members);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
