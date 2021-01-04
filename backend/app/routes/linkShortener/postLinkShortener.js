const ShortLinkSchema = require('../../models/ShortLink');
const generateShortLink = require('./generateShortLink');
const { errorHandler, ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants/');

module.exports = async (req, res, next) => {
  // logic:
  // track if generated shortlink is unique using a flag
  // as long as the flag is false, keep calling generateShortLink

  let isUnique = false;

  while (!isUnique) {
    try {
      const shortUrl = generateShortLink();
      const doc = await new ShortLinkSchema({
        url: req.body.link,
        shortUrl,
      }).save();

      // the request must be a POST request, and client must understand JSON
      // response. there's no point in sending html as response because the
      // client-side will be handled by React.
      return res.json(doc);
    } catch (err) {
      if (err.code !== 11000) {
        // not a 'duplicate key' error. change `isUnique` to `true`...or
        // suffer from an inception of recursive calls
        isUnique = true;

        // be sure that something else went wrong. log the error. and send
        // an `internal server error` response

        const error = new ErrorHandler(
          err.errorType || constants.ERRORS.SERVER,
          { statusCode: err.statusCode || 500, message: err.message }
        );

        // be a good man and log the error for future reference. (why don't we
        // have a logger system setup, yet?????????)
        console.log(error);
        return errorHandler(error, req, res, next);
      }
    }
  }
};
