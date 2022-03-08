const question = require('../../../models/question');

module.exports = async (req, res, next) => {
  try {
    let questionId = req.body.questionId; //getting question id from body
    const result = await question.findOne({ _id: questionId }); //find the question corresponding to the given id
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may question id not valid' });
  }
};
