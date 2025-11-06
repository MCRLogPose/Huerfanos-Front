const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8082/api";

export const productRoutes = {
  CREATE: `${API_BASE}/products`,
  GET_ALL: `${API_BASE}/products`,
  GET_BY_SKU: (sku) => `${API_BASE}/products/${sku}`,
  UPDATE: (sku) => `${API_BASE}/products/${sku}`,
  ADD_STOCK: (sku, quantity) => `${API_BASE}/products/${sku}/stock?quantity=${quantity}`,
  DELETE: (sku) => `${API_BASE}/products/${sku}`,
  SEARCH: (query) => `${API_BASE}/products/search?q=${query}`,
  GET_BY_CATEGORY: (categoryId) => `${API_BASE}/products/category/${categoryId}`,
  UPLOAD: `${API_BASE}/products/upload`,
};
