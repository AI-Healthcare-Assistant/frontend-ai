import React, { useState } from "react";
import api from "../api/axios";

const UploadPDF = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a PDF file.");
            return;
        }

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const formData = new FormData();
            formData.append("file", file);

            const response = await api.post(
                "/api/v1/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);
            setResult(response.data);

            alert("PDF Uploaded Successfully");

        } catch (error) {
            console.error(error);
            alert("Upload Failed");
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
                            {result.data?.file_url}
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