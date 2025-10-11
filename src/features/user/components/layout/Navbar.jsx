import logo from "/vite.svg"; // Usa tu logo real aquí
import { CircleArrowRight, CircleUser, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Inicio", path: "/user/home" },
  { name: "Tienda", path: "/user/store" },
  { name: "Nosotros", path: "/user/about-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-between h-20 md:h-24">
      <div className="container mx-auto px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 py-3 flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto sm:h-10 object-contain"
          />
        </Link>

        {/* Menú principal (desktop) */}
        <ul className="hidden md:flex flex-1 justify-end space-x-6 lg:space-x-12 text-base lg:text-lg text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors ${isActive
                    ? "text-[#AB3032] font-semibold"
                    : "hover:text-[#AB3032]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-orange-500 focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Botones (desktop) */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-10 xl:space-x-16 px-6 md:px-10 lg:px-20 bg-orange-500 h-full">
        <Link
          to="/user/register"
          className="text-orange-700 px-3 lg:px-4 rounded-md font-semibold hover:bg-orange-700 hover:text-white transition bg-white flex items-center gap-2 whitespace-nowrap h-10 lg:h-14 text-sm lg:text-base"
        >
          <span>REGISTRATE</span>
          <CircleArrowRight size={18} />
        </Link>
        <Link
          to="/login"
          className="text-white px-3 lg:px-4 rounded-md font-semibold hover:bg-orange-700 transition bg-orange-600 flex items-center gap-2 whitespace-nowrap h-10 lg:h-14 border border-white text-sm lg:text-base"
        >
          <span>INGRESAR</span>
          <CircleArrowRight size={18} />
        </Link>
        <Link
          to="/user/profile"
          className="text-white rounded-full hover:text-orange-700 transition flex items-center"
        >
          <CircleUser size={40} />
        </Link>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 shadow-lg z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium ${isActive
                  ? "text-orange-500 font-semibold"
                  : "text-gray-800 hover:text-orange-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">
            <Link
              to="/postula"
              onClick={() => setIsMenuOpen(false)}
              className="text-orange-500 bg-white border border-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition flex items-center justify-center gap-2"
            >
              <span>POSTULA AQUÍ</span>
              <CircleArrowRight size={20} />
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-white bg-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2"
            >
              <span>INGRESAR</span>
              <CircleArrowRight size={20} />
            </Link>
             <Link
              to="/user/profile"
              onClick={() => setIsMenuOpen(false)}
              className="text-orange-500 bg-white border border-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition flex items-center justify-center gap-2"
            >
              <span>Perfil</span>
              <CircleUser size={20} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
