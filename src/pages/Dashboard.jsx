import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await api.get("/api/v1/dashboard");
        setSummary(response.data.data);
      } catch (requestError) {
        setError(requestError.response?.status === 401 ? "Please sign in to view your dashboard." : "Dashboard data could not be loaded.");
      }
    };
    loadDashboard();
  }, []);

  const stats = summary?.stats || {};
  const cards = [
    ["Medical reports", stats.total_reports ?? 0, "border-cyan-500", "text-cyan-600"],
    ["Prescriptions", stats.total_prescriptions ?? 0, "border-blue-500", "text-blue-600"],
    ["Active reminders", stats.active_reminders_count ?? 0, "border-purple-500", "text-purple-600"],
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div><h1 className="text-3xl font-bold text-cyan-800">Dashboard</h1><p className="mt-1 text-slate-600">Your healthcare overview</p></div>
        <div className="flex flex-wrap gap-3"><Link to="/upload-pdf" className="rounded-lg bg-cyan-600 px-4 py-2 font-medium text-white hover:bg-cyan-700">Upload report</Link><Link to="/medical-image" className="rounded-lg border border-cyan-600 bg-cyan-50 px-4 py-2 font-medium text-cyan-800 hover:bg-cyan-100">Medical Image</Link><Link to="/chatbot" className="rounded-lg border border-cyan-600 px-4 py-2 font-medium text-cyan-700 hover:bg-cyan-50">Ask AI</Link><Link to="/chat-history" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">History</Link><Link to="/voice" className="rounded-lg border border-purple-600 px-4 py-2 font-medium text-purple-700 hover:bg-purple-50">Voice</Link></div>
      </div>
      {error && <div role="alert" className="mb-6 rounded-lg bg-amber-50 p-4 text-amber-800">{error} <Link className="font-semibold underline" to="/login">Sign in</Link></div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(([label, value, border, text]) => <div key={label} className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${border}`}><h2 className="text-lg font-semibold text-gray-700">{label}</h2><p className={`text-4xl font-bold mt-4 ${text}`}>{value}</p></div>)}
      </div>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/medical-image" className="rounded-xl bg-white p-5 shadow-sm hover:ring-2 hover:ring-cyan-400"><h2 className="font-semibold text-cyan-800">Medical Image Upload</h2><p className="mt-1 text-sm text-slate-600">Analyze X-rays and clinical images.</p></Link>
        <Link to="/health-summary" className="rounded-xl bg-white p-5 shadow-sm hover:ring-2 hover:ring-cyan-400"><h2 className="font-semibold text-cyan-800">Health Summary & RAG</h2><p className="mt-1 text-sm text-slate-600">Ask questions about your reports.</p></Link>
        <Link to="/reminders" className="rounded-xl bg-white p-5 shadow-sm hover:ring-2 hover:ring-cyan-400"><h2 className="font-semibold text-cyan-800">Medicine Reminders</h2><p className="mt-1 text-sm text-slate-600">Set medicine time and frequency.</p></Link>
        <Link to="/chat-history" className="rounded-xl bg-white p-5 shadow-sm hover:ring-2 hover:ring-cyan-400"><h2 className="font-semibold text-cyan-800">Chat History</h2><p className="mt-1 text-sm text-slate-600">Review saved AI conversations.</p></Link>
      </section>
      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm"><h2 className="text-xl font-semibold text-slate-800">Upcoming reminders</h2>{summary?.upcoming_reminders?.length ? <ul className="mt-4 divide-y">{summary.upcoming_reminders.map((reminder) => <li key={reminder.id} className="py-3"><span className="font-medium">{reminder.title}</span><span className="ml-3 text-slate-500">{reminder.time}</span></li>)}</ul> : <p className="mt-3 text-slate-500">No active reminders yet.</p>}</section>
      </div>
    </main>
  );
};

export default Dashboard;
