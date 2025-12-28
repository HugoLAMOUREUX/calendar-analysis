import React, { useState } from "react"
import queryString from "query-string"
import toast from "react-hot-toast"
import { useNavigate, useLocation } from "react-router-dom"
import { HiLockClosed, HiEye, HiEyeSlash } from "react-icons/hi2"

import LoadingButton from "@/components/loadingButton"
import api from "@/services/api"

export default () => {
  const [values, setValues] = useState({ password: "", password1: "" })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const send = async () => {
    try {
      if (!values.password || !values.password1) return toast.error("Please fill in all fields")

      if (values.password !== values.password1) return toast.error("Passwords do not match")

      if (values.password.length < 6) return toast.error("Password must contain at least 6 characters")

      setLoading(true)
      const { token } = queryString.parse(location.search)
      const res = await api.post("/user/forgot_password_reset", { ...values, token })
      if (!res.ok) throw res
      toast.success("Password reset successfully!")
      navigate("/auth")
    } catch (e) {
      toast.error(e?.code || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">New password</h1>
        <p className="text-center text-gray-600 mb-6">Create a new secure password for your account.</p>

        <div className="space-y-4">
          {/* Password requirements */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p className="text-sm text-indigo-900">
              <span className="font-semibold">Requirements:</span> Minimum 6 characters, at least one letter
            </p>
          </div>

          {/* New Password */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiLockClosed className="mr-2 text-indigo-600" size={18} />
              New password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={e => setValues({ ...values, password: e.target.value })}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
              >
                {showPassword ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiLockClosed className="mr-2 text-indigo-600" size={18} />
              Confirm password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                name="password1"
                type={showPassword1 ? "text" : "password"}
                value={values.password1}
                onChange={e => setValues({ ...values, password1: e.target.value })}
                placeholder="••••••••"
                onKeyPress={e => e.key === "Enter" && send()}
              />
              <button
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
              >
                {showPassword1 ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
              </button>
            </div>
          </div>

          <LoadingButton
            loading={loading}
            onClick={send}
            className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50"
          >
            Reset password
          </LoadingButton>
        </div>
      </div>
    </div>
  )
}
