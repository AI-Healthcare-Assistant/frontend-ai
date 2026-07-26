import api from "./axios";

export const sendMessage = async (prompt, sessionId, token) => {
    const response = await api.post(
        "/api/v1/chatbot/message",
        {
            prompt,
            session_id: sessionId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const getSessions = async (token) => {
    const response = await api.get("/api/v1/chatbot/sessions", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const getMessages = async (sessionId, token) => {
    const response = await api.get(
        `/api/v1/chatbot/sessions/${sessionId}/messages`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const deleteSession = async (sessionId, token) => {
    const response = await api.delete(
        `/api/v1/chatbot/sessions/${sessionId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};