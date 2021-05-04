const mongoose = require('mongoose');
const config = require('../config');

function connect() {
  mongoose.connect(config.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: 'communityWebsite',
  });
  mongoose.Promise = Promise;

  // Database connection events
  // When successfully connected
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open for worker ${process.pid}`.brightCyan.underline.bold);
  });

  // If the connection throws an error
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose default connection disconnected for worker ${process.pid}`);
  });

  // If the Node process ends, close the Mongoose and Redis connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      // eslint-disable-next-line no-process-exit
      process.exit();
    });
  });
}

module.exports = connect();
