const urlExists = require('url-exists');
const { nanoid } = require('nanoid');
const config = require('../../../config');
const Url = require('../../models/Url');
const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
module.exports = async (req, res, next) => {
  const { longUrl } = req.body;
  const baseUrl = config.baseUrl;
  urlExists(longUrl, async (er, exists) => {
    if (exists) {
      let [err, url] = await to(Url.findOne({ longUrl: longUrl }));
      if (url) res.json(url);
      if (!url) {
        const urlCode = nanoid(5);
        const shortUrl = baseUrl + '/' + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode: urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
      if (err) {
        const error = new ErrorHandler(constants.ERRORS.INPUT, {
          statusCode: 500,
          message: 'Server Error',
        });
        next(error);
        return false;
      }
    } else {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 401,
        message: 'Invalid long url',
      });
      next(error);
      return false;
    }
  });
};
