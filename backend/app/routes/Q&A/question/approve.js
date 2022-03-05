const question = require('../../../models/question');

module.exports = (req, res, next) => {
  try {
    let questionId = req.body.questionId; //getting question id from body
    question.findOne({ _id: questionId }).then((question) => {
      if (!question) {
        return res.status(404).json({ error: 'question id not found' });
      }
      question.isApproved = req.body.isApproved;
      question.save().then((question) => {
        return res.status(200).json(question);
      });
    });
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may question id not valid' });
  }
};
