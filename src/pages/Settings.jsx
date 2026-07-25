import React from "react";

const Settings = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">Settings</h1>
      <div className="bg-white rounded-2xl shadow-md divide-y divide-gray-100 border border-gray-100">
        <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Notifications</h3>
            <p className="text-gray-500 text-sm">Manage your email and push notifications</p>
          </div>
          <button className="text-cyan-600 font-medium">Edit</button>
        </div>
        <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Privacy & Security</h3>
            <p className="text-gray-500 text-sm">Manage your password and security questions</p>
          </div>
          <button className="text-cyan-600 font-medium">Edit</button>
        </div>
        <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Connected Devices</h3>
            <p className="text-gray-500 text-sm">Manage your smart watches and health trackers</p>
          </div>
          <button className="text-cyan-600 font-medium">Edit</button>
        </div>
        <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
          <div>
            <h3 className="font-semibold text-red-600 text-lg">Delete Account</h3>
            <p className="text-red-400 text-sm">Permanently delete your account and all data</p>
          </div>
          <button className="text-red-600 font-medium border border-red-200 px-4 py-1 rounded hover:bg-red-50">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
