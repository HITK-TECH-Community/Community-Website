// const config = require('./variables.json');
require('dotenv').config();

const config = {
  "MONGO_DB_URL": process.env.MONGODBURL,
  "JWT_SECRET_KEY": process.env.JWTSECRETKEY,
  "JWT_EXPIRES_IN" : process.env.JWTEXPIRESIN,
  "baseURL" : process.env.BASEURL,
}

module.exports = config;
