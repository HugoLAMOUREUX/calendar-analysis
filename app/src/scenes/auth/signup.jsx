import React, { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import toast from "react-hot-toast"
import validator from "validator"
import { HiLockClosed, HiEye, HiEyeSlash, HiUser } from "react-icons/hi2"
import { HiMail } from "react-icons/hi"

import api from "@/services/api"
import useStore from "@/services/store"

export default function Signup() {
  const location = useLocation()
  const [values, setValues] = useState({ email: "", password: "", name: "" })
  const [loading, setLoading] = useState(false)
  const [seePassword, setSeePassword] = useState(false)
  const { setUser } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.email) {
      setValues(prev => ({ ...prev, email: location.state.email }))
    }
  }, [location.state])

  const handleSubmit = async e => {
    e.preventDefault()

    if (!values.name || !values.email || !values.password) return toast.error("Please fill in all fields")

    if (!validator.isEmail(values.email)) return toast.error("Invalid email address")

    if (values.password.length < 6) return toast.error("Password must contain at least 6 characters")

    setLoading(true)
    try {
      const { ok, user, token } = await api.post("/user/signup", values)

      if (!ok) return toast.error("This email address is already in use")

      if (token) api.setToken(token)
      if (user) setUser(user)

      toast.success("Account created successfully!")
      navigate("/")
    } catch (e) {
      console.error(e)
      toast.error(e.code || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Create an account</h1>
        <p className="text-center text-gray-600 mb-6">Join us now</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiUser className="mr-2 text-indigo-600" size={18} />
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 placeholder-gray-400"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiMail className="mr-2 text-indigo-600" size={18} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 placeholder-gray-400"
              placeholder="example@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiLockClosed className="mr-2 text-indigo-600" size={18} />
              Password
            </label>
            <div className="relative">
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={e => setValues({ ...values, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                placeholder="••••••••"
                onKeyPress={e => e.key === "Enter" && handleSubmit(e)}
              />
              <button
                type="button"
                onClick={() => setSeePassword(!seePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
              >
                {seePassword ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">Minimum 6 characters</p>
          </div>

          <button
            type="submit"
            disabled={loading || !values.name || !values.email || !values.password}
            className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Creating...</span>
              </div>
            ) : (
              "Create my account"
            )}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/auth" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
