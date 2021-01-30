const validurl = require('valid-url');
const shortid = require('shortid');
const url = require('url');
const config = require('../../../config');
const Url = require('../../models/Url');
module.exports = async (req, res) => {
  console.log(req);
  const { longUrl } = req.body;
  const baseUrl = config.baseUrl;
  console.log(longUrl);
  console.log(baseUrl);
  // Check base url
  if (!validurl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }
  //Creating url code
  const urlCode = shortid.generate();
  //Check long url
  if (validurl.isUri(longUrl)) {
    console.log('present');
    try {
      let url = await Url.findOne({ longUrl: longUrl });
      if (url) {
        console.log('present');
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode.substring(0, 5);
        url = new Url({
          longUrl,
          shortUrl,
          urlCode: urlCode.substring(0, 5),
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server error');
    }
  } else {
    //if longurl is not valid
    res.status(401).json('Invalid long url');
  }
};
