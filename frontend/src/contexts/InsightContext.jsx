// src/contexts/InsightContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react"; // <== tambahkan React
import { getInsightByUser } from "../services/insight";

const InsightContext = createContext();

export const InsightProvider = ({ children, userId }) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchInsights = async () => {
      try {
        setLoading(true);
        const data = await getInsightByUser(userId);
        setInsights(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [userId]);

  return (
    <InsightContext.Provider value={{ insights, loading, error, setInsights }}>
      {children}
    </InsightContext.Provider>
  );
};

export const useInsight = () => useContext(InsightContext);
