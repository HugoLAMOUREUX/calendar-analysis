const express = require("express");
const passport = require("passport");
const router = express.Router();
const CalendarModel = require("../models/calendar");
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");
const { syncCalendars } = require("../services/google");

router.get("/", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await CalendarModel.find({ user_id: req.user._id }).sort({ created_at: -1 });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.get("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const data = await CalendarModel.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!data) return res.status(404).send({ ok: false, code: ERROR_CODES.NOT_FOUND });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/search", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { search, limit = 10, page = 1, _id } = req.body;
    let query = { user_id: req.user._id.toString() };

    if (_id) query._id = _id;

    if (search) {
      query.$or = [{ summary: { $regex: search, $options: "i" } }, { description: { $regex: search, $options: "i" } }];
    }

    const offset = (page - 1) * limit;
    const total = await CalendarModel.countDocuments(query);
    const data = await CalendarModel.find(query).sort({ created_at: -1 }).skip(offset).limit(limit);

    return res.status(200).send({ ok: true, data, total });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/sync", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    syncCalendars(req.user).catch((error) => capture(error));
    return res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
