import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const FastLinks = [
    { name: "Inicio", path: "/user/home" },
    { name: "Tienda", path: "/user/store" },
    { name: "Nosotros", path: "/user/about-us" },
  ];
  const HelpLinks = [
    { name: "Soporte", path: "/support" },
    { name: "Reclamos", path: "/user/claims" },
    { name: "Tutorial", path: "/user/tutorial" },
  ];

  return (
    <footer className="bg-[#031C30] text-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/vite.svg" alt="Logo Huérfanos" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            Plataforma segura e intuitiva. <br />
            Revisa y explora nuestra web
          </p>


          {/* Íconos sociales */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <Link to="#">
              <FaWhatsapp className="hover:text-orange-500 transition-colors" />
            </Link>
            <Link to="#">
              <FaFacebookF className="hover:text-orange-500 transition-colors" />
            </Link>
            <Link to="#">
              <FaInstagram className="hover:text-orange-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            {FastLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Ayuda */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            {HelpLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Envíanos un email */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-3 text-orange-600">Envíanos un email</h3>
          <form className="flex flex-col space-y-3">
            <div>
              <label className="block font-semibold">Código</label>
              <input
                placeholder="Correo: example@gmail.com"
                className="w-full rounded-md p-2 text-gray-900 text-orange-600 resize-none border border-2 border-orange-600" />
            </div>
            <textarea
              placeholder="Escribe tu mensaje..."
              className="w-full h-20 rounded-md p-2 text-gray-900 text-orange-600 resize-none border border-2 border-orange-600"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-semibold transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400">
        © 2025 - Huérfanos | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
