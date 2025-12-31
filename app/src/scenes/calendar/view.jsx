import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { HiCalendar, HiArrowLeft, HiArrowPath } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"
import SearchBar from "@/components/SearchBar"
import Pagination from "@/components/pagination"
import MultiSelect from "@/components/MultiSelect"
import Tab from "@/components/tab"
import { HiChartBar, HiListBullet, HiOutlineCodeBracket, HiChevronRight, HiChevronDown, HiChevronUp } from "react-icons/hi2"

export default function View() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [calendar, setCalendar] = useState(null)
  const [events, setEvents] = useState([])
  const [analysis, setAnalysis] = useState([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [activeTab, setActiveTab] = useState("analysis")
  const [filters, setFilters] = useState({ search: "", status: [], startAfter: "", startBefore: "", page: 1, limit: 25 })
  const [total, setTotal] = useState(0)
  const [analysisTotal, setAnalysisTotal] = useState(0)
  const [analysisPage, setAnalysisPage] = useState(1)
  const [analysisSort, setAnalysisSort] = useState({ totalDuration: -1 })

  const STATUS_OPTIONS = [
    { label: "Confirmed", value: "confirmed" },
    { label: "Tentative", value: "tentative" },
    { label: "Cancelled", value: "cancelled" }
  ]

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

  const fetchAnalysis = async () => {
    try {
      const { ok, data, total } = await api.post("/event/analysis", {
        ...filters,
        calendar_id: id,
        page: analysisPage,
        limit: 10,
        sort: analysisSort
      })
      if (!ok) return toast.error("Failed to fetch analysis")
      setAnalysis(data)
      setAnalysisTotal(total)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching analysis")
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
      const { ok } = await api.post(`/calendar/${id}/sync`)
      if (!ok) throw new Error("Sync failed")
      toast.success("Events synced successfully!")
      fetchEvents()
      fetchAnalysis()
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
      if (activeTab === "analysis") fetchAnalysis()
      if (activeTab === "list") fetchEvents()
    }
  }, [id, activeTab, analysisPage, analysisSort, filters.search, filters.status, filters.startAfter, filters.startBefore, filters.page])

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

        {/* Filters Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Status</label>
            <MultiSelect
              id="status-filter"
              placeholder="All Status"
              options={STATUS_OPTIONS}
              values={STATUS_OPTIONS.filter(opt => filters.status.includes(opt.value))}
              onSelectedChange={selected => {
                setFilters(f => ({ ...f, status: selected.map(s => s.value), page: 1 }))
                setAnalysisPage(1)
              }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label>
            <input
              type="date"
              value={filters.startAfter}
              onChange={e => {
                setFilters(f => ({ ...f, startAfter: e.target.value, page: 1 }))
                setAnalysisPage(1)
              }}
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label>
            <input
              type="date"
              value={filters.startBefore}
              onChange={e => {
                setFilters(f => ({ ...f, startBefore: e.target.value, page: 1 }))
                setAnalysisPage(1)
              }}
              className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex border-b border-gray-200 mb-8">
          <Tab title="Analysis" active={activeTab === "analysis"} onClick={() => setActiveTab("analysis")} Icon={HiChartBar} />
          <Tab title="Event List" active={activeTab === "list"} onClick={() => setActiveTab("list")} Icon={HiListBullet} />
          <Tab title="Raw Data" active={activeTab === "raw"} onClick={() => setActiveTab("raw")} Icon={HiOutlineCodeBracket} />
        </div>

        {syncing && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center mb-8 shadow-sm">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="mt-4 text-gray-600 font-medium tracking-tight">Updating your calendar data...</p>
          </div>
        )}

        {!syncing && activeTab === "analysis" && (
          <>
            <Analysis
              data={analysis}
              sort={analysisSort}
              setSort={s => {
                setAnalysisSort(s)
                setAnalysisPage(1)
              }}
            />
            <Pagination total={analysisTotal} per_page={10} currentPage={analysisPage} onChange={page => setAnalysisPage(page)} />
          </>
        )}
        {!syncing && activeTab === "list" && (
          <>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="divide-y divide-gray-100">
                {events.length === 0 ? (
                  <div className="p-12 text-center text-gray-500">
                    <HiCalendar size={48} className="mx-auto mb-4 opacity-10" />
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
          </>
        )}
        {!syncing && activeTab === "raw" && <RawData data={calendar} />}
      </div>
    </div>
  )
}

function Analysis({ data, sort, setSort }) {
  const [expandedRows, setExpandedRows] = useState([])

  const formatDuration = ms => {
    const hours = ms / (1000 * 60 * 60)
    return hours.toFixed(1)
  }

  const toggleRow = id => {
    setExpandedRows(prev => (prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]))
  }

  const handleSort = field => {
    const newDirection = sort[field] === -1 ? 1 : -1
    setSort({ [field]: newDirection })
  }

  const getSortIcon = field => {
    if (!sort[field]) return <div className="h-4 w-4" />
    return sort[field] === -1 ? <HiChevronDown className="h-4 w-4" /> : <HiChevronUp className="h-4 w-4" />
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-10"></th>
            <th
              className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort("_id")}
            >
              <div className="flex items-center gap-1">Event Name {getSortIcon("_id")}</div>
            </th>
            <th
              className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort("count")}
            >
              <div className="flex items-center justify-center gap-1">Occurrences {getSortIcon("count")}</div>
            </th>
            <th
              className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleSort("totalDuration")}
            >
              <div className="flex items-center justify-end gap-1">Total Hours {getSortIcon("totalDuration")}</div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                No data available for analysis.
              </td>
            </tr>
          ) : (
            data.map(item => {
              const hasSubNames = item.sub_names && item.sub_names.length > 0 && item.sub_names.some(s => s.sub_name)
              const isExpanded = expandedRows.includes(item._id)

              return (
                <React.Fragment key={item._id}>
                  <tr className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      {hasSubNames && (
                        <button onClick={() => toggleRow(item._id)} className="text-gray-400 hover:text-indigo-600 transition-colors">
                          {isExpanded ? <HiChevronDown size={20} /> : <HiChevronRight size={20} />}
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{item._id || "(No title)"}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">{item.count}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-gray-900 font-semibold">{formatDuration(item.totalDuration)}h</p>
                    </td>
                  </tr>
                  {isExpanded && hasSubNames && (
                    <tr>
                      <td colSpan="4" className="bg-gray-50/50 px-6 py-4">
                        <div className="ml-10 border-l-2 border-indigo-100 pl-6 space-y-3">
                          {item.sub_names
                            .filter(s => s.sub_name)
                            .sort((a, b) => b.duration - a.duration)
                            .map((sub, idx) => (
                              <div key={idx} className="flex items-center justify-between group/sub">
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 font-medium group-hover/sub:text-indigo-600 transition-colors">{sub.sub_name}</p>
                                </div>
                                <div className="flex items-center gap-8">
                                  <span className="text-xs text-gray-400 bg-white border border-gray-100 px-2 py-0.5 rounded-md">{sub.count} occ.</span>
                                  <p className="text-sm text-gray-500 font-semibold w-16 text-right">{formatDuration(sub.duration)}h</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

function RawData({ data }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400 underline">calendar_data.json</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(data, null, 2))
            toast.success("Copied to clipboard")
          }}
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Copy JSON
        </button>
      </div>
      <pre className="p-6 text-indigo-300 font-mono text-xs overflow-auto max-h-[600px] leading-relaxed">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
