import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Wrapped from "./wrapped"
import Calendars from "./calendars"

export default function Syncing() {
  return (
    <Routes>
      <Route path="/wrapped" element={<Wrapped />} />
      <Route path="/calendars" element={<Calendars />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
