import api from "./axios";

export const analyzeMedicalImage = async (file) => {
  const form = new FormData();
  form.append("file", file);
  return (await api.post("/api/v1/medical_image/analyze", form, { headers: { "Content-Type": "multipart/form-data" } })).data;
};

export const getReports = async () => (await api.get("/api/v1/reports")).data;
export const askReportQuestion = async (question) => (await api.post("/api/v1/rag/query", { question })).data;
export const ingestReport = async (reportId) => (await api.post(`/api/v1/rag/ingest/${reportId}`)).data;

export const getReminders = async () => (await api.get("/api/v1/reminder")).data;
export const createReminder = async (reminder) => (await api.post("/api/v1/reminder", reminder)).data;
export const deleteReminder = async (id) => (await api.delete(`/api/v1/reminder/${id}`)).data;
