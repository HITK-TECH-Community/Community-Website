const mongoose = require('mongoose');
const Question = require('../../../models/question');
const Answer = require('../../../models/answers');

module.exports = async (req, res, next) => {
  try {
    const payload = res.locals.decode;
    const { questionId } = req.body;

    if (!payload.isSuperAdmin) {
      return res.status(401).json({ error: 'You are not authorized to perform this action' });
    }

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      return res.status(400).json({ error: 'Invalid question ID' });
    }

    const question = await Question.findByIdAndDelete(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    await Answer.deleteMany({ question_id: questionId });

    return res.status(200).json({ message: 'Question and its answers deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
