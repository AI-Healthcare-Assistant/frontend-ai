import axios from "axios";

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend-of-ai-healthcare.onrender.com";

// The API clients already include `/api/v1` in their paths.  Keep this value
// at the backend origin; an accidental `/health` or `/api/v1` suffix breaks all requests.
const api = axios.create({
    // Set VITE_API_BASE_URL in Vercel for a different deployment target.
    baseURL: configuredBaseUrl.replace(/\/(api\/v1|api\/v1\/health|health)\/?$/, "").replace(/\/$/, ""),
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
