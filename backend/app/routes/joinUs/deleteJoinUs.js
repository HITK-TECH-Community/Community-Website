const joinUsModel = require('../../models/joinUs');
module.exports = async(req,res,next) => {
    try {
        const id = req.body.itemId
        const result = await joinUsModel.findByIdAndDelete(id);
        if(!result) {
            return res.json({error:"Invalid id"});
        }
        return res.json({message : "Deleted successfully"})
        

    }
    catch(err) {
        return res.json({error: "Some internal server error"});
    }
}
