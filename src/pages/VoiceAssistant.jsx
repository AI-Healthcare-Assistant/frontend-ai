import React from "react";

const VoiceAssistant = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto text-center mt-12">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">Voice Assistant</h1>
      <div className="bg-white p-12 rounded-full h-64 w-64 mx-auto flex items-center justify-center shadow-2xl border-4 border-cyan-100 mb-8">
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-8 shadow-lg hover:scale-110 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
      <p className="text-xl text-gray-600 font-medium">Tap the microphone and start speaking</p>
    </div>
  );
};

export default VoiceAssistant;
