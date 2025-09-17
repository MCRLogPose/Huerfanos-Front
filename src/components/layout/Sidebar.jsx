import { HelpCircle, Home, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

// src/componets/layout/Sidebar.jsx
const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">
            <h2 className="text-2xl font-bold mb-6">Mi Sidebar</h2>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link href="#" className="hover:underline">
                            <Home className="inline-block mr-2" />
                            <span>Inicio</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#" className="hover:underline">
                            <User className="inline-block mr-2" />
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#" className="hover:underline">
                            <Settings className="inline-block mr-2" />
                            <span>Configuración</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="#" className="hover:underline">
                            <HelpCircle className="inline-block mr-2" />
                            <span>Ayuda</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;