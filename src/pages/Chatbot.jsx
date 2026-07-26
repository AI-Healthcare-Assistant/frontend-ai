import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendMessage as sendChatMessage } from "../api/chatbotapi";

const Chatbot = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! I am your AI Healthcare Assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const sendMessage = async () => {
    if (!prompt.trim()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setMessages((prev) => [...prev, { sender: "AI", text: "Please sign in first to use the healthcare assistant." }]);
      navigate("/login");
      return;
    }

    const userMessage = {
      sender: "You",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentPrompt = prompt;
    setPrompt("");

    try {
      setLoading(true);

      const response = await sendChatMessage(currentPrompt, sessionId, token);

      setSessionId(response.data.data.session_id);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: response.data.data.assistant_reply,
        },
      ]);
    } catch (error) {
      const status = error.response?.status;
      const detail = error.response?.data?.detail;
      console.error("Chatbot request failed:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: status === 401
            ? "Your session has expired. Please sign in again."
            : detail || "The AI assistant is temporarily unavailable. Please try again in a moment.",
        },
      ]);
      if (status === 401) navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-gray-50 p-4">

      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-cyan-800">AI Healthcare Assistant</h1>
        <div className="flex gap-3"><Link to="/dashboard" className="text-sm font-medium text-cyan-700 hover:underline">Dashboard</Link><Link to="/voice" className="text-sm font-medium text-purple-700 hover:underline">Voice Assistant</Link></div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col">

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "You"
                  ? "justify-end"
                  : "justify-start"
                }`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-2xl ${msg.sender === "You"
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-100 text-gray-800"
                  }`}
              >
                <strong>{msg.sender}</strong>

                <br />

                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-gray-500">
              AI is typing...
            </div>
          )}

        </div>

        <div className="border-t border-gray-200 p-4 flex gap-3">

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Type your medical question..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-cyan-600 text-white px-6 rounded-xl hover:bg-cyan-700"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Chatbot;
