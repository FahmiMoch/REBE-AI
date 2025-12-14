import axios from "./api"; // pakai instance axios global kalau ada

// ===================================================
// Record study duration untuk journey tertentu
// ===================================================
export const recordStudyDuration = async (journeyId, durationInSeconds) => {
  try {
    const res = await axios.post(`/journeys/${journeyId}/study-duration`, {
      duration: durationInSeconds,
    });
    return res.data;
  } catch (err) {
    console.error("Failed to record study duration:", err);
    return null;
  }
};

// ===================================================
// Get all journeys
// ===================================================
export const getJourneys = async () => {
  try {
    const res = await axios.get("/journeys");
    return res.data.data || [];
  } catch (err) {
    console.error("Failed to fetch journeys:", err);
    return [];
  }
};

// ===================================================
// Get all tutorials for a journey
// ===================================================
export const getJourneyTutorials = async (journeyId) => {
  try {
    const res = await axios.get(`/journeys/${journeyId}/tutorials`);
    return res.data.data || [];
  } catch (err) {
    console.error("Failed to fetch tutorials:", err);
    return [];
  }
};
