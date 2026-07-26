import React, { useRef, useState } from "react";
import { submitVoiceQuery } from "../api/voiceapi";

const VoiceAssistant = () => {
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [status, setStatus] = useState("Tap the microphone and start speaking");
  const [result, setResult] = useState(null);
  const [recording, setRecording] = useState(false);

  const toggleRecording = async () => {
    if (recording) { recorderRef.current?.stop(); return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { setStatus("Voice recording is not supported in this browser."); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => { if (event.data.size) chunksRef.current.push(event.data); };
      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        setRecording(false); setStatus("Processing your question...");
        try {
          const response = await submitVoiceQuery(new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" }));
          setResult(response.data); setStatus("Done. Ask another question whenever you like.");
        } catch (error) { setStatus(error.response?.status === 401 ? "Please sign in to use the voice assistant." : "We could not process that recording. Please try again."); }
      };
      recorder.start(); recorderRef.current = recorder; setRecording(true); setResult(null); setStatus("Listening… tap again when you finish.");
    } catch { setStatus("Microphone permission was not granted."); }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto text-center mt-12">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">Voice Assistant</h1>
      <div className="bg-white p-12 rounded-full h-64 w-64 mx-auto flex items-center justify-center shadow-2xl border-4 border-cyan-100 mb-8">
        <button onClick={toggleRecording} aria-label={recording ? "Stop recording" : "Start recording"} className={`${recording ? "bg-red-600 hover:bg-red-700 animate-pulse" : "bg-cyan-600 hover:bg-cyan-700"} text-white rounded-full p-8 shadow-lg hover:scale-110 transition duration-300`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
      <p className="text-xl text-gray-600 font-medium">{status}</p>
      {result && <section className="mt-8 rounded-xl bg-white p-6 text-left shadow-md"><h2 className="font-semibold text-cyan-800">You said</h2><p className="mt-1 text-slate-700">{result.transcription}</p><h2 className="mt-4 font-semibold text-cyan-800">Assistant response</h2><p className="mt-1 text-slate-700">{result.reply}</p></section>}
    </div>
  );
};

export default VoiceAssistant;
