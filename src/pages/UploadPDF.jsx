import React, { useState } from "react";
import { uploadFile } from "../api/uploadapi";

const UploadPDF = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {
        if (!file || file.type !== "application/pdf") {
            alert("Please select a valid PDF file.");
            return;
        }

        try {
            setLoading(true);

            const data = await uploadFile(file);
            setResult(data);

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.detail || "Upload failed. Please sign in and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl">

                <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center">
                    Upload Medical PDF
                </h1>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full border p-3 rounded-lg"
                />
                {file && <p className="mt-3 text-sm text-slate-600">Selected: {file.name} ({Math.ceil(file.size / 1024)} KB)</p>}

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="w-full mt-5 bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700"
                >
                    {loading ? "Uploading..." : "Upload PDF"}
                </button>

                {result && (
                    <div className="mt-6 bg-gray-100 rounded-lg p-4">
                        <h2 className="font-bold text-lg mb-2">Upload Result</h2>

                        <p>
                            <strong>Filename:</strong>{" "}
                            {result.data?.filename}
                        </p>

                        <p>
                            <strong>File URL:</strong>{" "}
                            {result.data?.file_url ? `${import.meta.env.VITE_API_BASE_URL || "https://backend-of-ai-healthcare.onrender.com"}${result.data.file_url}` : "-"}
                        </p>

                        <p>
                            <strong>Path:</strong>{" "}
                            {result.data?.relative_path}
                        </p>
                    </div>
                )}

            </div>

        </div>
    );
};

export default UploadPDF;
