const mongoose = require("mongoose");

const MODELNAME = "event";

const Schema = new mongoose.Schema(
  {
    // User info
    user_id: { type: String, required: true },
    user_name: { type: String },
    user_avatar: { type: String },

    // Calendar references
    calendar_id: { type: String, required: true },
    google_calendar_id: { type: String, required: true },

    // Google Event properties
    google_id: { type: String, required: true },
    kind: { type: String, default: "calendar#event" },
    etag: { type: String },
    status: { type: String },
    htmlLink: { type: String },
    created: { type: Date },
    updated: { type: Date },
    summary: { type: String },
    description: { type: String },
    location: { type: String },
    colorId: { type: String },

    creator: {
      id: { type: String },
      email: { type: String },
      displayName: { type: String },
      self: { type: Boolean },
    },
    organizer: {
      id: { type: String },
      email: { type: String },
      displayName: { type: String },
      self: { type: Boolean },
    },

    start: {
      date: { type: String },
      dateTime: { type: Date },
      timeZone: { type: String },
    },
    end: {
      date: { type: String },
      dateTime: { type: Date },
      timeZone: { type: String },
    },

    endTimeUnspecified: { type: Boolean },
    recurrence: [String],
    recurringEventId: { type: String },
    originalStartTime: {
      date: { type: String },
      dateTime: { type: Date },
      timeZone: { type: String },
    },

    transparency: { type: String },
    visibility: { type: String },
    iCalUID: { type: String },
    sequence: { type: Number },

    attendees: [
      {
        id: { type: String },
        email: { type: String },
        displayName: { type: String },
        organizer: { type: Boolean },
        self: { type: Boolean },
        resource: { type: Boolean },
        optional: { type: Boolean },
        responseStatus: { type: String },
        comment: { type: String },
        additionalGuests: { type: Number },
      },
    ],
    attendeesOmitted: { type: Boolean },

    extendedProperties: {
      private: { type: Map, of: String },
      shared: { type: Map, of: String },
    },

    hangoutLink: { type: String },
    conferenceData: { type: Object },
    gadget: { type: Object },

    anyoneCanAddSelf: { type: Boolean },
    guestsCanInviteOthers: { type: Boolean },
    guestsCanModify: { type: Boolean },
    guestsCanSeeOtherGuests: { type: Boolean },
    privateCopy: { type: Boolean },
    locked: { type: Boolean },

    reminders: {
      useDefault: { type: Boolean },
      overrides: [
        {
          method: { type: String },
          minutes: { type: Number },
        },
      ],
    },

    source: {
      url: { type: String },
      title: { type: String },
    },

    workingLocationProperties: { type: Object },
    outOfOfficeProperties: { type: Object },
    focusTimeProperties: { type: Object },

    attachments: [
      {
        fileUrl: { type: String },
        title: { type: String },
        mimeType: { type: String },
        iconLink: { type: String },
        fileId: { type: String },
      },
    ],
    birthdayProperties: { type: Object },
    eventType: { type: String },

    last_synced_at: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } },
);

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
