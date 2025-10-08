import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CircleUser, Menu, User, X } from "lucide-react"; // Iconos para mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Inicio", path: "/user/home" },
    { name: "Tienda", path: "/user/store" },
    { name: "Nosotros", path: "/user/about-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/vite.svg" alt="Logo Huérfanos" className="w-16 h-16" />
        </Link>

        {/* Menú principal (desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg text-black font-medium border-r border-dotted border-blue-200 pr-10">
          {navLinks.map((link) => (
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

        
        <div className="hidden md:flex items-center space-x-6">
          {/* Botones (desktop) */}
          <div className="flex items-center space-x-3 bg-orange-600 px-6 py-3 rounded-xl">
            <Link
              to="/login"
              className="bg-white text-orange-600 font-bold border border-black px-4 py-2 rounded-sm hover:bg-orange-50 transition"
            >
              Ingresar
            </Link>
            <Link
              to="/user/register"
              className="bg-orange-200 text-black border border-black px-4 py-2 rounded-sm hover:bg-orange-300 transition"
            >
              Regístrate
            </Link>
          </div>

          {/* Perfil de usuario */}
          <div className="px-6 py-3 rounded-xl justify-center">
            <Link
              to="/user/profile"
              className="flex flex-col items-center justify-center ml-4"
              style={{ minHeight: "100%" }}
            >
              <CircleUser size={36} className="text-orange-600" />
            </Link>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-orange-600 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 ${isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <div className="flex flex-col items-center space-y-3 mt-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-600 text-white font-bold px-4 py-2 rounded-md w-40 text-center"
              >
                Ingresar
              </Link>
              <Link
                to="/user/register"
                onClick={() => setMenuOpen(false)}
                className="bg-orange-200 text-black px-4 py-2 rounded-md w-40 text-center"
              >
                Regístrate
              </Link>
              <Link
                to="/user/profile"
                className="flex flex-col items-center justify-center ml-4"
                style={{ minHeight: "100%" }}
              >
                <CircleUser size={36} className="text-orange-600" />
              </Link>

            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
