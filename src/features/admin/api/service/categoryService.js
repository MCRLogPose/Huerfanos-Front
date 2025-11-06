import api from "@/api/service/apiService";
import { categoryRoutes } from "../routes";

// Obtener todas las categorías
export const getAllCategories = async () => {
  const response = await api.get(categoryRoutes.GET_ALL);
  return response.data;
};

// Obtener categoría por ID
export const getCategoryById = async (id) => {
  const response = await api.get(categoryRoutes.GET_BY_ID(id));
  return response.data;
};

// Crear nueva categoría
export const createCategory = async (data, token) => {
  const response = await api.post(categoryRoutes.CREATE, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Actualizar categoría
export const updateCategory = async (id, data, token) => {
  const response = await api.put(categoryRoutes.UPDATE(id), data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Eliminar categoría
export const deleteCategory = async (id, token) => {
  const response = await api.delete(categoryRoutes.DELETE(id), {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
