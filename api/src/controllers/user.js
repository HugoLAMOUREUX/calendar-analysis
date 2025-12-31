const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const crypto = require("crypto");

const { google } = require("googleapis");
const UserObject = require("../models/user");

const config = require("../config");
const ERROR_CODES = require("../utils/errorCodes");

const { capture } = require("../services/sentry");
const { syncCalendars } = require("../services/google");

// 1 year
const COOKIE_MAX_AGE = 31557600000;
const JWT_MAX_AGE = "1y";

const cookieOptions = () => {
  if (config.ENVIRONMENT === "development") {
    return { maxAge: COOKIE_MAX_AGE, httpOnly: true, secure: false, domain: "localhost", sameSite: "Lax" };
  } else {
    return {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: true,
      origin: config.APP_URL,
      sameSite: "none",
    };
  }
};

router.get("/google-client-id", async (req, res) => {
  return res.status(200).send({ ok: true, data: config.GOOGLE_OAUTH_CLIENT_ID });
});

router.post("/google-login", async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) return res.status(400).send({ ok: false, code: ERROR_CODES.INVALID_PARAMS });

    const oauth2Client = new google.auth.OAuth2(
      config.GOOGLE_OAUTH_CLIENT_ID,
      config.GOOGLE_OAUTH_CLIENT_SECRET,
      "postmessage",
    );

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info from Google
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const { data: userInfo } = await oauth2.userinfo.get();

    if (!userInfo || !userInfo.email) {
      return res.status(401).send({ ok: false, code: ERROR_CODES.UNAUTHORIZED });
    }

    let user = await UserObject.findOne({ email: userInfo.email.toLowerCase() });

    const userUpdate = {
      google_id: userInfo.id,
      email: userInfo.email.toLowerCase(),
      name: userInfo.name,
      avatar: userInfo.picture,
      google_access_token: tokens.access_token,
      last_login_at: Date.now(),
    };

    // Only update refresh_token if it's provided (it's only sent the first time or if prompt=consent)
    if (tokens.refresh_token) {
      userUpdate.google_refresh_token = tokens.refresh_token;
    }

    if (!user) {
      user = await UserObject.create(userUpdate);
    } else {
      user.set(userUpdate);
      await user.save();
    }

    const token = jwt.sign({ _id: user._id }, config.SECRET, { expiresIn: JWT_MAX_AGE });
    res.cookie("jwt_user", token, cookieOptions());

    res.status(200).send({ ok: true, token, user });
  } catch (error) {
    capture(error);
    console.error("Google Login Error:", error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR });
  }
});

router.post("/logout", async (_, res) => {
  try {
    res.clearCookie("jwt_user", cookieOptions());
    return res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, error });
  }
});

router.get("/signin_token", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const { user } = req;
    user.set({ last_login_at: Date.now() });
    await user.save();

    const token = jwt.sign({ _id: user._id }, config.SECRET, { expiresIn: JWT_MAX_AGE });
    res.cookie("jwt_user", token, cookieOptions());

    res.status(200).send({ user, token, ok: true });
  } catch (error) {
    capture(error);
    return res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

router.put("/", passport.authenticate("user", { session: false }), async (req, res) => {
  try {
    const obj = req.body;
    const data = await UserObject.findByIdAndUpdate(req.user._id, obj, { new: true });
    res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

// ============ ADMIN ROUTES FOR USER MANAGEMENT ============

// Search users (admin only)
router.post("/search", passport.authenticate("admin", { session: false }), async (req, res) => {
  try {
    const { search, sort, per_page, page } = req.body;
    let query = {};

    const searchValue = search?.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&");
    if (search) {
      query = {
        ...query,
        $or: [{ name: { $regex: searchValue, $options: "i" } }, { email: { $regex: searchValue, $options: "i" } }],
      };
    }

    const limit = per_page || 10;
    const offset = page ? (page - 1) * limit : 0;

    const data = await UserObject.find(query)
      .skip(offset)
      .limit(limit)
      .sort(sort || { created_at: -1 });

    const total = await UserObject.countDocuments(query);

    return res.status(200).send({ ok: true, data, total });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

// Get user by ID (admin only)
router.get("/:id", passport.authenticate("admin", { session: false }), async (req, res) => {
  try {
    const data = await UserObject.findOne({ _id: req.params.id });
    if (!data) return res.status(404).send({ ok: false, code: ERROR_CODES.NOT_FOUND });
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

// Update user by ID (admin only)
router.put("/:id", passport.authenticate("admin", { session: false }), async (req, res) => {
  try {
    const user = await UserObject.findById(req.params.id);
    if (!user) return res.status(404).send({ ok: false, code: ERROR_CODES.NOT_FOUND });

    const obj = req.body;
    user.set(obj);
    await user.save();

    res.status(200).send({ ok: true, data: user });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

// Delete user by ID (admin only)
router.delete("/:id", passport.authenticate("admin", { session: false }), async (req, res) => {
  try {
    await UserObject.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ ok: true });
  } catch (error) {
    capture(error);
    res.status(500).send({ ok: false, code: ERROR_CODES.SERVER_ERROR, error });
  }
});

module.exports = router;
