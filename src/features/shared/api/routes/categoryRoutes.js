const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const categoryRoutes = {
  GET_ALL: `${API_BASE}/categories`,        // GET - listar todas las categorías
  GET_BY_ID: (id) => `${API_BASE}/categories/${id}`,  // GET - obtener categoría por id
  CREATE: `${API_BASE}/categories`,         // POST - crear nueva categoría
  UPDATE: (id) => `${API_BASE}/categories/${id}`,     // PUT - actualizar categoría
  DELETE: (id) => `${API_BASE}/categories/${id}`,     // DELETE - eliminar categoría
};
