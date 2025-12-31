import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiOutlineGift, HiSparkles } from "react-icons/hi2"
import toast from "react-hot-toast"

import api from "@/services/api"
import Loader from "@/components/loader"

export default function List() {
  const [wrappeds, setWrappeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(null)
  const navigate = useNavigate()

  const fetchWrappeds = async () => {
    try {
      const { ok, data } = await api.post("/wrapped/search", {})
      if (ok) setWrappeds(data)
    } catch (e) {
      console.error(e)
      toast.error("Failed to fetch wrappeds")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWrappeds()
  }, [])

  const handleGenerate = async year => {
    setGenerating(year)
    try {
      const { ok, data, code, message } = await api.post("/wrapped/generate", { year })
      if (!ok) {
        if (code === "NO_EVENTS_FOUND") {
          toast.error(message || "No events found for this year")
        } else {
          toast.error(message || "Failed to generate wrapped")
        }
        return
      }
      toast.success("Wrapped generated!")
      fetchWrappeds()
      navigate(`/wrapped/${data._id}`)
    } catch (e) {
      console.error(e)
      toast.error("An error occurred")
    } finally {
      setGenerating(null)
    }
  }

  const yearsToGenerate = [2025, 2024, 2023, 2022, 2021]

  if (loading) return <Loader />

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
            <HiOutlineGift className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Yearly Wrapped</h1>
            <p className="text-gray-600">Discover your calendar stats year by year</p>
          </div>
        </div>

        {/* Existing Wrappeds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {wrappeds.map(wrapped => (
            <button
              key={wrapped._id}
              onClick={() => navigate(`/wrapped/${wrapped._id}`)}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-left group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-bold">{wrapped.year}</span>
                <HiSparkles className="h-6 w-6 opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-1 opacity-90">
                <p className="text-sm font-medium">{wrapped.persona}</p>
                <p className="text-xs">{wrapped.totalEvents} events</p>
              </div>
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Generate New Wrapped</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {yearsToGenerate.map(year => {
              const alreadyExists = wrappeds.find(w => w.year === year)
              // If exists, we can still allow regenerate? Or maybe hide?
              // Let's allow regenerate but maybe style differently.
              // Or just show years that don't exist? The user might want to update it.
              // For now, let's allow regenerate.
              return (
                <button
                  key={year}
                  onClick={() => handleGenerate(year)}
                  disabled={generating}
                  className={`
                            px-4 py-3 rounded-lg border text-sm font-medium transition-all
                            ${
                              alreadyExists
                                ? "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                                : "bg-white text-indigo-600 border-indigo-200 hover:border-indigo-500 hover:shadow-md"
                            }
                            ${generating ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                >
                  {generating === year ? "Generating..." : `Generate ${year}`}
                  {alreadyExists && <span className="block text-xs font-normal text-gray-400 mt-1">Update</span>}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
