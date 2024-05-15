const teamMemberModel = require('../../models/TeamMember');
module.exports = async(req,res,next) => {
    try {
        const payload = res.locals.decode;
        const memberId = req.body.memberId;
        if (payload.isSuperAdmin === false) {
            return res.status(401).json({ error: 'You are not an admin' });
        }
        const result = await teamMemberModel.findByIdAndDelete(memberId);
        if(!result) {
            return res.status(401).json({error:"Invalid id"});
        }
        return res.json({message:"Deleted successfully"});
    }
    catch(error) {
        return res.status(500).json({error:"Some internal server error"});
    }

}
