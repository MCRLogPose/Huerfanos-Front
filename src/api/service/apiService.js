// src/api/service/apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8082/api",
  withCredentials: true, // 🔹 necesario si allowCredentials = true en backend
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Interceptor para agregar el token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // o sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
