import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import validator from "validator"
import { HiLockClosed, HiEye, HiEyeSlash, HiArrowLeft } from "react-icons/hi2"
import { HiMail } from "react-icons/hi"

import api from "@/services/api"
import useStore from "@/services/store"
import GoogleLoginButton from "./google-login-button"

export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [seePassword, setSeePassword] = useState(false)
  const [step, setStep] = useState("email") // "email" or "password"
  const { setUser } = useStore()
  const navigate = useNavigate()

  const handleEmailSubmit = async e => {
    e.preventDefault()

    if (!email) return toast.error("Please enter your email")

    if (!validator.isEmail(email)) return toast.error("Invalid email address")

    setLoading(true)
    try {
      const { ok, exists } = await api.post("/user/check-email", { email })

      if (!ok) return toast.error("An error occurred")

      if (exists) setStep("password")
      else navigate("/auth/signup", { state: { email } })
    } catch (e) {
      console.error(e)
      toast.error("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordSubmit = async e => {
    e.preventDefault()

    if (!password) return toast.error("Please enter your password")

    setLoading(true)
    try {
      const { ok, user, token } = await api.post("/user/signin", { email, password })

      if (!ok) return toast.error("Incorrect password")

      if (token) api.setToken(token)
      if (user) setUser(user)

      toast.success("Successfully signed in!")
      navigate("/")
    } catch (e) {
      console.error(e)
      toast.error(e.code || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    setStep("email")
    setPassword("")
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">{step === "email" ? "Sign in" : "Welcome back!"}</h1>
        <p className="text-center text-gray-600 mb-6">{step === "email" ? "Enter your email to continue" : `Sign in with ${email}`}</p>

        {step === "email" && (
          <>
            <GoogleLoginButton />
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiMail className="mr-2 text-indigo-600" size={18} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 placeholder-gray-400"
                  placeholder="example@email.com"
                  autoFocus
                  onKeyPress={e => e.key === "Enter" && handleEmailSubmit(e)}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Checking...</span>
                  </div>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </>
        )}

        {step === "password" && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <button type="button" onClick={handleBack} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors mb-4">
              <HiArrowLeft size={16} />
              Change email
            </button>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <HiLockClosed className="mr-2 text-indigo-600" size={18} />
                  Password
                </label>
                <Link to="/auth/forgot" className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                  placeholder="••••••••"
                  autoFocus
                  onKeyPress={e => e.key === "Enter" && handlePasswordSubmit(e)}
                />
                <button
                  type="button"
                  onClick={() => setSeePassword(!seePassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {seePassword ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
