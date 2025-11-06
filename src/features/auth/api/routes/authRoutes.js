// src/features/auth/api/routes/authRoutes.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082/api';;

export const authRoutes = {
    LOGIN: `${API_BASE}/auth/login`, // POST - iniciar sesión
    REGISTER: `${API_BASE}/auth/register`   // POST - registrar un nuevo usuario
};