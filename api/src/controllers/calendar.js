const express = require("express");
const passport = require("passport");
const router = express.Router();
const ERROR_CODES = require("../utils/errorCodes");
const { capture } = require("../services/sentry");

router.get("/list", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { google_access_token } = req.user;

    if (!google_access_token) {
      return res.status(400).send({ ok: false, code: "GOOGLE_NOT_CONNECTED" });
    }

    const response = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
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
