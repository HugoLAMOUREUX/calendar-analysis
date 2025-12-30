const cron = require("node-cron");
const { syncCalendarsCron } = require("./syncCalendars");

// Schedule every day at 2am
cron.schedule("0 2 * * *", syncCalendarsCron);

console.log("Crons initialized");
