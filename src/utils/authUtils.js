// src/utils/authUtils.js
import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode(token); // retorna { sub, role, exp, ... }
  } catch {
    return null;
  }
};

export const getUserRole = () => {
  const user = getUserFromToken();
  return user?.roles?.[0] || null;
};
