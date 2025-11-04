import BasePage from "@/features/user/layouts/BasePage.jsx"

import React from "react";

const LoginPage = () => {
  return (
    <BasePage>
    <main className="flex items-center justify-center">
      <section className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h1>

        <form className="space-y-5">
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
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200"
            >
              Crear nueva
            </a>
            <button
              type="submit"
              className="bg-red-300 hover:bg-red-400 text-gray-900 font-bold px-5 py-2 rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
            >
              Acceder
            </button>
          </div>
        </form>
      </section>
    </main>
    </BasePage>
  );
};

export default LoginPage;
