import BasePage from "@/features/user/layouts/BasePage.jsx"
import { useState } from "react";
import ImageUrl1 from "@/assets/animado1.png";
import ImageUrl3 from "@/assets/animado3.png";

const RegisterPage = () => {
    const [isAdmin] = useState(true);
    return (
        <BasePage>
            <main className="flex flex-col items-center justify-center px-4 py-10">
                {/* Título */}
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    Registro
                </h1>

                {/* Formulario principal */}
                <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
                    {/* Imagen izquierda */}
                    <figure className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={ImageUrl3}
                            alt="Ilustración de persona con croissant"
                            className="w-64 h-auto object-contain"
                        />
                    </figure>

                    {/* Formulario de datos */}
                    <form className="w-full md:w-1/2 space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="nombre" className="text-sm font-semibold mb-1">
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                placeholder="Ej. Ana"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="apellido" className="text-sm font-semibold mb-1">
                                Apellido
                            </label>
                            <input
                                id="apellido"
                                type="text"
                                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                placeholder="Ej. Pérez"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="direccion" className="text-sm font-semibold mb-1">
                                Dirección
                            </label>
                            <input
                                id="direccion"
                                type="text"
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
                                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                placeholder="correo@ejemplo.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="telefono" className="text-sm font-semibold mb-1">
                                Teléfono
                            </label>
                            <input
                                id="telefono"
                                type="tel"
                                className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                placeholder="+51 999 999 999"
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
                </section>

                {/* Sección condicional para admins */}
                {isAdmin && (
                    <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center justify-between mt-10">
                        {/* Formulario de contraseñas */}
                        <form className="w-full md:w-1/2 space-y-4">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-semibold mb-1 text-gray-700"
                                >
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="bg-orange-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                    placeholder="********"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm font-semibold mb-1 text-gray-700"
                                >
                                    Confirmar Contraseña
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
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

                        {/* Imagen derecha */}
                        <figure className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={ImageUrl1}
                                alt="Ilustración de panadero"
                                className="w-56 h-auto object-contain"
                            />
                        </figure>
                    </section>
                )}
            </main>
        </BasePage>
    )
};

export default RegisterPage;