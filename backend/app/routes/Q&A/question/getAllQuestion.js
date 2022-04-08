const question = require('../../../models/question');

module.exports = async (req, res, next) => {
  try {
    let questions = {}; //Empty object filter which matches all the documents

    const allquestions = await question.find(questions); //passing questions as an filter in find method

    return res.json(allquestions);
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error' });
  }
};
