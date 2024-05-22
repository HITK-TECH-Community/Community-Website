const getVoteCookieName = (type, id) => `${type}_voted_${id}`;

const checkVoteCookie = (req, res, next) => {
  const { questionId, answerId } = req.body;
  const voteType = questionId ? 'question' : 'answer';
  const voteId = questionId || answerId;
  const voteCookieName = getVoteCookieName(voteType, voteId);

  if (req.cookies[voteCookieName]) {
    return res.status(400).json({ error: 'You have already voted' });
  }

  next();
};

module.exports = { checkVoteCookie, getVoteCookieName }