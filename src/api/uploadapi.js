import api from "./axios";

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/api/v1/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const uploadAndAnalyzePdf = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await api.post("/api/v1/pdf/analyze-file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};
