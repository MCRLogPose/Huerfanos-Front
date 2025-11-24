const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const claimRoutes = {
  CREATE: `${API_BASE}/claims`,                       // POST - crear reclamo
  GET_ALL: `${API_BASE}/claims`,                      // GET - listar reclamos
  MARK_REVIEWED: (id) => `${API_BASE}/claims/${id}/review`, // PUT - marcar como revisado
};
