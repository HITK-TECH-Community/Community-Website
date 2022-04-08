const joinUsModel = require('../../models/joinUs');

module.exports = async (req, res, next) => {
  try {
    const joinRequests = await joinUsModel.find();
    res.status(200).json(joinRequests);
  } catch (err) {
    next(err);
  }
};
