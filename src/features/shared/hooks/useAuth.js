import { useEffect, useState } from "react";
import { userService } from "@/features/shared/api/service/userService"; // donde está tu getCurrentUser

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const data = await userService.getCurrentUser();
      setUser(data);
      setError(null);
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Usuario no autenticado -> no es un error "grave"
        console.info("No hay sesión activa actualmente.");
      } else {
        console.error("Error al obtener usuario:", err);
        setError(err);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error, refetch: fetchUser };
};
