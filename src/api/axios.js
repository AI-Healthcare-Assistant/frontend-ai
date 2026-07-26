import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-ai-ezi0.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;