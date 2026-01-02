const mongoose = require("mongoose");

const MODELNAME = "calendar";

const Schema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    user_name: { type: String },
    user_avatar: { type: String },

    google_id: { type: String, required: true },
    etag: { type: String },
    summary: { type: String },
    description: { type: String },
    timeZone: { type: String },
    accessRole: { type: String },
    backgroundColor: { type: String },
    foregroundColor: { type: String },
    colorId: { type: String },
    kind: { type: String },

    conferenceProperties: {
      allowedConferenceSolutionTypes: [String],
    },
    defaultReminders: [
      {
        method: { type: String },
        minutes: { type: Number },
      },
    ],
    last_synced_at: { type: Date },
    last_event_synced_at: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
