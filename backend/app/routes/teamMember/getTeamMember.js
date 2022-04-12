const TeamMemberModel = require('../../models/TeamMember');


module.exports = async (req, res, next) => {
    try {
        const memberId = req.params.id;
        const member = await TeamMemberModel.findById(memberId);
        if (!member) {
            return res.status(404).json({ error: 'Not found' });
        }
        return res.json({ member });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
