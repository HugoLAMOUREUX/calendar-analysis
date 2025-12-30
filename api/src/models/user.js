const mongoose = require("mongoose");

const MODELNAME = "user";

const Schema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    email: { type: String, required: true, unique: true, trim: true },

    avatar: { type: String, default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" },

    role: { type: String, enum: ["user", "client"], default: "user" },

    last_login_at: { type: Date, default: Date.now },

    google_id: { type: String, unique: true, sparse: true },
    google_access_token: { type: String },
    google_refresh_token: { type: String },

    last_calendar_sync_at: { type: Date },
    last_event_sync_at: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
