import api from "@/api/service/apiService";
import { ratingRoutes } from "../routes";

export const ratingService = {
  // Agregar o quitar like
  toggleReaction: async (userId, productId, isLiked) => {
    const response = await api.post(ratingRoutes.TOGGLE_REACTION, null, {
      params: { userId, productId, isLiked },
    });
    return response.data;
  },

  // Eliminar completamente la reacción
  deleteReaction: async (userId, productId) => {
    const response = await api.delete(ratingRoutes.DELETE_REACTION, {
      params: { userId, productId },
    });
    return response.data;
  },

  // Contar likes por producto
  countLikes: async (productId) => {
    const response = await api.get(ratingRoutes.COUNT_LIKES(productId));
    return response.data;
  },

  // Ver si el usuario ya dio like
  hasLiked: async (userId, productId) => {
    const response = await api.get(ratingRoutes.CHECK_LIKED, {
      params: { userId, productId },
    });
    return response.data;
  },
};
