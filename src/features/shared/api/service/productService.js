import api from "@/api/service/apiService";// tu instancia configurada de axios
import { productRoutes } from "../routes";
import axios from "axios";

export const productService = {
  // Crear un producto
  create: async (data) => {
    const response = await api.post(productRoutes.CREATE, data);
    return response.data;
  },

  // Obtener todos los productos
  getAll: async () => {
    const response = await axios.get(productRoutes.GET_ALL);
    return response.data;
  },

  // Buscar producto por SKU
  getBySku: async (sku) => {
    const response = await api.get(productRoutes.GET_BY_SKU(sku));
    return response.data;
  },

  // Actualizar un producto
  update: async (sku, data) => {
    const response = await api.put(productRoutes.UPDATE(sku), data);
    return response.data;
  },

  // Aumentar stock
  addStock: async (sku, quantity) => {
    const response = await api.patch(productRoutes.ADD_STOCK(sku, quantity));
    return response.data;
  },

  // Eliminar un producto
  delete: async (sku) => {
    await api.delete(productRoutes.DELETE(sku));
  },

  // Buscar productos (por nombre, descripción, etc.)
  search: async (query) => {
    const response = await api.get(productRoutes.SEARCH(query));
    return response.data;
  },

  // Obtener productos por categoría
  getByCategory: async (categoryId) => {
    const response = await api.get(productRoutes.GET_BY_CATEGORY(categoryId));
    return response.data;
  },

  // Subir imagen de producto a Cloudinary
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(productRoutes.UPLOAD, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data; // devuelve la URL del archivo subido
  },
};
