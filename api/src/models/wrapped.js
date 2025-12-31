const mongoose = require("mongoose");

const MODELNAME = "wrapped";

const Schema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    year: { type: Number, required: true },

    totalHours: { type: Number, default: 0 },
    totalEvents: { type: Number, default: 0 },

    intenseWeeks: [
      {
        week: { type: Number },
        hours: { type: Number },
        count: { type: Number },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],

    earliestMeeting: {
      summary: { type: String },
      date: { type: Date },
      time: { type: String }, // Format HH:mm
    },
    latestMeeting: {
      summary: { type: String },
      date: { type: Date },
      time: { type: String }, // Format HH:mm
    },
    longestMeeting: {
      summary: { type: String },
      duration: { type: Number }, // in minutes
      date: { type: Date },
    },

    topPeople: [
      {
        email: { type: String },
        displayName: { type: String },
        hours: { type: Number },
        count: { type: Number },
      },
    ],

    persona: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

// Ensure a user has only one wrapped per year
Schema.index({ user_id: 1, year: 1 }, { unique: true });

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
