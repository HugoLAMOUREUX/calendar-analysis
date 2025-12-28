import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { HiCalendar, HiArrowLeft } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"

export default function View() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchEvents = async () => {
    try {
      const { ok, data } = await api.get(`/event/list/${encodeURIComponent(id)}`)
      if (!ok) {
        toast.error("Failed to fetch events")
        return
      }
      setEvents(data)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching events")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchEvents()
  }, [id])

  if (loading) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate("/calendars")} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors mb-6">
          <HiArrowLeft size={16} />
          Back to calendars
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <HiCalendar size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar Events</h1>
            <p className="text-gray-600">Events from the selected calendar</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {events.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <HiCalendar size={48} className="mx-auto mb-4 opacity-10" />
                <p>No events found in this calendar for the next month.</p>
              </div>
            ) : (
              events.map(event => (
                <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{event.summary || "(No title)"}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(event.start.dateTime || event.start.date).toLocaleString([], {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </p>
                    </div>
                    {event.status === "confirmed" && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Confirmed</span>}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
