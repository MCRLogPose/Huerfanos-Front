const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const userRoutes = {
  GET_ME: `${API_BASE}/users/me`,                       // GET - obtener usuario autenticado
  GET_ALL: `${API_BASE}/users`,                         // GET - listar todos los usuarios (solo ADMIN)
  GET_BY_ID: (id) => `${API_BASE}/users/${id}`,          // GET - obtener usuario por ID (solo ADMIN)
  UPDATE: (id) => `${API_BASE}/users/${id}`,             // PUT - actualizar usuario
  TOGGLE_ACTIVE: (id) => `${API_BASE}/users/${id}/activate`, // PATCH - activar/desactivar usuario (solo ADMIN)
  DELETE: (id) => `${API_BASE}/users/${id}`,             // DELETE - eliminar usuario (solo ADMIN)
};
