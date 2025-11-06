import { createContext, useContext } from "react";
import { useAuth } from "@/features/shared/hooks/useAuth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { user, loading, error, refetch } = useAuth();

  return (
    <AuthContext.Provider value={{ user, loading, error, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de un <AuthProvider>");
  }
  return context;
};
