// const urlExists = require('url-exists');
import nanoid from "nanoid"
import to from "await-to-js"
import urlExists from "url-exists"
import config from "../../../config";
import Url from '../../models/tinyURL'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";


export default async (req, res, next) => {
  const { longURL } = req.body;
  const { BASE_URL } = config;
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
  const shortURL = `${BASE_URL}/${urlCode}`;
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
