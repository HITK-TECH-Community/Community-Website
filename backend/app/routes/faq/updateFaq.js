const FAQ = require('../../models/faq');

module.exports = async(req,res,next) => {
    try {
        let faqId = req.body.faqId;
        let faq = await FAQ.findById(faqId);
        if(faq == null) {
            return res.json({message:"invalid id"});
        }
        
        const updatedFaq = {question:req.body.question,answer:req.body.answer,isActive:req.body.isActive,tags:req.body.tags};
        FAQ.findByIdAndUpdate(faqId,{$set:updatedFaq},{new:true},function(err,faq) {
            if (err) return res.status(500).send({error: err});
            return res.status(200).send({message:"FAQ updated successfully",response:faq});
        });
    }
    catch(err) {
       return res.status(500).json({error:"some went wrong"});
    }
}
