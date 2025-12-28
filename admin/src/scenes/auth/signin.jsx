import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiLockClosed, HiEye, HiEyeSlash } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

import useStore from "../../store";
import api from "../../services/api";
import LoadingButton from "../../components/LoadingButton";

export default () => {
  const { user, setUser } = useStore();
  const [seePassword, setSeePassword] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { ok, data, user, token } = await api.post(`/admin/signin`, values);
      if (!ok) {
        toast.error(data.message || "Sign in error");
        setBtnLoading(false);
        return;
      }

      if (token) api.setToken(token);
      if (user) setUser(user);
    } catch (e) {
      console.error(e);
      toast.error("An error occurred");
    } finally {
      setBtnLoading(false);
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Admin Panel</h1>
        <p className="text-center text-gray-600 mb-6">Sign in to your admin account</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 placeholder-gray-400"
              placeholder="admin@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <HiLockClosed className="mr-2 text-indigo-600" size={18} />
                Password
              </label>
              <Link className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors" to="/auth/forgot">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                placeholder="••••••••"
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

          <LoadingButton
            loading={btnLoading}
            className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!values?.email || !values?.password}
            type="submit"
          >
            Sign in
          </LoadingButton>
        </form>
      </div>
    </div>
  );
};
