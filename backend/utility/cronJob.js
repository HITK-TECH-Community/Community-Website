
import cron from "node-cron"

const cronJob = (time, fnc) => {
  cron.schedule(time, fnc);
};

export default cronJob;
