import api from "./axios";

// Register
export const registerUser = async (userData) => {
    const response = await api.post("/api/v1/auth/register", userData);
    return response.data;
};

// Login
export const loginUser = async (loginData) => {
    const response = await api.post("/api/v1/auth/login", loginData);
    return response.data;
};

// Request OTP
export const requestOTP = async (email) => {
    const response = await api.post("/api/v1/auth/otp/request", {
        email,
    });
    return response.data;
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
    const response = await api.post("/api/v1/auth/otp/verify", {
        email,
        otp,
    });
    return response.data;
};