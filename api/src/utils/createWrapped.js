const moment = require("moment");
const WrappedModel = require("../models/wrapped");
const EventModel = require("../models/event");
const CalendarModel = require("../models/calendar");

async function createWrapped(user, year, calendarId = null) {
  const userEmail = user.email;
  const userId = user._id.toString();

  let calendar;
  if (calendarId) {
    calendar = await CalendarModel.findOne({ _id: calendarId, user_id: userId });
  } else {
    // Strategy: Look for calendar with summary === user.email (standard Google behavior for primary)
    calendar = await CalendarModel.findOne({ user_id: userId, summary: userEmail });
  }

  if (!calendar) {
    throw new Error("PRIMARY_CALENDAR_NOT_FOUND");
  }

  // Fetch events for that year
  const startOfYear = moment(`${year}-01-01`).startOf("year").toDate();
  const endOfYear = moment(`${year}-12-31`).endOf("year").toDate();

  const events = await EventModel.find({
    user_id: userId,
    calendar_id: calendar._id,
    "start.dateTime": { $gte: startOfYear, $lte: endOfYear },
    status: { $ne: "cancelled" },
  });

  if (events.length === 0) {
    throw new Error("NO_EVENTS_FOUND");
  }

  // Compute Stats
  let totalDurationMs = 0;
  let totalEvents = 0;

  const weeksMap = {};
  let earliest = null;
  let latest = null;
  let longest = null;

  const attendeesMap = {};

  let gamingKeywords = 0;
  let sportKeywords = 0;
  let workKeywords = 0;

  for (const event of events) {
    if (!event.start || !event.start.dateTime) continue;

    const duration = event.duration || 0;
    totalDurationMs += duration;
    totalEvents++;

    const eventDate = moment(event.start.dateTime);
    const weekNum = eventDate.week();
    if (!weeksMap[weekNum]) {
      weeksMap[weekNum] = {
        week: weekNum,
        hours: 0,
        count: 0,
        durationMs: 0,
        startDate: eventDate.clone().startOf("week").toDate(),
        endDate: eventDate.clone().endOf("week").toDate(),
      };
    }
    weeksMap[weekNum].durationMs += duration;
    weeksMap[weekNum].count++;

    const timeStr = eventDate.format("HH:mm");
    const timeValue = parseInt(eventDate.format("HHmm"));

    if (!earliest || timeValue < earliest.timeValue) {
      earliest = { event, timeValue, timeStr };
    }
    if (!latest || timeValue > latest.timeValue) {
      latest = { event, timeValue, timeStr };
    }

    if (!longest || duration > longest.duration) {
      longest = { event, duration };
    }

    if (event.attendees && event.attendees.length > 0) {
      for (const attendee of event.attendees) {
        if (attendee.email === userEmail || attendee.self) continue;
        if (!attendeesMap[attendee.email]) {
          attendeesMap[attendee.email] = {
            email: attendee.email,
            displayName: attendee.displayName || attendee.email,
            count: 0,
            durationMs: 0,
          };
        }
        attendeesMap[attendee.email].count++;
        attendeesMap[attendee.email].durationMs += duration;
      }
    }

    const summaryLower = (event.summary || "").toLowerCase();
    if (summaryLower.includes("game") || summaryLower.includes("play") || summaryLower.includes("discord"))
      gamingKeywords++;
    if (
      summaryLower.includes("gym") ||
      summaryLower.includes("sport") ||
      summaryLower.includes("run") ||
      summaryLower.includes("training")
    )
      sportKeywords++;
    if (summaryLower.includes("work") || summaryLower.includes("meet") || summaryLower.includes("sync")) workKeywords++;
  }

  const weeksArray = Object.values(weeksMap).map((w) => ({
    ...w,
    hours: Math.round(w.durationMs / (1000 * 60 * 60)),
  }));
  weeksArray.sort((a, b) => b.durationMs - a.durationMs);
  const intenseWeeks = weeksArray.slice(0, 3);

  const topPeopleArray = Object.values(attendeesMap).map((p) => ({
    ...p,
    hours: Math.round(p.durationMs / (1000 * 60 * 60)),
  }));
  topPeopleArray.sort((a, b) => b.durationMs - a.durationMs);
  const topPeople = topPeopleArray.slice(0, 5);

  let persona = "Balanced Bee";
  if (gamingKeywords > totalEvents * 0.1) persona = "Gamer";
  else if (sportKeywords > totalEvents * 0.1) persona = "Sport Addict";
  else if (totalDurationMs > 40 * 52 * 1000 * 60 * 60) persona = "Workaholic";
  else if (workKeywords > totalEvents * 0.3) persona = "Workaholic";
  else if (totalEvents > 1000) persona = "Social Butterfly";

  const wrappedData = {
    user_id: userId,
    year,
    totalHours: Math.round(totalDurationMs / (1000 * 60 * 60)),
    totalEvents,
    intenseWeeks,
    earliestMeeting: earliest
      ? {
          summary: earliest.event.summary,
          date: earliest.event.start.dateTime,
          time: earliest.timeStr,
        }
      : null,
    latestMeeting: latest
      ? {
          summary: latest.event.summary,
          date: latest.event.start.dateTime,
          time: latest.timeStr,
        }
      : null,
    longestMeeting: longest
      ? {
          summary: longest.event.summary,
          duration: Math.round(longest.duration / (1000 * 60)),
          date: longest.event.start.dateTime,
        }
      : null,
    topPeople,
    persona,
  };

  const wrapped = await WrappedModel.findOneAndUpdate({ user_id: userId, year }, wrappedData, {
    new: true,
    upsert: true,
  });

  return wrapped;
}

module.exports = { createWrapped };
