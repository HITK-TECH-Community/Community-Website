const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const responseTime = require('response-time');
const routes = require('./app/routes');
const { errorHandler } = require('./helpers/error');
require('colors');
require('./helpers/dbConnection');

const app = express();

// Set security headers
app.use(helmet());

// CORS
app.use(cors());

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
