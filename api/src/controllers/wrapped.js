const express = require("express");
const passport = require("passport");
const router = express.Router();
const moment = require("moment");
const WrappedModel = require("../models/wrapped");
const EventModel = require("../models/event");
const CalendarModel = require("../models/calendar");
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");

router.post("/search", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { user_id } = req.body;
    // Users can only search their own wrappeds
    const query = { user_id: req.user._id.toString() };

    const data = await WrappedModel.find(query).sort({ year: -1 });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.get("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await WrappedModel.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!data) return res.status(404).send({ ok: false, code: ERROR_CODES.NOT_FOUND });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/generate", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { year } = req.body;
    if (!year) return res.status(400).send({ ok: false, code: ERROR_CODES.INVALID_BODY });

    const userEmail = req.user.email;
    const userId = req.user._id.toString();

    // 1. Find the primary calendar
    // Strategy: Look for calendar with summary === user.email (standard Google behavior for primary)
    // Fallback: Look for any calendar where user is owner? For now, stick to summary matching email as requested.
    // The user query said: "calendar that has the user.email adress as calendar.summary"
    const calendar = await CalendarModel.findOne({ user_id: userId, summary: userEmail });

    if (!calendar) {
      // If strictly following the rule, we might fail here.
      // But let's try to find a calendar that *looks* like the primary one if exact match fails?
      // Or just return error. The prompt was specific.
      return res.status(404).send({
        ok: false,
        code: "PRIMARY_CALENDAR_NOT_FOUND",
        message: "Could not find a calendar with summary matching your email.",
      });
    }

    // 2. Fetch events for that year
    const startOfYear = moment(`${year}-01-01`).startOf("year").toDate();
    const endOfYear = moment(`${year}-12-31`).endOf("year").toDate();

    const events = await EventModel.find({
      user_id: userId,
      calendar_id: calendar._id,
      "start.dateTime": { $gte: startOfYear, $lte: endOfYear },
      status: { $ne: "cancelled" }, // Exclude cancelled
    });

    if (events.length === 0) {
      return res.status(400).send({ ok: false, code: "NO_EVENTS_FOUND", message: `No events found for ${year}` });
    }

    // 3. Compute Stats
    let totalDurationMs = 0;
    let totalEvents = 0;

    const weeksMap = {}; // key: weekNumber, value: { count, durationMs, start, end }
    let earliest = null; // { event, timeValue }
    let latest = null; // { event, timeValue }
    let longest = null; // { event, duration }

    const attendeesMap = {}; // email -> { count, duration, name }

    // Persona counters
    let gamingKeywords = 0;
    let sportKeywords = 0;
    let workKeywords = 0;

    for (const event of events) {
      if (!event.start || !event.start.dateTime) continue; // Skip all-day events for now if they don't have time

      const duration = event.duration || 0;
      totalDurationMs += duration;
      totalEvents++;

      // Weekly intensity
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

      // Time analysis (Earliest/Latest)
      // We care about time of day. e.g. 08:30 vs 23:00.
      const timeStr = eventDate.format("HH:mm");
      const timeValue = parseInt(eventDate.format("HHmm"));

      if (!earliest || timeValue < earliest.timeValue) {
        earliest = { event, timeValue, timeStr };
      }
      if (!latest || timeValue > latest.timeValue) {
        latest = { event, timeValue, timeStr };
      }

      // Longest
      if (!longest || duration > longest.duration) {
        longest = { event, duration };
      }

      // Attendees
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

      // Persona keywords
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
      if (summaryLower.includes("work") || summaryLower.includes("meet") || summaryLower.includes("sync"))
        workKeywords++;
    }

    // Process Aggregates
    const weeksArray = Object.values(weeksMap).map((w) => ({
      ...w,
      hours: Math.round(w.durationMs / (1000 * 60 * 60)),
    }));
    // Sort by intensity (duration)
    weeksArray.sort((a, b) => b.durationMs - a.durationMs);
    const intenseWeeks = weeksArray.slice(0, 3);

    const topPeopleArray = Object.values(attendeesMap).map((p) => ({
      ...p,
      hours: Math.round(p.durationMs / (1000 * 60 * 60)),
    }));
    topPeopleArray.sort((a, b) => b.durationMs - a.durationMs);
    const topPeople = topPeopleArray.slice(0, 5);

    // Persona Logic
    let persona = "Balanced Bee";
    if (gamingKeywords > totalEvents * 0.1) persona = "Gamer";
    else if (sportKeywords > totalEvents * 0.1) persona = "Sport Addict";
    else if (totalDurationMs > 40 * 52 * 1000 * 60 * 60)
      persona = "Workaholic"; // More than 40h/week avg? Maybe too high bar.
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
            duration: Math.round(longest.duration / (1000 * 60)), // Minutes
            date: longest.event.start.dateTime,
          }
        : null,
      topPeople,
      persona,
    };

    // Update or Create
    const wrapped = await WrappedModel.findOneAndUpdate({ user_id: userId, year }, wrappedData, {
      new: true,
      upsert: true,
    });

    return res.status(200).send({ ok: true, data: wrapped });
  } catch (error) {
    capture(error);
    console.error(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
