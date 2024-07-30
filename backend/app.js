const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const responseTime = require('response-time');
const routes = require('./app/routes');
const { errorHandler } = require('./helpers/error');
const cookieParser = require('cookie-parser');
require('colors');
require('./helpers/dbConnection');

const app = express();

// Making uploads folder public
app.use(express.static('uploads'));
// Set security headers
app.use(helmet());

// cookie
app.use(cookieParser());

// CORS
// app.use(cors());
app.use(cors({credentials:true,origin:process.env.FRONTEND_URL}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

// Body Parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Response time
app.use(responseTime({ suffix: false }));


// Use routes
app.use('/', routes);

// Response handler
// app.use(handleResponse);

// Home route
app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello There!! You are at Community-website Backend' });
});

// Error handling middleware
app.use(errorHandler);

// handle the error safely
process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = app;
