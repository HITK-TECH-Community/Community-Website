const ShortLinkSchema = require('../../models/ShortLink');
const { errorHandler, ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants/');

module.exports = async (req, res, next) => {
  try {
    const { shorturl } = req.params;
    const doc = await ShortLinkSchema.findOne({ shortUrl: shorturl });

    // here is a catch. web server may get direct redirection request. or
    // the client (which is written in react) may access this route via
    // xmlhttprequest and handle the redirection part on client-side.

    // now, we have to find out if the http header `Accept` contains `json`
    // in it. if yes, simply send response as json
    const isReqXhr = res.xhr || req.headers.accept.indexOf('json') !== -1;

    const errMessage = 'requested URL could not be found';
    if (isReqXhr) {
      if (!doc) {
        throw new ErrorHandler(constants.ERRORS.NOTFOUND, {
          statusCode: 404,
          message: errMessage,
        });
      } else {
        res.json(doc);
      }
    } else {
      // otherwise, simply redirect the short URL to destination URL.
      if (!doc) {
        throw new ErrorHandler(constants.ERRORS.NOTFOUND, {
          statusCode: 404,
          message: errMessage,
        });
      } else {
        res.redirect(doc.url);
      }
    }

    // tip: if you are hosting front-end on netlify, set netlify redirect
    // rules to point to server domain.
  } catch (err) {
    const error = new ErrorHandler(err.errorType || constants.ERRORS.SERVER, {
      statusCode: err.statusCode || 500,
      message: err.message,
    });

    // be a good man and log the error for future reference. (why don't we
    // have a logger system setup, yet?????????)
    console.log(error);
    return errorHandler(error, req, res, next);
  }
};
