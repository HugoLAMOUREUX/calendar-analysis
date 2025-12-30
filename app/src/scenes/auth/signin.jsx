import React, { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

import api from "@/services/api"
import useStore from "@/services/store"

export default function Signin() {
  const [loading, setLoading] = useState(false)
  const { setUser } = useStore()
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    if (!window.google) {
      return toast.error("Google script not loaded yet")
    }

    setLoading(true)

    try {
      // 1. Get Client ID from API
      const { ok: okConfig, data: clientId } = await api.get("/user/google-client-id")
      if (!okConfig) throw new Error("Could not fetch Google configuration")

      // 2. Initialize Google Code Client
      const client = window.google.accounts.oauth2.initCodeClient({
        client_id: clientId,
        scope: "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        ux_mode: "popup",
        access_type: "offline",
        prompt: "consent",
        callback: async response => {
          if (response.error) {
            setLoading(false)
            return toast.error("Error with Google login")
          }

          try {
            // 3. Send the code to the backend
            const { ok, user, token } = await api.post("/user/google-login", {
              code: response.code
            })

            if (!ok) {
              setLoading(false)
              return toast.error("Failed to login with Google")
            }

            if (token) api.setToken(token)
            if (user) setUser(user)

            toast.success("Successfully signed in with Google!")
            navigate("/")
          } catch (e) {
            console.error(e)
            toast.error("An error occurred during Google login")
            setLoading(false)
          }
        }
      })

      client.requestCode()
    } catch (e) {
      console.error(e)
      toast.error(e.message || "An error occurred")
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Sign in</h1>
        <p className="text-center text-gray-600 mb-6">Continue to your calendar analysis</p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition-all shadow-sm font-medium text-gray-700"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
