import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi2";

import Loader from "../../components/Loader";
import LoadingButton from "../../components/LoadingButton";
import TabItem from "../../components/TabItem";

import api from "../../services/api";

const INFORMATION = "INFORMATION";
const RAW_DATA = "RAW_DATA";

export default function UserView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [tab, setTab] = useState(INFORMATION);

  useEffect(() => {
    get();
  }, [id]);

  const get = async () => {
    try {
      const { data, ok } = await api.get(`/user/${id}`);
      if (!ok) return toast.error("Error fetching user");
      setUser(data);
    } catch (e) {
      console.log(e);
      toast.error("Error fetching user");
    }
  };

  if (!user) return <Loader />;

  return (
    <div className="p-6 space-y-6">
      <button onClick={() => navigate("/user")} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
        <HiArrowLeft className="h-4 w-4" />
        Back to Users
      </button>

      <nav className="flex items-center gap-2">
        <TabItem tab={INFORMATION} title="Information" setTab={setTab} active={tab === INFORMATION} />
        <TabItem tab={RAW_DATA} title="Raw Data" setTab={setTab} active={tab === RAW_DATA} />
      </nav>

      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        {tab === INFORMATION && <Information user={user} setUser={setUser} />}
        {tab === RAW_DATA && <RawData user={user} />}
      </div>
    </div>
  );
}

function Information({ user, setUser }) {
  const navigate = useNavigate();
  const [values, setValues] = useState(user);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    setValues(user);
  }, [user]);

  const onUpdate = async () => {
    setBtnLoading(true);
    try {
      const { data, ok } = await api.put(`/user/${user._id}`, values);
      if (!ok) return toast.error("Error updating user");
      toast.success("Updated!");
      setUser(data);
    } catch (e) {
      console.log(e);
      toast.error("Error updating user");
    } finally {
      setBtnLoading(false);
    }
  };

  const onDelete = async () => {
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;

    try {
      const { ok } = await api.remove(`/user/${user._id}`);
      if (!ok) return toast.error("Error deleting user");
      toast.success("Deleted!");
      navigate("/user");
    } catch (e) {
      console.log(e);
      toast.error("Error deleting user");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            value={values.name || ""}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            value={values.email || ""}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            value={values.role || "user"}
            onChange={(e) => setValues({ ...values, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="client">Client</option>
          </select>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Login</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 cursor-not-allowed"
            value={values.last_login_at ? new Date(values.last_login_at).toLocaleString() : "Never"}
            disabled
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Created At</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 cursor-not-allowed"
            value={values.created_at ? new Date(values.created_at).toLocaleString() : "—"}
            disabled
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
        <LoadingButton
          className="py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all"
          loading={btnLoading}
          onClick={() => onUpdate()}
        >
          Update
        </LoadingButton>

        <button className="py-2 px-4 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

function RawData({ user }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <pre className="break-all whitespace-pre-wrap text-sm text-gray-800">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
