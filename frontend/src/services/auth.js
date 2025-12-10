import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk attach token otomatis
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Login user
 */
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { user, accessToken, refreshToken } = response.data?.data || {};

    if (!accessToken || !user) throw new Error("Login gagal, token/user tidak ditemukan");

    // Simpan token & refreshToken
    localStorage.setItem("token", accessToken); // gunakan accessToken
    localStorage.setItem("refreshToken", refreshToken);

    // Mapping displayName ke display_name untuk kompatibilitas FE lama
    const mappedUser = {
      ...user,
      display_name: user.displayName
    };

    return { user: mappedUser, token: accessToken, refreshToken };
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Login gagal";
    console.error("Login error:", message);
    throw new Error(message);
  }
};

/**
 * Register user
 */
export const register = async ({ displayName, name, email, password, phone, userRole }) => {
  try {
    const response = await api.post("/auth/register", {
      displayName,
      name,
      email,
      password,
      phone,
      userRole,
    });

    const { user, accessToken, refreshToken } = response.data?.data || {};

    if (!accessToken || !user) throw new Error("Register gagal, token/user tidak ditemukan");

    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    const mappedUser = {
      ...user,
      display_name: user.displayName
    };

    return { user: mappedUser, token: accessToken, refreshToken };
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Register gagal";
    console.error("Register error:", message);
    throw new Error(message);
  }
};

/**
 * Logout user
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};
