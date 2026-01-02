import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { initSocket } from "@/services/socket"
import useStore from "@/services/store"
import api from "@/services/api"
import { HiOutlineCalendar, HiOutlineExclamationCircle, HiCheck } from "react-icons/hi"

const STEPS = [
  { id: "connecting", label: "Connexion Google", status: ["initializing", "fetching_calendars"] },
  { id: "syncing", label: "Synchronisation des calendriers", status: ["processing_calendars"] },
  { id: "events", label: "Récupération des événements", status: ["syncing_events"] },
  { id: "finalizing", label: "Finalisation", status: ["completed", "completing"] }
]

export default function Syncing() {
  const { user, setUser } = useStore()
  const navigate = useNavigate()
  const [status, setStatus] = useState("initializing")
  const [progress, setProgress] = useState({ status: "initializing", message: "Initialisation...", current: 0, total: 0 })
  const [socketConnected, setSocketConnected] = useState(false)

  useEffect(() => {
    if (!user?._id) return

    const socket = initSocket(user._id)

    const onConnect = () => {
      setSocketConnected(true)
    }

    if (socket.connected) {
      setSocketConnected(true)
    }

    socket.on("connect", onConnect)
    socket.on("sync_progress", data => {
      setProgress(data)
      if (data.status === "completed") {
        handleSyncCompleted()
      }
    })

    return () => {
      socket.off("connect", onConnect)
      socket.off("sync_progress")
    }
  }, [user?._id])

  useEffect(() => {
    if (socketConnected && status === "initializing") {
      startSync()
    }
  }, [socketConnected])

  const startSync = async () => {
    try {
      setStatus("syncing")
      await api.post("/calendar/sync")
    } catch (e) {
      console.error("Failed to trigger sync:", e)
      setStatus("error")
    }
  }

  const handleSyncCompleted = async () => {
    try {
      const { ok, user: updatedUser } = await api.get("/user/signin_token")
      if (ok) setUser(updatedUser)

      setStatus("completing")
      setTimeout(() => {
        navigate("/calendars")
      }, 1000)
    } catch (e) {
      console.error("Error after sync:", e)
      setStatus("error")
    }
  }

  const getStepStatus = stepId => {
    const currentStepIndex = STEPS.findIndex(s => s.status.includes(progress.status))
    const stepIndex = STEPS.findIndex(s => s.id === stepId)

    if (progress.status === "completed" || status === "completing") return "completed"
    if (currentStepIndex === -1) return stepIndex === 0 ? "current" : "pending"
    if (stepIndex < currentStepIndex) return "completed"
    if (stepIndex === currentStepIndex) return "current"
    return "pending"
  }

  const getOverallPercentage = () => {
    if (status === "completing") return 100
    const stepIndex = STEPS.findIndex(s => s.status.includes(progress.status))
    if (stepIndex === -1) return 5

    const basePercentage = (stepIndex / STEPS.length) * 100
    let stepProgress = 0

    if (progress.status === "syncing_events" && progress.total > 0) {
      stepProgress = (progress.current / progress.total) * (100 / STEPS.length)
    } else {
      stepProgress = (1 / STEPS.length) * 50
    }

    return Math.min(Math.round(basePercentage + stepProgress), 98)
  }

  return (
    <div className="h-screen bg-slate-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="max-w-xl w-full">
        {status !== "error" && (
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl shadow-indigo-100/50 border border-slate-100 animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-4 text-indigo-600">
                <HiOutlineCalendar className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{status === "completing" ? "C'est prêt !" : "Synchronisation en cours"}</h1>
              <p className="text-slate-500 text-sm font-medium">Mise à jour de vos données Google Calendar</p>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2.5 bg-slate-100 rounded-full mb-10 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                style={{ width: `${getOverallPercentage()}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {STEPS.map(step => {
                const stepStatus = getStepStatus(step.id)
                return (
                  <div key={step.id} className="flex items-center gap-4 group">
                    <div
                      className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                        ${stepStatus === "completed" ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100" : ""}
                        ${stepStatus === "current" ? "bg-indigo-600 text-white ring-4 ring-indigo-50 shadow-lg shadow-indigo-100" : ""}
                        ${stepStatus === "pending" ? "bg-slate-50 text-slate-300 border border-slate-100" : ""}
                      `}
                    >
                      {stepStatus === "completed" ? (
                        <HiCheck className="w-5 h-5" />
                      ) : stepStatus === "current" ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-bold text-sm transition-colors duration-500 ${stepStatus === "pending" ? "text-slate-300" : "text-slate-700"} ${
                          stepStatus === "current" ? "text-indigo-600" : ""
                        }`}
                      >
                        {step.label}
                      </p>
                      {stepStatus === "current" && <p className="text-xs text-slate-400 animate-pulse font-medium mt-0.5">{progress.message || "En cours..."}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 text-center animate-fade-in">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HiOutlineExclamationCircle className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Oups !</h1>
            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Une erreur est survenue lors de la synchronisation.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Réessayer
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-slate-400 text-xs font-medium">
          Vos données sont traitées en toute sécurité. <br />
          Ce processus peut prendre quelques secondes.
        </p>
      </div>
    </div>
  )
}
