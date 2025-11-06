// src/api/service/roleService.js
import api from "@/api/apiService";
import { roleRoutes } from "../routes";

export const roleService = {
  getAll: async () => {
    const response = await api.get(roleRoutes.BASE);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post(roleRoutes.BASE, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(roleRoutes.byId(id), data);
    return response.data;
  },
  delete: async (id) => {
    await api.delete(roleRoutes.byId(id));
  },
};
