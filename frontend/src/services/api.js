import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // pakai env saja
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor → auto nambah token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor → handle error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default api;
