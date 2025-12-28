import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { HiCamera, HiTrash } from "react-icons/hi2"

import useStore from "@/services/store"
import api from "@/services/api"
import Loader from "@/components/loader"
import FileInput from "@/components/file-input"

function Avatar({ value, onChange, name }) {
  const handleDelete = () => {
    onChange({ target: { value: "", name } })
    toast.success("Avatar deleted")
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 bg-gray-100">
        {value ? (
          <img className="w-full h-full object-cover" src={value} alt="avatar" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <HiCamera className="w-8 h-8" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <FileInput
          value={value}
          onChange={onChange}
          name={name}
          folder="avatars"
          multiple={false}
          buttonText={value ? "Change avatar" : "Add avatar"}
          buttonClassName="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors disabled:opacity-50"
        />
        {value && (
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
          >
            <HiTrash className="w-4 h-4" />
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default function Account() {
  const { user, setUser } = useStore()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    avatar: ""
  })

  useEffect(() => {
    if (user) {
      setValues({
        name: user.name || "",
        email: user.email || "",
        avatar: user.avatar || ""
      })
    }
  }, [user])

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { ok, data } = await api.put("/user", values)
      if (!ok) throw new Error()
      setUser(data)
      toast.success("Profile updated successfully!")
    } catch (e) {
      console.error(e)
      toast.error("Error updating profile")
    } finally {
      setLoading(false)
    }
  }

  if (!user) return <Loader />

  return (
    <div className="h-full p-8 overflow-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Information Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Avatar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
                <Avatar
                  value={values.avatar}
                  name="avatar"
                  onChange={e => {
                    console.log(e.target.value)
                    setValues({ ...values, avatar: e.target.value })
                  }}
                />
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <FiUser className="mr-2 text-indigo-600" size={18} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <FiMail className="mr-2 text-indigo-600" size={18} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-base font-semibold text-white transition-all bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving..." : "Save changes"}
                </button>
              </div>
            </form>
          </div>

          {/* Password Section */}
          <PasswordSection />
        </div>
      </div>
    </div>
  )
}

function PasswordSection() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    password: "",
    newPassword: "",
    verifyPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (values.newPassword !== values.verifyPassword) {
      return toast.error("Passwords do not match")
    }
    if (values.newPassword.length < 6) {
      return toast.error("Password must contain at least 6 characters")
    }
    setLoading(true)
    try {
      const { ok } = await api.post("/user/reset_password", values)
      if (!ok) throw new Error()
      toast.success("Password updated successfully!")
      setValues({ password: "", newPassword: "", verifyPassword: "" })
    } catch (e) {
      console.error(e)
      toast.error("Error updating password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <FiLock className="mr-2 text-indigo-600" size={20} />
        Change password
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
            <input
              type="password"
              name="newPassword"
              value={values.newPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm new password</label>
            <input
              type="password"
              name="verifyPassword"
              value={values.verifyPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
            />
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading || !values.password || !values.newPassword || !values.verifyPassword}
            className="w-full py-3 rounded-lg text-base font-semibold text-white transition-all bg-gray-800 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update password"}
          </button>
        </div>
      </form>
    </div>
  )
}
