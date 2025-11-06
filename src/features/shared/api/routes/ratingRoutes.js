const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const ratingRoutes = {
  TOGGLE_REACTION: `${API_BASE}/ratings/react`,          // POST - agregar o quitar like
  DELETE_REACTION: `${API_BASE}/ratings/remove`,          // DELETE - eliminar reacción completamente
  COUNT_LIKES: (productId) => `${API_BASE}/ratings/count/${productId}`, // GET - contar likes por producto
  CHECK_LIKED: `${API_BASE}/ratings/check`,               // GET - verificar si el usuario dio like
};
