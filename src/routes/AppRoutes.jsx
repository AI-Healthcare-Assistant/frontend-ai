import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Chatbot from "../pages/Chatbot";
import VoiceAssistant from "../pages/VoiceAssistant";
import UploadPDF from "../pages/UploadPDF";   // 👈 Add this
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import MedicalImage from "../pages/MedicalImage";
import HealthSummary from "../pages/HealthSummary";
import Reminders from "../pages/Reminders";
import ChatHistory from "../pages/ChatHistory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/upload-pdf" element={<UploadPDF />} />

      <Route path="/chatbot" element={<Chatbot />} />

      <Route path="/voice" element={<VoiceAssistant />} />

      <Route path="/medical-image" element={<MedicalImage />} />

      <Route path="/health-summary" element={<HealthSummary />} />

      <Route path="/reminders" element={<Reminders />} />

      <Route path="/chat-history" element={<ChatHistory />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
