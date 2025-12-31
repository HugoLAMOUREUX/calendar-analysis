# Calendar Analysis API

Backend service for the Calendar Analysis application. Built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: JWT-based auth with Passport.js (Google Strategy).
- **Calendar Sync**: Background jobs to sync Google Calendars and Events.
- **Analysis**: Aggregation pipelines to compute user stats.
- **Wrapped**: Yearly summary generation logic.
- **Cron Jobs**: Scheduled tasks for keeping data fresh.

## Setup

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file based on the example in the root README or see below:

   ```env
   PORT=8080
   MONGO_URI=mongodb+srv://...
   SECRET=your_jwt_secret_key

   # Google OAuth
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback

   APP_URL=http://localhost:3000
   ENVIRONMENT=development
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Key Scripts

- `npm run dev`: Start with nodemon (auto-reload).
- `npm start`: Start for production.

## Architecture

- `controllers/`: Request handlers (REST API).
- `models/`: Mongoose schemas (User, Calendar, Event, Wrapped).
- `services/`: External integrations (Google, Sentry, Brevo).
- `cron/`: Scheduled tasks (Syncing).
