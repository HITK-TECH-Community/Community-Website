const cron = require('node-cron');

const cronJob = (time, fnc) => {
  cron.schedule(time, fnc);
};

module.exports = cronJob;
