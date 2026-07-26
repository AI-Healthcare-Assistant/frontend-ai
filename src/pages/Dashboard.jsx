import api from "../api/axios";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-500">
          <h2 className="text-xl font-semibold text-gray-700">Health Score</h2>
          <p className="text-4xl font-bold text-cyan-600 mt-4">85/100</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-700">Recent Reports</h2>
          <p className="text-4xl font-bold text-blue-600 mt-4">3 New</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
          <h2 className="text-xl font-semibold text-gray-700">Upcoming Reminders</h2>
          <p className="text-4xl font-bold text-purple-600 mt-4">2 Meds</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
