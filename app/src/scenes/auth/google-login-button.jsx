import React, { useState } from "react"
import toast from "react-hot-toast"
import api from "@/services/api"
import useStore from "@/services/store"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

export default function GoogleLoginButton() {
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

      // 2. Initialize Google Token Client
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        callback: async response => {
          if (response.error) {
            setLoading(false)
            return toast.error("Error with Google login")
          }

          try {
            // 3. Send only the access_token to the backend
            const { ok, user, token } = await api.post("/user/google-login", {
              access_token: response.access_token
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

      client.requestAccessToken()
    } catch (e) {
      console.error(e)
      toast.error(e.message || "An error occurred")
      setLoading(false)
    }
  }

  return (
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
  )
}
