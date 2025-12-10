// src/services/insight.js
import api from "./api";

/**
 * Ambil semua insight (opsional, admin) 
 * @returns {Promise<Array>} list insight
 */
export const getAllInsights = async () => {
  try {
    const response = await api.get("/insights");
    return response.data;
  } catch (error) {
    console.error("getAllInsights error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Ambil insight berdasarkan user_id
 * @param {string | number} userId
 * @returns {Promise<Object>} insight + recommendation
 */
export const getInsightByUser = async (userId) => {
  try {
    const response = await api.get(`/insights/${userId}`);
    return response.data;
  } catch (error) {
    console.error("getInsightByUser error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * Submit atau update insight
 * @param {string | number} userId
 * @param {Object} payload
 * @returns {Promise<Object>} updated insight
 */
export const submitInsight = async (userId, payload) => {
  try {
    const response = await api.post(`/insights/${userId}`, payload);
    return response.data;
  } catch (error) {
    console.error("submitInsight error:", error.response?.data || error.message);
    throw error;
  }
};
