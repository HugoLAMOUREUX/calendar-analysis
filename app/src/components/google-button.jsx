import React, { useState } from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import api from "@/services/api"
import useStore from "@/services/store"

export default function GoogleButton({ buttonText = "Continue with Google", onSuccess = () => {}, className = "" }) {
  const [loading, setLoading] = useState(false)
  const { setUser } = useStore()

  const handleGoogleLogin = async () => {
    if (!window.google) {
      return toast.error("Le script Google n'est pas encore chargé")
    }

    setLoading(true)

    try {
      // 1. Get Client ID from API
      const { ok: okConfig, data: clientId } = await api.get("/user/google-client-id")
      if (!okConfig) throw new Error("Impossible de récupérer la configuration Google")

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
            return toast.error("Erreur lors de la connexion Google")
          }

          try {
            // 3. Send the code to the backend
            const { ok, user, token } = await api.post("/user/google-login", {
              code: response.code
            })

            if (!ok) {
              setLoading(false)
              return toast.error("Échec de la connexion avec Google")
            }

            if (token) api.setToken(token)
            if (user) {
              setUser(user)
              onSuccess(user)
            }

            toast.success("Connexion réussie avec Google !")
          } catch (e) {
            console.error(e)
            toast.error("Une erreur est survenue lors de la connexion Google")
            setLoading(false)
          }
        }
      })

      client.requestCode()
    } catch (e) {
      console.error(e)
      toast.error(e.message || "Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <button onClick={handleGoogleLogin} disabled={loading} className={`flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 ${className}`}>
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <FcGoogle size={20} />
          <span>{buttonText}</span>
        </>
      )}
    </button>
  )
}
