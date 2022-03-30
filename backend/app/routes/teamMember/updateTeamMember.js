const TeamMemberModel = require('../../models/TeamMember');

module.exports = async(req,res) => {
    try {
        const payload = res.locals.decode;
        let teamMember = await TeamMemberModel.findById(req.body.teamMemberId)
        if (payload.isSuperAdmin === false) {
            return res.status(401).json({ error: 'You are not an admin' });
        }
        if(teamMember == null) {
            return res.status(401).json({ error: 'team member not found' });
        }
        
        const updateData = {
            full_name: req.body.full_name,
            image: req.file.path,
            description: req.body.description,
            linkedin_url: req.body.linkedin_url,
            github_url: req.body.github_url,
            twitter_url: req.body.twitter_url,
            teams:req.body.teams,
        }
        const result = await TeamMemberModel.findByIdAndUpdate(req.body.teamMemberId,{$set:updateData},{new:true});

        return res.json({message:"updated successfully",response:result});
    }
    catch(err) {
        return res.status(500).json({error:"Some went wrong"});
    }
}