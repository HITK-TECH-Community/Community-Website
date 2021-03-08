const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const routes = require('./app/routes');
const { errorHandler } = require('./helpers/error');
require('colors');
require('./helpers/dbConnection');
require('dotenv').config();

const app = express();
const server = http.Server(app);

// Set security headers
app.use(helmet());

// CORS
app.use(cors());

// Body Parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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

// Start the server
const PORT = process.env.PORT || 3500;
server.listen(
  PORT,
  console.log(`Server running in ${process.env.ENV || 'development'} mode on port ${PORT}`.brightYellow.underline.bold)
);

// handle the error safely
process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = app;
