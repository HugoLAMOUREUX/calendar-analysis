const { google } = require("googleapis");
const CalendarModel = require("../models/calendar");
const EventModel = require("../models/event");
const config = require("../config");

async function syncCalendars(user) {
  if (!user.google_access_token) return;

  const oauth2Client = new google.auth.OAuth2(config.GOOGLE_OAUTH_CLIENT_ID, config.GOOGLE_OAUTH_CLIENT_SECRET);
  oauth2Client.setCredentials({
    access_token: user.google_access_token,
    refresh_token: user.google_refresh_token,
  });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  const { data } = await calendar.calendarList.list();

  // Delete all existing calendars for this user
  await CalendarModel.deleteMany({ user_id: user._id });

  // Bulk create new calendars
  if (data.items && data.items.length > 0) {
    const calendarsToCreate = data.items.map((item) => ({
      user_id: user._id.toString(),
      user_name: user.name,
      user_avatar: user.avatar,
      google_id: item.id,
      etag: item.etag,
      summary: item.summary,
      description: item.description,
      timeZone: item.timeZone,
      accessRole: item.accessRole,
      backgroundColor: item.backgroundColor,
      foregroundColor: item.foregroundColor,
      colorId: item.colorId,
      kind: item.kind,
      conferenceProperties: item.conferenceProperties,
      defaultReminders: item.defaultReminders,
      last_synced_at: new Date(),
    }));
    await CalendarModel.insertMany(calendarsToCreate, { ordered: false });

    // After adding calendars, sync events for each one
    const newCalendars = await CalendarModel.find({ user_id: user._id });
    for (const cal of newCalendars) {
      try {
        await syncCalendarEvents(user, cal._id);
      } catch (e) {
        console.error(`Failed to sync events for calendar ${cal.summary} during initial sync:`, e.message);
      }
    }
  }

  // Update user last sync
  user.last_calendar_sync_at = new Date();
  await user.save();
}

async function syncCalendarEvents(user, calendarId) {
  if (!user.google_access_token) return;

  const oauth2Client = new google.auth.OAuth2(config.GOOGLE_OAUTH_CLIENT_ID, config.GOOGLE_OAUTH_CLIENT_SECRET);
  oauth2Client.setCredentials({
    access_token: user.google_access_token,
    refresh_token: user.google_refresh_token,
  });

  const calendarApi = google.calendar({ version: "v3", auth: oauth2Client });

  const cal = await CalendarModel.findById(calendarId);
  if (!cal) return;

  try {
    let allEvents = [];
    let pageToken = "";

    while (pageToken !== undefined) {
      const { data } = await calendarApi.events.list({
        calendarId: cal.google_id,
        timeMin: new Date(Date.now() - 100 * 365 * 24 * 60 * 60 * 1000).toISOString(),
        timeMax: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000).toISOString(),
        singleEvents: true,
        orderBy: "startTime",
        maxResults: 2500,
        pageToken: pageToken || undefined,
      });

      if (data.items && data.items.length > 0) {
        allEvents = allEvents.concat(data.items);
      }
      pageToken = data.nextPageToken;
    }

    if (allEvents.length > 0) {
      const eventsToCreate = allEvents.map((item) => {
        const parts = (item.summary || "").split("-");
        const name = parts[0]?.trim();
        const sub_name = parts.slice(1).join("-").trim() || undefined;

        return {
          user_id: user._id.toString(),
          user_name: user.name,
          user_avatar: user.avatar,
          calendar_id: cal._id.toString(),
          google_calendar_id: cal.google_id,
          google_id: item.id,
          name,
          sub_name,
          kind: item.kind,
          etag: item.etag,
          status: item.status,
          htmlLink: item.htmlLink,
          created: item.created,
          updated: item.updated,
          summary: item.summary,
          description: item.description,
          location: item.location,
          colorId: item.colorId,
          creator: item.creator,
          organizer: item.organizer,
          start: item.start,
          end: item.end,
          endTimeUnspecified: item.endTimeUnspecified,
          recurrence: item.recurrence,
          recurringEventId: item.recurringEventId,
          originalStartTime: item.originalStartTime,
          transparency: item.transparency,
          visibility: item.visibility,
          iCalUID: item.iCalUID,
          sequence: item.sequence,
          attendees: item.attendees,
          attendeesOmitted: item.attendeesOmitted,
          extendedProperties: item.extendedProperties,
          hangoutLink: item.hangoutLink,
          conferenceData: item.conferenceData,
          gadget: item.gadget,
          anyoneCanAddSelf: item.anyoneCanAddSelf,
          guestsCanInviteOthers: item.guestsCanInviteOthers,
          guestsCanModify: item.guestsCanModify,
          guestsCanSeeOtherGuests: item.guestsCanSeeOtherGuests,
          privateCopy: item.privateCopy,
          locked: item.locked,
          reminders: item.reminders,
          source: item.source,
          workingLocationProperties: item.workingLocationProperties,
          outOfOfficeProperties: item.outOfOfficeProperties,
          focusTimeProperties: item.focusTimeProperties,
          attachments: item.attachments,
          birthdayProperties: item.birthdayProperties,
          eventType: item.eventType,
          last_synced_at: new Date(),
        };
      });

      // Delete all existing events for this specific calendar only AFTER we have the new data
      await EventModel.deleteMany({ calendar_id: cal._id });

      await EventModel.insertMany(eventsToCreate, { ordered: false });
    }
  } catch (e) {
    if (e.code !== 11000) {
      console.error(`Error fetching events for calendar ${cal.google_id}:`, e.message);
    }
  }

  // Update calendar last sync
  cal.last_synced_at = new Date();
  await cal.save();
}

module.exports = {
  syncCalendars,
  syncCalendarEvents,
};
