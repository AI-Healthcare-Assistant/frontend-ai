import api from "./axios";

export const submitVoiceQuery = async (audioBlob) => {
  const formData = new FormData();
  formData.append("file", audioBlob, "voice-question.webm");
  const response = await api.post("/api/v1/voice/query-voice", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
