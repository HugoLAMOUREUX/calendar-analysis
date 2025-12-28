const express = require("express");
const passport = require("passport");
const router = express.Router();
const EventModel = require("../models/event");
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");
const { syncEvents } = require("../services/google");

// Middleware to sync events if needed
const syncMiddleware = async (req, res, next) => {
  try {
    await syncEvents(req.user);
    next();
  } catch (error) {
    capture(error);
    next();
  }
};

router.get("/", passport.authenticate("user", { session: false }), syncMiddleware, async (req, res) => {
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

router.post("/search", passport.authenticate("user", { session: false }), syncMiddleware, async (req, res) => {
  try {
    const { search, calendar_id, limit = 10, page = 1 } = req.body;
    let query = { user_id: req.user._id.toString() };

    if (calendar_id) query.calendar_id = calendar_id;
    if (search) {
      query.$or = [{ summary: { $regex: search, $options: "i" } }, { description: { $regex: search, $options: "i" } }];
    }

    const offset = (page - 1) * limit;
    const total = await EventModel.countDocuments(query);
    const data = await EventModel.find(query).sort({ "start.dateTime": -1 }).skip(offset).limit(limit);

    return res.status(200).send({ ok: true, data, total });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
