const { google } = require("googleapis");
const CalendarModel = require("../models/calendar");
const EventModel = require("../models/event");
const config = require("../config");
const { emitToUser } = require("./socket");
const { createWrapped } = require("../utils/createWrapped");

function getOAuth2Client(user) {
  const oauth2Client = new google.auth.OAuth2(config.GOOGLE_OAUTH_CLIENT_ID, config.GOOGLE_OAUTH_CLIENT_SECRET);
  oauth2Client.setCredentials({
    access_token: user.google_access_token,
    refresh_token: user.google_refresh_token,
  });

  oauth2Client.on("tokens", async (tokens) => {
    if (tokens.refresh_token) {
      user.google_refresh_token = tokens.refresh_token;
    }
    if (tokens.access_token) {
      user.google_access_token = tokens.access_token;
    }
    await user.save();
  });

  return oauth2Client;
}

async function syncCalendars(user) {
  if (!user.google_access_token) return;

  emitToUser(user._id.toString(), "sync_progress", {
    status: "fetching_calendars",
    message: "Fetching your calendars...",
  });

  const oauth2Client = getOAuth2Client(user);

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });
  const { data } = await calendar.calendarList.list();

  // Update or create calendars instead of deleting all
  const insertedCalendars = [];
  if (data.items && data.items.length > 0) {
    emitToUser(user._id.toString(), "sync_progress", {
      status: "processing_calendars",
      message: `Processing ${data.items.length} calendars...`,
    });

    for (const item of data.items) {
      const calendarData = {
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
      };

      try {
        const cal = await CalendarModel.findOneAndUpdate(
          { user_id: user._id.toString(), google_id: item.id },
          calendarData,
          {
            upsert: true,
            new: true,
          },
        );
        insertedCalendars.push(cal);
      } catch (e) {
        console.error(`Failed to upsert calendar ${item.summary}:`, e.message);
      }
    }

    // After adding/updating calendars, sync events for each one
    let i = 1;
    for (const cal of insertedCalendars) {
      try {
        emitToUser(user._id.toString(), "sync_progress", {
          status: "syncing_events",
          message: `Syncing events for calendar ${i}/${insertedCalendars.length}: ${cal.summary}`,
          current: i,
          total: insertedCalendars.length,
        });
        await syncCalendarEvents(user, cal._id);
        i++;
      } catch (e) {
        console.error(`Failed to sync events for calendar ${cal.summary} during initial sync:`, e.message);
      }
    }
  }

  // Update user last sync
  user.last_calendar_sync_at = new Date();
  await user.save();

  emitToUser(user._id.toString(), "sync_progress", { status: "completed", message: "Synchronization complete!" });
}

async function syncWrappedCalendarAndGenerateWrapped(user) {
  if (!user.google_access_token) return;

  emitToUser(user._id.toString(), "sync_progress", {
    status: "fetching_calendars",
    message: "Fetching your calendars...",
  });

  const oauth2Client = getOAuth2Client(user);
  const calendarApi = google.calendar({ version: "v3", auth: oauth2Client });
  const { data } = await calendarApi.calendarList.list();

  let wrappedCalendar = null;

  if (data.items && data.items.length > 0) {
    emitToUser(user._id.toString(), "sync_progress", {
      status: "processing_calendars",
      message: `Identifying wrapped calendar...`,
    });

    for (const item of data.items) {
      const calendarData = {
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
      };

      const cal = await CalendarModel.findOneAndUpdate(
        { user_id: user._id.toString(), google_id: item.id },
        calendarData,
        {
          upsert: true,
          new: true,
        },
      );

      if (item.summary === user.email) {
        wrappedCalendar = cal;
      }
    }

    if (wrappedCalendar) {
      emitToUser(user._id.toString(), "sync_progress", {
        status: "syncing_events",
        message: `Syncing events for your wrapped calendar: ${wrappedCalendar.summary}`,
        current: 1,
        total: 1,
      });
      await syncCalendarEvents(user, wrappedCalendar._id);

      // Generate Wrapped automatically after sync
      try {
        emitToUser(user._id.toString(), "sync_progress", {
          status: "generating_wrapped",
          message: "Generating your 2025 Wrapped...",
        });
        await createWrapped(user, 2025, wrappedCalendar._id);
      } catch (e) {
        console.error("Failed to auto-generate wrapped after sync:", e.message);
      }
    }
  }

  // Update user last sync
  user.last_calendar_sync_at = new Date();
  await user.save();

  emitToUser(user._id.toString(), "sync_progress", { status: "completed", message: "Synchronization complete!" });
}

async function syncCalendarEvents(user, calendarId) {
  if (!user.google_access_token) return;

  const oauth2Client = getOAuth2Client(user);

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

        const start = new Date(item.start?.dateTime || item.start?.date);
        const end = new Date(item.end?.dateTime || item.end?.date);
        const duration = end.getTime() - start.getTime();

        return {
          user_id: user._id.toString(),
          user_name: user.name,
          user_avatar: user.avatar,
          calendar_id: cal._id.toString(),
          google_calendar_id: cal.google_id,
          google_id: item.id,
          name,
          sub_name,
          duration,
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
      // We use google_calendar_id to ensure we delete events even if the internal calendar_id changed in the past
      await EventModel.deleteMany({ user_id: user._id.toString(), google_calendar_id: cal.google_id });

      await EventModel.insertMany(eventsToCreate, { ordered: false });
    }
  } catch (e) {
    if (e.code !== 11000) {
      console.error(`Error fetching events for calendar ${cal.google_id}:`, e.message);
    }
  }

  // Update calendar last sync
  cal.last_synced_at = new Date();
  cal.last_event_synced_at = new Date();
  await cal.save();
}

module.exports = {
  syncCalendars,
  syncCalendarEvents,
  syncWrappedCalendarAndGenerateWrapped,
};
