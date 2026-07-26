import React, { useState } from "react";
import { Link } from "react-router-dom";
import { analyzeMedicalImage } from "../api/healthapi";

export default function MedicalImage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    if (!file) return setError("Choose a JPG, JPEG or PNG medical image first.");
    setError(""); setLoading(true); setResult(null);
    try { setResult(await analyzeMedicalImage(file)); }
    catch (requestError) { setError(requestError.response?.data?.detail || "Image analysis could not be completed. Please sign in and try again."); }
    finally { setLoading(false); }
  };
  return <main className="min-h-screen bg-slate-50 p-6"><div className="mx-auto max-w-3xl"><Link to="/dashboard" className="text-sm font-medium text-cyan-700 hover:underline">← Dashboard</Link><h1 className="mt-3 text-3xl font-bold text-cyan-800">Medical Image Upload</h1><p className="mt-2 text-slate-600">Upload an X-ray, scan, or clinical image for an AI-assisted explanation. This is not a diagnosis.</p><section className="mt-6 rounded-2xl bg-white p-6 shadow-sm"><input type="file" accept=".png,.jpg,.jpeg,image/png,image/jpeg" onChange={(event) => setFile(event.target.files?.[0] || null)} className="w-full rounded-lg border p-3" />{file && <p className="mt-3 text-sm text-slate-600">Selected: {file.name}</p>}{error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}<button onClick={submit} disabled={loading} className="mt-5 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white disabled:opacity-60">{loading ? "Analyzing image…" : "Analyze image"}</button></section>{result?.data && <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-semibold text-cyan-800">Analysis</h2><p className="mt-3 whitespace-pre-wrap text-slate-700">{result.data.analysis}</p><p className="mt-5 text-sm text-slate-500">Please discuss images, symptoms, and treatment decisions with a qualified clinician.</p></section>}</div></main>;
}
