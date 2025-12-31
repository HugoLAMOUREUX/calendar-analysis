import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiCalendar, HiSparkles, HiArrowPath } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"
import SearchBar from "@/components/SearchBar"
import Pagination from "@/components/pagination"

export default function List() {
  const [calendars, setCalendars] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ search: "", page: 1, limit: 10 })
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const fetchCalendars = async () => {
    try {
      const { ok, data, total } = await api.post("/calendar/search", filters)
      if (!ok) {
        if (data?.code !== "GOOGLE_NOT_CONNECTED") {
          toast.error("Failed to fetch calendars")
        }
        return
      }
      setCalendars(data)
      setTotal(total)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching calendars")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCalendars()
  }, [filters.search, filters.page])

  if (loading && !calendars.length) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
              <HiSparkles className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Calendars</h1>
              <p className="text-gray-600">Select a calendar to analyze its events</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/syncing")}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              <HiArrowPath className="h-4 w-4" />
              Refresh
            </button>
            <div className="w-full md:w-64">
              <SearchBar search={filters.search} setFilter={setFilters} placeholder="Search calendars..." />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {calendars.length === 0 && (
            <div className="col-span-full bg-white rounded-xl border border-gray-200 p-8 text-center">
              <HiCalendar size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No calendars found or Google not connected.</p>
            </div>
          )}

          {calendars.map(calendar => (
            <button
              key={calendar._id}
              onClick={() => navigate(`/calendars/${calendar._id}`)}
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

        <Pagination total={total} per_page={filters.limit} currentPage={filters.page} onChange={page => setFilters(f => ({ ...f, page }))} />
      </div>
    </div>
  )
}
