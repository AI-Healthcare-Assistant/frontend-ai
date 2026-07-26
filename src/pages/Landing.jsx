import React from "react";
import { HeartPulse, BrainCircuit, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-cyan-700">
          AI Healthcare Assistant
        </h1>
        <div className="flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-cyan-600">Home</Link>
          <button className="hover:text-cyan-600">Features</button>
          <Link to="/dashboard" className="hover:text-cyan-600">Dashboard</Link>
          <Link to="/voice" className="hover:text-cyan-600">Voice Assistant</Link>
          <button className="hover:text-cyan-600">Contact</button>
          <Link to="/login" className="px-5 py-2 border border-cyan-600 rounded-lg hover:bg-cyan-50">
            Login
          </Link>
          <Link to="/register" className="px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center">
        <div className="flex-1">
          <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full">
            Smart Healthcare Platform
          </span>
          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Your Personal
            <span className="text-cyan-600"> AI Healthcare </span>
            Assistant
          </h1>
          <p className="text-gray-600 text-lg mt-6 max-w-xl">
            Upload prescriptions, analyze medical reports,
            chat with AI, manage reminders, track your health,
            and access everything from one secure dashboard.
          </p>
          <div className="mt-8 space-x-5">
            <Link to="/register" className="bg-cyan-600 hover:bg-cyan-700 text-white px-7 py-3 rounded-xl shadow-lg">
              Get Started
            </Link>
            <button className="border border-cyan-600 text-cyan-700 px-7 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-12 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700"
            alt="Healthcare"
            className="rounded-3xl shadow-2xl w-[500px]"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-10 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 duration-300">
            <HeartPulse size={50} className="text-red-500" />
            <h3 className="font-bold text-2xl mt-5">
              Health Monitoring
            </h3>
            <p className="mt-3 text-gray-600">
              Track reports and monitor your overall health score.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 duration-300">
            <BrainCircuit size={50} className="text-purple-600" />
            <h3 className="font-bold text-2xl mt-5">
              AI Chatbot
            </h3>
            <p className="mt-3 text-gray-600">
              Ask medical questions and get AI powered responses.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 duration-300">
            <FileText size={50} className="text-blue-600" />
            <h3 className="font-bold text-2xl mt-5">
              OCR Reports
            </h3>
            <p className="mt-3 text-gray-600">
              Upload prescriptions and extract text automatically.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 duration-300">
            <ShieldCheck size={50} className="text-green-600" />
            <h3 className="font-bold text-2xl mt-5">
              Secure Data
            </h3>
            <p className="mt-3 text-gray-600">
              Your medical information is securely protected.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-700 text-white text-center py-6 mt-20">
        © 2026 AI Healthcare Assistant | Built with React + Vite + FastAPI
      </footer>
    </div>
  );
};

export default Landing;
