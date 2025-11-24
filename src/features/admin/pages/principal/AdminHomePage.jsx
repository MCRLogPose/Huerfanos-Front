import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import { Link } from "react-router-dom";
import animado3 from "@/assets/animado3.png";
import Banner from "@/assets/PanaderiaBanner.jpg";

const AdminHomePage = () => {
    const activities = [
        {
            title: "Stock",
            desc: "Controla el stock, agrega y modifica tus productos",
            path: "/admin/stock",
        },
        {
            title: "Inventario",
            desc: "Controla el stock, agrega y modifica tus productos",
            path: "/admin/inventory",
        },
        {
            title: "Pedidos",
            desc: "Gestiona y revisa los pedidos de tus clientes",
            path: "/admin/orders",
        },
        {
            title: "Reclamos",
            desc: "Gestiona y revisa los reclamos de tus clientes",
            path: "/admin/claims",
        },
    ];

    return (
        <AdminBasePage>
            <div className="w-full min-h-screen flex flex-col">
                {/* Banner */}
                <section className="relative w-full h-[50vh] flex items-center justify-start px-10 text-white">
                    <img
                        src={Banner}
                        alt="Banner Panadería"
                        className="absolute inset-0 w-full h-full object-cover brightness-75"
                    />

                    <div className="relative z-10 max-w-xl">
                        <h1 className="text-4xl font-bold leading-tight">PANADERIA PASTELERIA</h1>
                        <h2 className="text-3xl font-bold text-orange-400 mt-2">BODEGA HUERFANOS</h2>

                        <p className="mt-4 text-lg">
                            Administra tu negocio y genera más vistas. Esta plataforma se
                            desarrolló para mejorar los procesos de producción de tu negocio.
                        </p>

                        <Link
                            to="/admin/tutorial"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black/70 text-white rounded-lg shadow-lg hover:bg-black transition"
                        >
                            <span className="material-icons">home</span> Ver Tutorial
                        </Link>
                    </div>
                </section>

                {/* Actividades */}
                <section className="py-14 bg-gray-100 text-center">
                    <h3 className="text-2xl font-semibold mb-10">Actividades</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
                        {activities.map((item) => (
                            <Link
                                key={item.title}
                                to={item.path}
                                className="bg-[#081B33] text-white rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition cursor-pointer shadow-xl"
                            >
                                <img src={animado3} alt="icon" className="w-24 h-24 mb-4" />
                                <h4 className="text-xl font-semibold mb-2 text-orange-400">{item.title}</h4>
                                <p className="text-sm text-gray-300 max-w-[180px]">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </AdminBasePage>
    );
};

export default AdminHomePage;