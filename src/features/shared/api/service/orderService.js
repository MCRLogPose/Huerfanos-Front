import api from "@/api/service/apiService"; // instancia de axios
import { orderRoutes } from "../routes/orderRoutes";

export const orderService = {
  // Crear una nueva orden
  create: async (userId, items, paymentMethod) => {
    const payload = {
      items,
      paymentMethod,
    };
    const response = await api.post(orderRoutes.CREATE(userId), payload);
    return response.data;
  },

  // Obtener todas las órdenes
  getAll: async () => {
    const response = await api.get(orderRoutes.GET_ALL);
    return response.data;
  },

  // Obtener órdenes por usuario
  getByUser: async (userId) => {
    const response = await api.get(orderRoutes.GET_BY_USER(userId));
    return response.data;
  },

  // Obtener una orden por ID
  getById: async (id) => {
    const response = await api.get(orderRoutes.GET_BY_ID(id));
    return response.data;
  },

  // Confirmar pago
  confirmPayment: async (id) => {
    const response = await api.post(orderRoutes.CONFIRM_PAYMENT(id));
    return response.data;
  },

  // Cancelar orden
  cancel: async (id) => {
    const response = await api.post(orderRoutes.CANCEL(id));
    return response.data;
  },

  // Marcar como enviada (SHIPPER)
  markAsShipper: async (id) => {
    const response = await api.post(orderRoutes.SHIPPER(id));
    return response.data;
  },

  // Marcar como entregada (DELIVERED)
  markAsDelivered: async (id) => {
    const response = await api.post(orderRoutes.DELIVERED(id));
    return response.data;
  },

  // Marcar como completada (COMPLETED)
  markAsCompleted: async (id) => {
    const response = await api.post(orderRoutes.COMPLETED(id));
    return response.data;
  },
};
