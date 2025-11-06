import BasePage from "@/features/user/layouts/BasePage.jsx";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "@/features/auth/api/service/authService.js";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Usuario o contraseña vacíos",
        text: "Por favor, verifica los campos.",
      });
      setLoading(false);
      return;
    }
    try {
      //Llamamos al servicio de login (envía JSON plano)
      const response = await login(formData);

      //Guardamos el token
      localStorage.setItem("token", response.token);

      // Decodificamos token
      const decoded = jwtDecode(response.token);
      const role = decoded.roles?.[0] || "USER";
      console.log("Rol del usuario: ", role);
      //Redirigimos según el rol
      if (role === "ADMIN") {
        navigate("/admin/home");
      } else if (role === "SELLER") {
        navigate("/admin/stock");
      } else {
        navigate("/user/home");
      }

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Accediste a tu cuenta exitosamente.",
      });

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: "No se pudo completar el inicio de sesión. Verifica tus credenciales.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BasePage>
      <main className="flex items-center justify-center">
        <section className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar Sesión
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Correo Electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2 text-center"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-orange-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                placeholder="tuemail@ejemplo.com"
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2 text-center"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-orange-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                placeholder="********"
                required
              />
            </div>

            {/* Enlaces */}
            <div className="flex justify-between text-sm font-semibold text-gray-700 mt-1">
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Olvidé mi contraseña
              </a>
            </div>

            {/* Botones */}
            <div className="flex items-center justify-between pt-2">
              <Link
                to="/user/register"
                className="text-sm font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200"
              >
                Crear nueva
              </Link>
              <button
                type="submit"
                disabled={loading}
                className={`${loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-300 hover:bg-red-400"
                  } text-gray-900 font-bold px-5 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105`}
              >
                {loading ? "Accediendo..." : "Acceder"}
              </button>
            </div>
          </form>
        </section>
      </main>
    </BasePage>
  );
};

export default LoginPage;
