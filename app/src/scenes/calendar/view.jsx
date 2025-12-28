import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { HiCalendar, HiArrowLeft, HiArrowPath } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"
import SearchBar from "@/components/SearchBar"
import Pagination from "@/components/pagination"

export default function View() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [calendar, setCalendar] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [filters, setFilters] = useState({ search: "", page: 1, limit: 25 })
  const [total, setTotal] = useState(0)

  const fetchCalendar = async () => {
    try {
      const { ok, data } = await api.get(`/calendar/${id}`)
      if (!ok) return toast.error("Calendar not found")
      setCalendar(data)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching calendar info")
    }
  }

  const fetchEvents = async () => {
    try {
      const { ok, data, total } = await api.post("/event/search", {
        ...filters,
        calendar_id: id
      })
      if (!ok) return toast.error("Failed to fetch events")
      setEvents(data)
      setTotal(total)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching events")
    } finally {
      setLoading(false)
    }
  }

  const handleSync = async () => {
    setSyncing(true)
    try {
      const { ok } = await api.post(`/event/${id}/sync`)
      if (!ok) throw new Error("Sync failed")
      toast.success("Events synced successfully!")
      fetchEvents()
    } catch (e) {
      console.error(e)
      toast.error("Failed to sync events")
    } finally {
      setSyncing(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchCalendar()
    }
  }, [id])

  useEffect(() => {
    if (id) {
      fetchEvents()
    }
  }, [id, filters.search, filters.page])

  if (loading && !calendar) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <button onClick={() => navigate("/calendars")} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
            <HiArrowLeft size={16} />
            Back to calendars
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSync}
              disabled={syncing}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              <HiArrowPath className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
              {syncing ? "Syncing..." : "Refresh"}
            </button>
            <div className="w-full md:w-64">
              <SearchBar search={filters.search} setFilter={setFilters} placeholder="Search events..." />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: calendar?.backgroundColor || "#4f46e5" }}>
            <HiCalendar size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{calendar?.summary || "Calendar Events"}</h1>
            <p className="text-gray-600">{calendar?.description || "Events from the selected calendar"}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="divide-y divide-gray-100">
            {events.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <HiCalendar size={48} className="mx-auto mb-4 opacity-10" />
                <p>No events found.</p>
              </div>
            ) : (
              events.map(event => (
                <div key={event._id} className="p-4 hover:bg-gray-50 transition-colors">
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

        <Pagination total={total} per_page={filters.limit} currentPage={filters.page} onChange={page => setFilters(f => ({ ...f, page }))} />
      </div>
    </div>
  )
}
