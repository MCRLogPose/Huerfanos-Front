import BasePage from "@/features/user/layouts/BasePage.jsx";
import { useState } from "react";
import { register } from "@/features/auth/api/service/authService.js";
import Swal from "sweetalert2";
import ImageUrl1 from "@/assets/animado1.png";
import ImageUrl3 from "@/assets/animado3.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Las contraseñas no coinciden",
        text: "Por favor, verifica los campos.",
      });
      return;
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      await register(userData);
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada correctamente.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error al registrar:", error);
      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: "No se pudo completar el registro.",
      });
    }
  };

  return (
    <BasePage>
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Registro
        </h1>

        {/* Sección 1 */}
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              src={ImageUrl3}
              alt="Ilustración de persona con croissant"
              className="w-64 h-auto object-contain"
            />
          </figure>

          <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-semibold mb-1">
                Nombre
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="Ej. Ana"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-semibold mb-1">
                Apellido
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="Ej. Pérez"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-semibold mb-1">
                Dirección
              </label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="Calle 123, Lima"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold mb-1">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="+51 999 999 999"
                required
              />
            </div>
          </form>
        </section>

        {/* Sección 2 */}
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center justify-between mt-10">
          <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold mb-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="********"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold mb-1"
              >
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                placeholder="********"
                required
              />
            </div>

            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="bg-orange-200 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-orange-300 transition-transform duration-200 hover:scale-105 shadow-sm"
              >
                Confirmar
              </button>
            </div>
          </form>

          <figure className="w-full md:w-1/2 flex justify-center">
            <img
              src={ImageUrl1}
              alt="Ilustración de panadero"
              className="w-56 h-auto object-contain"
            />
          </figure>
        </section>
      </main>
    </BasePage>
  );
};

export default RegisterPage;
