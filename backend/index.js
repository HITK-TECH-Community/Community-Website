require('dotenv').config();
const to = require('await-to-js').default;
const http = require('http');
const { ErrorHandler } = require('./helpers/error');
const constants = require('./constants');
const cronJob = require('./utility/cronJob');
const cluster = require('./helpers/cluster');
const joinUs = require('./app/models/joinUs');
const contactUs = require('./app/models/contactUs');
const sendEmail = require('./utility/sendEmail');
const {
  JoinUsCronJobMailTemplate,
  ContactUsCronJobMailTemplate,
} = require('./utility/emailTemplates');
const Admin = require('./app/models/Admin');

cronJob('0 0 2 * *', async (req, res, next) => {
  try {
    await joinUs.deleteMany({});
    const [err, response] = await to(Admin.find().select('email username'));
    if (err) {
      const error = new ErrorHandler(constants.ERRORS.DATABASE, {
        statusCode: 500,
        message: 'Database Error',
        errStack: err,
      });
      return next(error);
    }

    try {
      response.map(async (adminUser) => {
        await sendEmail(
          adminUser.email,
          'Notification : Join Us Data Removed',
          JoinUsCronJobMailTemplate(adminUser.username)
        );
      });
    } catch (e) {
      const error = new ErrorHandler(constants.ERRORS.EMAIL, {
        statusCode: 500,
        message: 'Sendgrid Error',
        errStack: e,
      });
      return next(error);
    }
  } catch (err) {
    return err;
  }
  return next();
});

// Running Contact Us cronjob after every 2 months - 0 0 2 * *
cronJob('0 0 2 * *', async (req, res, next) => {
  try {
    await contactUs.deleteMany({});
    const [err, response] = await to(Admin.find().select('email username'));
    if (err) {
      const error = new ErrorHandler(constants.ERRORS.DATABASE, {
        statusCode: 500,
        message: 'Database Error',
        errStack: err,
      });
      return next(error);
    }

    try {
      response.map(async (adminUser) => {
        await sendEmail(
          adminUser.email,
          'Notification : Contact Us Data Removed',
          ContactUsCronJobMailTemplate(adminUser.username)
        );
      });
    } catch (e) {
      const error = new ErrorHandler(constants.ERRORS.EMAIL, {
        statusCode: 500,
        message: 'Sendgrid Error',
        errStack: e,
      });
      return next(error);
    }
  } catch (err) {
    return err;
  }
  return next();
});

if (cluster().isMaster) return;

const app = require('./app');
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3500');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      break;
    default:
      console.error(error);
  }
  throw error;
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

  console.log(
    `Server running in ${process.env.ENV || 'development'} mode on ${bind} for worker ${process.pid}`.brightYellow
      .underline.bold
  );
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

module.exports = app;
