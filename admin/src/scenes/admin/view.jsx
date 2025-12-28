import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi2";

import Loader from "../../components/Loader";
import LoadingButton from "../../components/LoadingButton";
import TabItem from "../../components/TabItem";

import api from "../../services/api";
import useStore from "../../store";

const INFORMATION = "INFORMATION";
const RAW_DATA = "RAW_DATA";

export default function AdminView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState();
  const [tab, setTab] = useState(INFORMATION);

  useEffect(() => {
    getAdmin();
  }, [id]);

  const getAdmin = async () => {
    try {
      const { data, ok } = await api.get(`/admin/${id}`);
      if (!ok) return toast.error("Error fetching admin's data");
      setAdmin(data);
    } catch (e) {
      toast.error("Error fetching admin's data");
    }
  };

  if (!admin) return <Loader />;

  return (
    <div className="p-6 space-y-6">
      <button onClick={() => navigate("/admin")} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
        <HiArrowLeft className="h-4 w-4" />
        Back to Admins
      </button>

      <nav className="flex items-center gap-2">
        <TabItem tab={INFORMATION} title="Information" setTab={setTab} active={tab === INFORMATION} />
        <TabItem tab={RAW_DATA} title="Raw Data" setTab={setTab} active={tab === RAW_DATA} />
      </nav>

      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        {tab === INFORMATION && <Information admin={admin} setAdmin={setAdmin} />}
        {tab === RAW_DATA && <RawData admin={admin} />}
      </div>
    </div>
  );
}

function Information({ admin, setAdmin }) {
  const { user } = useStore();
  const navigate = useNavigate();
  const [values, setValues] = useState(admin);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValues(admin);
  }, [admin]);

  const onUpdate = async () => {
    setLoading(true);
    try {
      const { data, ok } = await api.put(`/admin/${admin._id}`, values);
      if (!ok) throw new Error();
      setAdmin(data);
      toast.success("Updated successfully!");
    } catch (e) {
      toast.error("Error updating admin");
    }
    setLoading(false);
  };

  const onDelete = async () => {
    if (user?._id === admin._id) {
      return toast.error("Admins cannot delete their own accounts");
    }

    if (!confirm("Are you sure you want to delete this admin? This action cannot be undone.")) return;

    try {
      const { ok } = await api.remove(`/admin/${admin._id}`);
      if (!ok) throw new Error();
      toast.success("Admin deleted successfully!");
      navigate("/admin");
    } catch (e) {
      toast.error("Error deleting admin");
    }
  };

  const isPending = admin.invitation_token && admin.invitation_expires && new Date(admin.invitation_expires) > new Date();
  const isExpired = admin.invitation_token && admin.invitation_expires && new Date(admin.invitation_expires) <= new Date();

  return (
    <div className="space-y-6">
      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <div className="flex items-center gap-2">
              {isPending && <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">Pending Invitation</span>}
              {isExpired && <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Invitation Expired</span>}
              {!isPending && !isExpired && <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">Active</span>}
            </div>
          </div>
          {isPending && admin.invitation_expires && (
            <div className="text-right">
              <label className="block text-sm font-medium text-gray-700 mb-2">Invitation Expires</label>
              <span className="text-sm text-gray-600">{new Date(admin.invitation_expires).toLocaleString()}</span>
            </div>
          )}
          {isExpired && admin.invitation_expires && (
            <div className="text-right">
              <label className="block text-sm font-medium text-gray-700 mb-2">Invitation Expired</label>
              <span className="text-sm text-red-600">{new Date(admin.invitation_expires).toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            value={values.email || ""}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
        <LoadingButton
          loading={loading}
          onClick={onUpdate}
          className="py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all"
        >
          Update
        </LoadingButton>
        <button
          onClick={onDelete}
          disabled={user?._id === admin._id}
          className="py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function RawData({ admin }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <pre className="whitespace-pre-wrap break-words text-sm text-gray-800">{JSON.stringify(admin, null, 2)}</pre>
    </div>
  );
}
