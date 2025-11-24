import api from "@/api/service/apiService"; // axios configurado
import { claimRoutes } from "../routes";
import axios from "axios";

export const claimService = {
  // Crear un reclamo con imágenes (form-data)
  create: async ({ userId, orderId, description, images }) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("orderId", orderId);
    formData.append("description", description);

    if (images && images.length > 0) {
      images.forEach((file) => formData.append("images", file));
    }

    const response = await api.post(claimRoutes.CREATE, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  },

  // Obtener todos los reclamos
  getAll: async () => {
    const response = await api.get(claimRoutes.GET_ALL);
    return response.data;
  },

  // Obtener y flitrar de getAll los reclamos con estado pending
  getPendingClaims: async (s) => {
    const response = await api.get(claimRoutes.GET_ALL);
    return response.data.filter((claim) => claim.status === s );
  },

  // Obtener y flitrar de getAll los reclamos con estado reviewed
  getReviewedClaims: async () => {
    const response = await api.get(claimRoutes.GET_ALL);
    return response.data.filter((claim) => claim.status === "reviewed");
  },

  // Marcar reclamo como revisado
  markReviewed: async (id) => {
    const response = await api.put(claimRoutes.MARK_REVIEWED(id));
    return response.data;
  },
};
