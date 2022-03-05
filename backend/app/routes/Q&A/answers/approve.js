const answer = require('../../../models/answers');

module.exports = (req, res, next) => {
  try {
    let answerId = req.body.answerId; //getting answer id from body
    answer.findOne({ _id: answerId }).then((answer) => {
      if (!answer) {
        return res.status(404).json({ error: 'answer id not found' });
      }
      answer.isApproved = req.body.isApproved;
      answer.save().then((answer) => {
        return res.status(200).json(answer);
      });
    });
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may answer id not valid' });
  }
};
