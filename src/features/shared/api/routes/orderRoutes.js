const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const orderRoutes = {
  // Endpoints específicos
  GET_ALL: `${API_BASE}/orders`,
  GET_BY_USER: (userId) => `${API_BASE}/orders/user/${userId}`,
  GET_BY_ID: (id) => `${API_BASE}/orders/${id}`,
  CREATE: (userId) => `${API_BASE}/orders/create?userId=${userId}`,

  CONFIRM_PAYMENT: (id) => `${API_BASE}/orders/${id}/confirm-payment`,
  CANCEL: (id) => `${API_BASE}/orders/${id}/cancel`,
  SHIPPER: (id) => `${API_BASE}/orders/${id}/shipper`,
  DELIVERED: (id) => `${API_BASE}/orders/${id}/delivered`,
  COMPLETED: (id) => `${API_BASE}/orders/${id}/completed`,
};
