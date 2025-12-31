# Calendar Analysis App

Frontend application for Calendar Analysis. Built with React, Vite, and TailwindCSS.

## Features

- **Dashboard**: View your calendars and sync status.
- **Events**: List and filter your calendar events.
- **Wrapped**: Interactive "Story" mode to view your yearly stats.
- **Charts**: Visualizations of your time usage.

## Setup

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Configuration**:
   Check `src/config.js` to ensure the API URL matches your backend (default: `http://localhost:8080`).

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Tech Stack

- **Framework**: React + Vite
- **Styling**: TailwindCSS + HeadlessUI
- **Icons**: React Icons (Heroicons)
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Date Handling**: Moment.js

## Key Directories

- `src/scenes/`: Main pages/views (Auth, Calendar, Wrapped, etc.).
- `src/components/`: Reusable UI components.
- `src/services/`: API client and store.
