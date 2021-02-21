// const urlExists = require('url-exists');
const { nanoid } = require('nanoid');
const to = require('await-to-js').default;
const urlExists = require('url-exists');
const config = require('../../../config');
const Url = require('../../models/tinyURL');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { longURL } = req.body;
  const { baseURL } = config;
  urlExists(longURL, (_err, exists) => {
    if (!exists) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Bad Request',
      });
      return next(error);
    }
    return exists;
  });
  const urlCode = nanoid(5);
  const shortURL = `${baseURL}/${urlCode}`;
  const setData = {
    longURL,
    shortURL,
    urlCode,
    date: new Date(),
  };
  const [err, url] = await to(
    Url.findOneAndUpdate({ longURL }, { $setOnInsert: setData }, { new: true, upsert: true })
  );
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 500,
      message: 'Server Error',
      errStack: err,
    });
    return next(error);
  }
  return res.json(url);
};
