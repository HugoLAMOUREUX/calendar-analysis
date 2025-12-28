const express = require("express");
const passport = require("passport");
const router = express.Router();
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");

router.get("/list/:calendarId", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { calendarId } = req.params;
    const { google_access_token } = req.user;

    if (!google_access_token) {
      return res.status(400).send({ ok: false, code: "GOOGLE_NOT_CONNECTED" });
    }

    // By default, we fetch from 1 month ago to 1 month from now
    const timeMin = new Date();
    timeMin.setMonth(timeMin.getMonth() - 1);
    const timeMax = new Date();
    timeMax.setMonth(timeMax.getMonth() + 1);

    const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`);
    url.searchParams.append("timeMin", timeMin.toISOString());
    url.searchParams.append("timeMax", timeMax.toISOString());
    url.searchParams.append("singleEvents", "true");
    url.searchParams.append("orderBy", "startTime");

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${google_access_token}` },
    });

    const data = await response.json();

    if (data.error) {
      return res.status(data.error.code || 400).send({ ok: false, error: data.error });
    }

    return res.status(200).send({ ok: true, data: data.items || [] });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

module.exports = router;
