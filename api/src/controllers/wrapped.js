const express = require("express");
const passport = require("passport");
const router = express.Router();
const moment = require("moment");
const WrappedModel = require("../models/wrapped");
const EventModel = require("../models/event");
const CalendarModel = require("../models/calendar");
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");
const { syncWrappedCalendarAndGenerateWrapped } = require("../services/google");
const { createWrapped } = require("../utils/createWrapped");

router.post("/sync", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    syncWrappedCalendarAndGenerateWrapped(req.user).catch((error) => capture(error));
    return res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

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
    const { year, calendarId } = req.body;
    if (!year) return res.status(400).send({ ok: false, code: ERROR_CODES.INVALID_BODY });

    const wrapped = await createWrapped(req.user, year, calendarId);

    return res.status(200).send({ ok: true, data: wrapped });
  } catch (error) {
    if (error.message === "PRIMARY_CALENDAR_NOT_FOUND") {
      return res.status(404).send({
        ok: false,
        code: "PRIMARY_CALENDAR_NOT_FOUND",
        message: "Could not find a calendar with summary matching your email.",
      });
    }
    if (error.message === "NO_EVENTS_FOUND") {
      return res
        .status(400)
        .send({ ok: false, code: "NO_EVENTS_FOUND", message: `No events found for ${req.body.year}` });
    }

    capture(error);
    console.error(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
