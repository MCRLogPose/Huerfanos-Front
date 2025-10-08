// src/api/service/authService.js
import axios from 'axios';
import { AuthRoutes } from '../routes';

export const login = async (credentials) => {
    const response = await axios.post(AuthRoutes.LOGIN, credentials);
    return response.data;
};

export const registerUser = async (payload) => {
  try {
    const response = await axios.post(AuthRoutes.REGISTER, payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
