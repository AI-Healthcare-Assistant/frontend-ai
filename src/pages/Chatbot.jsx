import React from "react";

const Chatbot = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-cyan-800 mb-4">AI Healthcare Assistant</h1>
      <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">AI</div>
            <div className="bg-cyan-50 text-gray-800 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
              Hello! I am your AI Healthcare Assistant. How can I help you today?
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-4">
          <input type="text" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Type your medical query here..." />
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-200">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
