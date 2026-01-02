import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import * as Sentry from "@sentry/browser"

import Landing from "@/scenes/landing"
import Calendar from "@/scenes/calendar"
import Event from "@/scenes/event"
import Account from "@/scenes/account"
import Wrapped from "@/scenes/wrapped"
import Syncing from "@/scenes/syncing"
import Terms from "@/scenes/legal-pages/terms"
import Privacy from "@/scenes/legal-pages/privacy"

import Navbar from "@/components/NavBar"
import Loader from "@/components/loader"

import useStore from "@/services/store"
import api from "@/services/api"

import { environment, SENTRY_URL } from "./config"

if (environment === "production") {
  Sentry.init({ dsn: SENTRY_URL, environment: "app" })
}

export default function App() {
  return (
    <BrowserRouter basename="/calendar-analysis">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/calendars/*" element={<Calendar />} />
          <Route path="/syncing/*" element={<Syncing />} />
          <Route path="/wrapped/*" element={<Wrapped />} />
          <Route path="/events/*" element={<Event />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  )
}

const PublicLayout = () => {
  return <Outlet />
}

const UserLayout = () => {
  const [loading, setLoading] = useState(true)
  const { user, setUser, isNavCollapsed } = useStore()
  const location = useLocation()

  async function fetchUser() {
    try {
      const { ok, token, user } = await api.get("/user/signin_token")
      if (!ok) {
        setUser(null)
        return
      }
      api.setToken(token)
      setUser(user)
    } catch (e) {
      console.log(e)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) return <Loader />

  if (!user) return <Navigate to="/" replace={true} />

  // If user is logged in but never synced, redirect to syncing page
  if (!user.last_calendar_sync_at && !location.pathname.startsWith("/syncing")) {
    return <Navigate to="/syncing/wrapped" replace={true} />
  }

  const showNavbar = !location.pathname.startsWith("/syncing")

  return (
    <div className="flex h-screen overflow-hidden">
      {showNavbar && <Navbar />}
      <main className={`flex-1 h-full overflow-auto bg-gray-50 transition-all duration-300 ${showNavbar ? (isNavCollapsed ? "lg:ml-20" : "lg:ml-64") : ""}`}>
        <Outlet />
      </main>
    </div>
  )
}
