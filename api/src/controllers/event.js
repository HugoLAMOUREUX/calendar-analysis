const express = require("express");
const passport = require("passport");
const router = express.Router();
const EventModel = require("../models/event");
const CalendarModel = require("../models/calendar");
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");
const { syncCalendarEvents } = require("../services/google");

router.get("/", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await EventModel.find({ user_id: req.user._id }).sort({ "start.dateTime": -1 });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.get("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await EventModel.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!data) return res.status(404).send({ ok: false, code: ERROR_CODES.NOT_FOUND });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/search", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { search, calendar_id, status, startAfter, startBefore, limit = 10, page = 1 } = req.body;
    let query = { user_id: req.user._id.toString() };

    if (calendar_id && calendar_id.length > 0)
      query.calendar_id = Array.isArray(calendar_id) ? { $in: calendar_id } : calendar_id;
    if (status && status.length > 0) query.status = Array.isArray(status) ? { $in: status } : status;

    if (startAfter || startBefore) {
      query["start.dateTime"] = {};
      if (startAfter) query["start.dateTime"].$gte = new Date(startAfter);
      if (startBefore) query["start.dateTime"].$lte = new Date(startBefore);
    }

    if (search) {
      query.$or = [{ summary: { $regex: search, $options: "i" } }, { description: { $regex: search, $options: "i" } }];
    }

    console.log(query);
    const offset = (page - 1) * limit;
    const total = await EventModel.countDocuments(query);
    const data = await EventModel.find(query).sort({ "start.dateTime": -1 }).skip(offset).limit(limit);

    return res.status(200).send({ ok: true, data, total });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/:id/sync", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    await syncCalendarEvents(req.user, req.params.id);
    return res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
