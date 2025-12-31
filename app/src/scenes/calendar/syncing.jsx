import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initSocket } from "@/services/socket"
import useStore from "@/services/store"
import api from "@/services/api"

export default function Syncing() {
  const { user, setUser } = useStore()
  const navigate = useNavigate()
  const [progress, setProgress] = useState({
    status: "initializing",
    message: "Initializing synchronization...",
    current: 0,
    total: 0
  })

  useEffect(() => {
    if (!user?._id) return

    const socket = initSocket(user._id)

    const startSync = async () => {
      try {
        await api.post("/calendar/sync")
      } catch (e) {
        console.error("Failed to trigger sync:", e)
      }
    }

    startSync()

    socket.on("sync_progress", async data => {
      setProgress(data)
      if (data.status === "completed") {
        // Fetch updated user to get the new last_calendar_sync_at
        try {
          const { ok, user: updatedUser } = await api.get("/user/signin_token")
          if (ok) setUser(updatedUser)
        } catch (e) {
          console.error("Failed to fetch updated user:", e)
        }

        setTimeout(() => {
          navigate("/calendars")
        }, 1500)
      }
    })

    return () => {
      socket.off("sync_progress")
    }
  }, [user?._id, navigate, setUser])

  const getPercentage = () => {
    if (progress.status === "completed") return 100
    if (!progress.total) return 0
    return Math.round((progress.current / progress.total) * 100)
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Syncing your data</h1>
        <p className="text-lg text-gray-600 mb-10 h-16">{progress.message}</p>

        <div className="w-full bg-gray-100 rounded-full h-4 mb-6 overflow-hidden shadow-inner">
          <div className="bg-indigo-600 h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]" style={{ width: `${getPercentage()}%` }} />
        </div>

        <div className="flex flex-col gap-2">
          {progress.status === "syncing_events" && progress.total > 0 && (
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Calendar {progress.current} of {progress.total}
            </span>
          )}
          {progress.status === "completed" && <span className="text-green-600 font-bold animate-bounce text-xl">Done! Redirecting...</span>}
        </div>
      </div>
    </div>
  )
}
