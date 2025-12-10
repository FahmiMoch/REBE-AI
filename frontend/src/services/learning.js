// src/services/learning.js
import api from "./api";

export const getLearningStatistics = async () => {
  try {
    const response = await api.get("/dashboard/statistics");
    return response.data;
  } catch (error) {
    console.error(
      "getLearningStatistics error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const predictML = async (payload) => {
  try {
    const response = await api.post("/ml/predict", payload);
    return response.data;
  } catch (error) {
    console.error(
      "predictML error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
