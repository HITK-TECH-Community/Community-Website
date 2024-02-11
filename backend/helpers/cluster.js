const cluster = require('cluster');
const os = require('os');

module.exports = () => {
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

      return { isMaster: true };
    }
    // else it's a worker. continue.
    console.log(`Worker ${process.pid} started`);
    return { isMaster: false };
  }
  console.log('Starting app in non-cluster mode. (To start in cluster mode, pass CLUSTER=yes in config file)');
  return { isMaster: false };
};
