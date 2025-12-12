 import { Barcode, HelpCircle, Home, LogOut, PackageOpen, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
    { name: "Inicio", path: "/admin/home", icon: Home },
    { name: "Stock", path: "/admin/stock", icon: Barcode },
    { name: "Inventario", path: "/admin/inventory", icon: PackageOpen },
    { name: "Pedidos", path: "/admin/orders", icon: ShoppingCart },
    //{ name: "Reclamos", path: "/admin/claims", icon: HelpCircle },
];

const logOutAdmin = () => {
    // Aquí puedes agregar la lógica para cerrar sesión, como limpiar el almacenamiento local y redirigir al usuario.
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("role");
    window.location.href = "/user/home"; // Redirige a la página de inicio de usuario después de cerrar sesión
}

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">
            <h2 className="text-2xl font-bold mb-6">Huerfanos</h2>
            <nav>
                <ul className="space-y-2">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-4 transition-colors ${
                                            isActive
                                                ? "bg-orange-500 font-semibold py-2 px-4 rounded-md"
                                                : "hover:text-orange-500 py-2 px-4"
                                        }`
                                    }
                                >
                                    <Icon className="w-5 h-5" />
                                    {link.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="">
                    <button
                        onClick={logOutAdmin}
                        className="w-full flex items-center gap-4 hover:text-orange-500 py-2 px-4"
                    >
                        <LogOut className="w-5 h-5" />
                        Salir
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;