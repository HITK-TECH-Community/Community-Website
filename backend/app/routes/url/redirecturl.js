const Url = require('../../models/Url');

module.exports = async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    console.log(url);
    if (url) {
      return res.status(200).json({ url: url.longUrl });
    } else {
      return res.status(404).json('No url found');
    }
  } catch (error) {
    console.log(err);
    res.status(500).json('server error');
  }
};
