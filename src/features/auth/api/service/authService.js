import axios from "axios";
import { authRoutes } from "../routes";

export const login = async (credentials) => {
    const response = await axios.post(authRoutes.LOGIN, credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(authRoutes.REGISTER, userData);
    return response.data;
}
