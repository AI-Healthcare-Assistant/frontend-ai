import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-of-ai-healthcare.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        console.log("API Request:", config.url);
        console.log("Data:", config.data);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


api.interceptors.response.use(
    (response) => {
        console.log("API Response:", response.data);
        return response;
    },
    (error) => {
        console.log("API Error:", error.response);
        return Promise.reject(error);
    }
);


export default api;
