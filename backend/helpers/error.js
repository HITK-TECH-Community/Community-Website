const utils = require('./utils');

class ErrorHandler extends Error {
  constructor(errorType, error) {
    super();
    this.errorType = errorType;
    this.statusCode = utils.replaceWithStrInObj(error, 'statusCode', 500);
    this.message = utils.replaceWithBlankStrInObj(error, 'message');
    this.user = utils.replaceWithBlankStrInObj(error, 'user');
    this.errStack = utils.replaceWithBlankStrInObj(error, 'errStack');
  }
}

const errorHandler = (err, _req, res, _next) => {
  res.status(err.statusCode).json(err);
};

module.exports = { ErrorHandler, errorHandler };
