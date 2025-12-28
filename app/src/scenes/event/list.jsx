import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiSquares2X2, HiSparkles } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"
import SearchBar from "@/components/SearchBar"
import Pagination from "@/components/pagination"
import MultiSelect from "@/components/MultiSelect"

export default function List() {
  const [events, setEvents] = useState([])
  const [calendars, setCalendars] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ search: "", calendar_id: [], status: [], startAfter: "", startBefore: "", page: 1, limit: 10 })
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const STATUS_OPTIONS = [
    { label: "Confirmed", value: "confirmed" },
    { label: "Tentative", value: "tentative" },
    { label: "Cancelled", value: "cancelled" }
  ]

  const fetchCalendars = async () => {
    try {
      const { ok, data } = await api.get("/calendar")
      if (ok) setCalendars(data)
    } catch (e) {
      console.error(e)
    }
  }

  const fetchEvents = async () => {
    try {
      const { ok, data, total } = await api.post("/event/search", filters)
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

  useEffect(() => {
    fetchCalendars()
  }, [])

  useEffect(() => {
    fetchEvents()
  }, [filters.search, filters.calendar_id, filters.status, filters.startAfter, filters.startBefore, filters.page])

  if (loading && !events.length && !calendars.length) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
              <HiSparkles className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Events</h1>
              <p className="text-gray-600">Browse and filter all your calendar events</p>
            </div>
          </div>
          <div className="w-full md:w-64">
            <SearchBar search={filters.search} setFilter={setFilters} placeholder="Search events..." />
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Calendars</label>
            <MultiSelect
              id="calendar-filter"
              placeholder="All Calendars"
              options={calendars.map(cal => ({ label: cal.summary, value: cal._id }))}
              values={filters.calendar_id.map(id => ({ label: calendars.find(c => c._id === id)?.summary || "", value: id }))}
              onSelectedChange={selected => setFilters(f => ({ ...f, calendar_id: selected.map(s => s.value), page: 1 }))}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Status</label>
            <MultiSelect
              id="status-filter"
              placeholder="All Status"
              options={STATUS_OPTIONS}
              values={STATUS_OPTIONS.filter(opt => filters.status.includes(opt.value))}
              onSelectedChange={selected => setFilters(f => ({ ...f, status: selected.map(s => s.value), page: 1 }))}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label>
            <input
              type="date"
              value={filters.startAfter}
              onChange={e => setFilters(f => ({ ...f, startAfter: e.target.value, page: 1 }))}
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label>
            <input
              type="date"
              value={filters.startBefore}
              onChange={e => setFilters(f => ({ ...f, startBefore: e.target.value, page: 1 }))}
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="divide-y divide-gray-100">
            {events.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <HiSquares2X2 size={48} className="mx-auto mb-4 opacity-10" />
                <p>No events found.</p>
              </div>
            ) : (
              events.map(event => (
                <button key={event._id} onClick={() => navigate(`/events/${event._id}`)} className="w-full p-4 hover:bg-gray-50 transition-colors text-left">
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
                </button>
              ))
            )}
          </div>
        </div>

        <Pagination total={total} per_page={filters.limit} currentPage={filters.page} onChange={page => setFilters(f => ({ ...f, page }))} />
      </div>
    </div>
  )
}
