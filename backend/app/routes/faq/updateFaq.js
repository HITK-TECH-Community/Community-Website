const FAQS = require('../../models/faq');

module.exports = async (req, res) => {
  try {
    const { faqId } = req.body;
    const faq = await FAQS.findById(faqId);
    if (faq == null) {
      return res.json({ message: 'invalid id' });
    }

    const updatedFaq = {
      question: req.body.question,
      answer: req.body.answer,
      isActive: req.body.isActive,
      tags: req.body.tags,
    };
    FAQS.findByIdAndUpdate(faqId, { $set: updatedFaq }, { new: true }, (err, faqq) => {
      if (err) return res.status(500).send({ error: err });
      return res.status(200).send({ message: 'FAQ updated successfully', response: faqq });
    });
  } catch (err) {
    return res.status(500).json({ error: 'some went wrong' });
  }
  return null;
};
