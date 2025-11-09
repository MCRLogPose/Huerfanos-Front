import api from "@/api/service/apiService";
import { userRoutes } from "../routes";

export const userService = {
  // Obtener el usuario autenticado
  getCurrentUser: async () => {
    try {
      const response = await api.get(userRoutes.GET_ME);
      return response.data;
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Controla internamente
        console.info("No hay sesión activa (desde userService).");
        return null;
      }
      // Si es otro tipo de error, propágalo
      throw err;
    }
  },

  // Obtener todos los usuarios (solo ADMIN)
  getAllUsers: async () => {
    const response = await api.get(userRoutes.GET_ALL);
    return response.data;
  },

  // Obtener usuario por ID
  getUserById: async (id) => {
    const response = await api.get(userRoutes.GET_BY_ID(id));
    return response.data;
  },

  // Actualizar usuario
  updateUser: async (id, data) => {
    const response = await api.put(userRoutes.UPDATE(id), data);
    return response.data;
  },

  // Activar o desactivar usuario
  toggleActive: async (id) => {
    const response = await api.patch(userRoutes.TOGGLE_ACTIVE(id));
    return response.status === 204; // No Content → true si la operación fue exitosa
  },

  // Eliminar usuario
  deleteUser: async (id) => {
    const response = await api.delete(userRoutes.DELETE(id));
    return response.status === 204;
  },
};
