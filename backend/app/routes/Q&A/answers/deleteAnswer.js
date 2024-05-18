const mongoose = require('mongoose');
const Answer = require('../../../models/answers');

module.exports = async (req, res, next) => {
  try {
    const payload = res.locals.decode;
    const { answerId } = req.body;

    if (!payload.isSuperAdmin) {
      return res.status(401).json({ error: 'You are not authorized to perform this action' });
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
      return res.status(400).json({ error: 'Invalid answer ID' });
    }

    const answer = await Answer.findByIdAndDelete(answerId);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }

    return res.status(200).json({ message: 'Answer deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
