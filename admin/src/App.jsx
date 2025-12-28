import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import * as Sentry from "@sentry/browser";

import Loader from "./components/Loader";
import Navbar from "./components/NavBar";

import Auth from "./scenes/auth";
import Account from "./scenes/account";
import Dasboard from "./scenes/dasboard";
import User from "./scenes/user";
import Admin from "./scenes/admin";

import api from "./services/api";
import useStore from "./store";
import { ENVIRONMENT, SENTRY_URL } from "./config";

import "./index.css";

if (ENVIRONMENT === "production" && SENTRY_URL) Sentry.init({ dsn: SENTRY_URL, environment: "admin" });

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/*" element={<Auth />} />
        </Route>

        <Route element={<UserLayout />}>
          <Route path="/" element={<Dasboard />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AuthLayout = () => {
  const { user } = useStore();
  if (user) return <Navigate to="/" replace={true} />;
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-screen h-screen">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <Outlet />
    </div>
  );
};

const UserLayout = () => {
  const [loading, setLoading] = useState(true);
  const { user, setUser, isNavCollapsed } = useStore();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { ok, token, user } = await api.get("/admin/signin_token");
      if (!ok) {
        setUser(null);
        return;
      }
      api.setToken(token);
      setUser(user);
    } catch (e) {
      console.log(e);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/auth" replace={true} />;

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className={`flex-1 h-full overflow-auto bg-gray-50 transition-all duration-300 ${isNavCollapsed ? "lg:ml-20" : "lg:ml-64"}`}>
        <Outlet />
      </main>
    </div>
  );
};
