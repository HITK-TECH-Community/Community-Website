const question = require('../../../models/question');

// eslint-disable-next-line no-unused-vars
module.exports = async (req, res, next) => {
  try {
    const { questionId } = req.body; // getting question id from body
    const result = await question.findOne({ _id: questionId }); // find the question corresponding to the given id
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may question id not valid' });
  }
};
