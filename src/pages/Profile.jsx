import api from "../api/axios";
import React from "react";

const Profile = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">My Profile</h1>
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <div className="flex items-center gap-6 mb-8 border-b pb-8">
          <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 text-3xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Age</label>
            <p className="text-lg font-medium text-gray-800">32</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Blood Group</label>
            <p className="text-lg font-medium text-gray-800">O+</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Weight</label>
            <p className="text-lg font-medium text-gray-800">75 kg</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">Height</label>
            <p className="text-lg font-medium text-gray-800">180 cm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
