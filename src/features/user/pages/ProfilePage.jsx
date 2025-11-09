import BasePage from "@/features/user/layouts/BasePage.jsx"
import { useAuthContext } from "@/features/shared/context/AuthContext";
import { LogOut, User } from "lucide-react";

const ProfilePage = () => {
    const { user, loading, error, refetch } = useAuthContext();

    const handleLogout = () => {
        localStorage.removeItem("token"); // o la clave que uses para guardar el JWT
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        localStorage.removeItem("role");
        window.location.reload(); // refresca para limpiar el estado
    };

    if (loading) return <p className="text-center py-8 text-gray-500">Cargando información...</p>;
    if (error) return <p className="text-center py-8 text-red-500">Error al cargar usuario</p>;
    if (!user) return <p className="text-center py-8 text-gray-500">No hay usuario autenticado</p>;

    return (
        <BasePage>
            <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
                <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-3 rounded-full">
                            <User className="w-8 h-8 text-gray-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                {user.firstName} {user.lastName}
                            </h1>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Cerrar sesión</span>
                    </button>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                    <article className="space-y-1">
                        <h2 className="text-sm font-medium text-gray-500 uppercase">Teléfono</h2>
                        <p className="text-base font-semibold">{user.phone || "No registrado"}</p>
                    </article>

                    <article className="space-y-1">
                        <h2 className="text-sm font-medium text-gray-500 uppercase">Dirección</h2>
                        <p className="text-base font-semibold">{user.address || "No registrada"}</p>
                    </article>

                    <article className="space-y-1">
                        <h2 className="text-sm font-medium text-gray-500 uppercase">Estado de cuenta</h2>
                        <p
                            className={`text-base font-semibold ${user.isActive ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {user.isActive ? "Activo" : "Inactivo"}
                        </p>
                    </article>

                    <article className="space-y-1">
                        <h2 className="text-sm font-medium text-gray-500 uppercase">Roles</h2>
                        <p className="text-base font-semibold">
                            {user.roles?.join(", ") || "Sin roles asignados"}
                        </p>
                    </article>
                </section>

                <footer className="mt-8 text-center text-gray-400 text-sm">
                    {user.registered ? "Usuario registrado en el sistema" : "Registro pendiente de confirmación"}
                </footer>
            </main>

        </BasePage>
    );
};

export default ProfilePage;