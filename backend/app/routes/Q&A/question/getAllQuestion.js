import question from '../../../models/question'

export default async (req, res) => {
  try {
    const questions = {}; // Empty object filter which matches all the documents

    const allquestions = await question.find(questions); // Passing questions as a filter in the find method

    return res.json(allquestions);
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error' });
  }
};
