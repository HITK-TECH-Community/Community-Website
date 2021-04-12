require('dotenv').config();
const cluster = require('cluster');
const os = require('os');

if (process.env.CLUSTER === 'yes') {
  const numCPUs = os.cpus().length;

  if (cluster.isMaster) {
    console.log(`Starting app in cluster mode with ${numCPUs} workers`);
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`);
      console.log('starting new worker');
      cluster.fork();
    });

    return;
  }
  // else it's a worker. continue.
  console.log(`Worker ${process.pid} started`);
} else {
  console.log('Starting app in non-cluster mode. (To start in cluster mode, pass CLUSTER=yes in config file)');
}

const http = require('http');
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
  console.log(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
