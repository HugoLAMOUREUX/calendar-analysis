import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import toast from "react-hot-toast";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

import LoadingButton from "../../components/LoadingButton";
import api from "../../services/api";

export default () => {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const send = async () => {
    setBtnLoading(true);
    try {
      if (!validator.isEmail(email)) return toast.error("Invalid email address");

      const { ok, data } = await api.post("/admin/forgot_password", { email });
      if (!ok) return toast.error(data?.message || "Error sending reset link");

      toast.success("Reset link sent!");
      setDone(true);
    } catch (e) {
      console.log(e);
      toast.error("An error occurred");
    } finally {
      setBtnLoading(false);
    }
  };

  if (done) {
    return (
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <HiCheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">Email sent!</h1>

          <p className="text-center text-gray-600 mb-6">A password reset link has been sent to your email address. Please check your inbox and follow the instructions.</p>

          <Link
            to="/auth"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-base font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all"
          >
            <HiArrowLeft className="h-5 w-5" />
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Forgot password?</h1>
        <p className="text-center text-gray-600 mb-6">Enter your email address below to receive a reset link.</p>

        <div className="space-y-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <HiMail className="mr-2 text-indigo-600" size={18} />
              Email address
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900 placeholder-gray-400"
              placeholder="admin@example.com"
            />
          </div>

          <LoadingButton
            loading={btnLoading}
            onClick={send}
            disabled={!email}
            className="w-full py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all disabled:opacity-50"
          >
            Send reset link
          </LoadingButton>

          <Link
            to="/auth"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <HiArrowLeft className="h-5 w-5" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
