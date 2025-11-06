// File: src/features/auth/api/routes/roleRoutes.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082/api';;

export const roleRoutes = {
  BASE: `${API_BASE}/roles`,
  byId: (id) => `${API_BASE}/roles/${id}`,
};