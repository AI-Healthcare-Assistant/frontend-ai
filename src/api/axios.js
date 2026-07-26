import axios from "axios";

const api = axios.create({
    // Set VITE_API_BASE_URL in Vercel for a different deployment target.
    baseURL: (import.meta.env.VITE_API_BASE_URL || "https://backend-of-ai-healthcare.onrender.com").replace(/\/$/, ""),
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default api;
