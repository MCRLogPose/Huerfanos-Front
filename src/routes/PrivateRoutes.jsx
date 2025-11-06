// src/routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { getUserRole } from "@/utils/authUtils";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = getUserRole();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si se pasa allowedRoles, se valida que el rol del usuario esté en la lista
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
