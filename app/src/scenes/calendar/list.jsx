import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiCalendar, HiSparkles } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"

export default function List() {
  const [calendars, setCalendars] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchCalendars = async () => {
    try {
      const { ok, data } = await api.get("/calendar/list")
      if (!ok) {
        if (data?.code !== "GOOGLE_NOT_CONNECTED") {
          toast.error("Failed to fetch calendars")
        }
        return
      }
      setCalendars(data)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching calendars")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCalendars()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
            <HiSparkles className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Calendars</h1>
            <p className="text-gray-600">Select a calendar to analyze its events</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {calendars.length === 0 && (
            <div className="col-span-full bg-white rounded-xl border border-gray-200 p-8 text-center">
              <HiCalendar size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No calendars found or Google not connected.</p>
            </div>
          )}

          {calendars.map(calendar => (
            <button
              key={calendar.id}
              onClick={() => navigate(`/calendars/${encodeURIComponent(calendar.id)}`)}
              className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left"
            >
              <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: calendar.backgroundColor }} />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{calendar.summary}</h3>
                <p className="text-sm text-gray-500 truncate">{calendar.description || "No description"}</p>
              </div>
              {calendar.primary && <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">Primary</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
