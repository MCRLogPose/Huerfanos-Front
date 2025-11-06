export const orderRoutes = {
  BASE: "/api/orders",

  // Endpoints específicos
  GET_ALL: "/api/orders",
  GET_BY_USER: (userId) => `/api/orders/user/${userId}`,
  GET_BY_ID: (id) => `/api/orders/${id}`,
  CREATE: (userId) => `/api/orders?userId=${userId}`,

  CONFIRM_PAYMENT: (id) => `/api/orders/${id}/confirm-payment`,
  CANCEL: (id) => `/api/orders/${id}/cancel`,
  SHIPPER: (id) => `/api/orders/${id}/shipper`,
  DELIVERED: (id) => `/api/orders/${id}/delivered`,
  COMPLETED: (id) => `/api/orders/${id}/completed`,
};
