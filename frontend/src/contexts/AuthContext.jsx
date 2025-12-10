import React, { createContext, useContext, useState, useEffect } from "react";
import { logout as logoutService } from "../services/auth"; // pastikan path benar

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Jika ada token, kita bisa set user sebagai logged-in secara sederhana
      setUser({ token }); // opsional, bisa disesuaikan dengan data user dari login
    }
    setLoading(false);
  }, []);

  const login = (userData) => setUser(userData);

  const logout = () => {
    logoutService(); // Hapus token dari localStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
