const question = require('../../../models/question');

module.exports = async (req, res) => {
  try {
    const { questionId } = req.params; // Getting question id from body
    const result = await question.findOne({ _id: questionId }); // Find the question corresponding to the given id
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may question id not valid' });
  }
};
