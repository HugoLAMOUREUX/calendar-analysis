const UserObject = require("../models/user");
const { syncCalendars } = require("../services/google");
const { capture } = require("../services/sentry");

const syncCalendarsCron = async () => {
  try {
    console.log("Running daily sync cron at 2am...");

    // Get 10 users with google_refresh_token, sorted by last_calendar_sync_at (oldest first)
    const users = await UserObject.find({ google_refresh_token: { $exists: true, $ne: null } })
      .sort({ last_calendar_sync_at: 1 })
      .limit(10);

    console.log(`Found ${users.length} users to sync.`);

    for (const user of users) {
      try {
        console.log(`Syncing calendars for user: ${user.email}`);
        await syncCalendars(user);
      } catch (error) {
        console.error(`Failed to sync calendars for user ${user.email}:`, error.message);
        capture(error);
      }
    }

    console.log("Daily sync cron finished.");
  } catch (error) {
    console.error("Cron error:", error);
    capture(error);
  }
};

module.exports = { syncCalendarsCron };
