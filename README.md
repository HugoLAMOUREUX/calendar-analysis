# Calendar Analysis

A comprehensive tool to analyze your Google Calendar usage, providing insights into your time management, meeting habits, and a yearly "Wrapped" summary.

## 🚀 Features

- **Calendar Sync**: Seamlessly sync with your Google Calendars.
- **Event Analysis**: Visualize how you spend your time with detailed charts and stats.
- **Yearly Wrapped**: Get a Spotify-like yearly summary of your calendar (Top collaborators, most intense weeks, persona, etc.).
- **Multi-Calendar Support**: Analyze multiple calendars at once.

## 📦 Structure

The project is composed of 3 applications:

- **api/** - Node.js/Express backend with MongoDB
- **app/** - React frontend (user application)
- **admin/** - React frontend (admin panel - optional)

---

## 🛠 Prerequisites

- Node.js (v18+)
- MongoDB Database
- Google Cloud Console Project (for OAuth)

---

## ⚙️ Google Cloud Setup (Required)

To enable "Login with Google" and Calendar sync, you need a Google Cloud Project.

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. **Enable APIs**:
   - Go to "APIs & Services" > "Library".
   - Search for and enable **Google Calendar API**.
4. **Configure OAuth Consent Screen**:
   - Go to "APIs & Services" > "OAuth consent screen".
   - Choose **External** (or Internal if you have a Workspace).
   - Fill in app details.
   - Add scopes:
     - `.../auth/userinfo.email`
     - `.../auth/userinfo.profile`
     - `.../auth/calendar.readonly` (or full access if needed)
   - Add test users (your email) while in testing mode.
5. **Create Credentials**:
   - Go to "APIs & Services" > "Credentials".
   - Create **OAuth client ID** > **Web application**.
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (Frontend)
   - **Authorized redirect URIs**:
     - `http://localhost:3000`
     - `http://localhost:8080/auth/google/callback` (Backend callback)
   - Copy your **Client ID** and **Client Secret**.

---

## 🚀 Installation & Setup

### 1. Backend (API)

```bash
cd api
npm install
```

Create a `.env` file in `/api`:

```env
PORT=8080
MONGO_URI=your-mongodb-uri
SECRET=your-jwt-secret
APP_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
ENVIRONMENT=development

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback

# Optional (for emails)
BREVO_KEY=your-brevo-api-key
```

Start the API:

```bash
npm run dev
```

### 2. Frontend (App)

```bash
cd app
npm install
```

Start the App:

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

---

## 📧 Email Configuration (Optional - Brevo)

If you want to enable features like "Forgot Password", configure Brevo:

1. Get your API Key from [Brevo](https://www.brevo.com/).
2. Add `BREVO_KEY` to `api/.env`.
3. Configure templates in `api/src/utils/constants.js`.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
