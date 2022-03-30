const FAQ = require('../../models/faq');

module.exports = async(req,res,next) => {
    try {
        let faqId = req.body.faqId;
        console.log(faqId)
        let faq = await FAQ.findById(faqId);
        if(faq == null) {
            return res.json({message:"invalid id"});
        }
        console.log(faq)
        const updatedFaq = {question:req.body.question,answer:req.body.answer,isActive:req.body.isActive,tags:req.body.tags};
        console.log(updatedFaq)
        console.log(faqId);
        const result = await FAQ.findByIdAndUpdate(faqId,{$set:updatedFaq},{new:true});
        console.log(result)
        return res.json({message:"FAQ updated successfully",response:result});
    }
    catch(err) {
       return res.status(500).json({error:"some went wrong"});
    }
}