import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { HiArrowLeft, HiOutlineInformationCircle, HiOutlineCodeBracket } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"

export default function View() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("general")

  const fetchEvent = async () => {
    try {
      const { ok, data } = await api.get(`/event/${id}`)
      if (!ok) return toast.error("Event not found")
      setEvent(data)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred while fetching event info")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchEvent()
    }
  }, [id])

  if (loading) return <Loader />
  if (!event) return null

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors mb-6">
          <HiArrowLeft size={16} />
          Back
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.summary || "(No title)"}</h1>
          <p className="text-gray-600">
            {new Date(event.start.dateTime || event.start.date).toLocaleString([], {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })}
          </p>
        </div>

        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("general")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border-b-2 ${
              activeTab === "general" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <HiOutlineInformationCircle size={18} />
            General Information
          </button>
          <button
            onClick={() => setActiveTab("raw")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border-b-2 ${
              activeTab === "raw" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <HiOutlineCodeBracket size={18} />
            Raw Data
          </button>
        </div>

        {activeTab === "general" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-gray-900 font-medium">{event.name || event.summary || "N/A"}</p>
                  </div>
                  {event.sub_name && (
                    <div>
                      <p className="text-xs text-gray-500">Sub Name</p>
                      <p className="text-gray-900 font-medium">{event.sub_name}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">{event.location || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        event.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Organizer & Creator</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500">Organizer</p>
                    <p className="text-gray-900 font-medium">{event.organizer?.displayName || event.organizer?.email || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Creator</p>
                    <p className="text-gray-900 font-medium">{event.creator?.displayName || event.creator?.email || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>

            {event.description && (
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</h3>
                <div className="text-gray-700 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
            )}

            {event.attendees && event.attendees.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Attendees ({event.attendees.length})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {event.attendees.map((attendee, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs uppercase">
                        {(attendee.displayName || attendee.email)?.[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{attendee.displayName || attendee.email}</p>
                        <p className="text-xs text-gray-500 truncate">{attendee.responseStatus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "raw" && (
          <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span className="text-xs font-mono text-gray-400 underline">event_data.json</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(event, null, 2))
                  toast.success("Copied to clipboard")
                }}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Copy JSON
              </button>
            </div>
            <pre className="p-6 text-indigo-300 font-mono text-xs overflow-auto max-h-[600px] leading-relaxed">{JSON.stringify(event, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
