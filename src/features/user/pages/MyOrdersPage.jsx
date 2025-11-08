// src/features/user/pages/MyOrdersPage.jsx
import React, { useEffect, useState } from "react";
import BasePage from "@/features/user/layouts/BasePage.jsx";
import { orderService } from "@/features/shared/api/service/orderService";
import OrderCard from "@/features/user/components/cards/OrderCard.jsx";
import { useAuthContext } from "@/features/shared/context/AuthContext";
import PaginationBar from "@/features/user/components/comom/PaginationBar.jsx";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuthContext();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user?.id) return; // Espera a que el usuario esté definido
            try {
                const response = await orderService.getByUser(user.id);
                setOrders(response);
            } catch (error) {
                console.error("Error al obtener órdenes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user?.id]);


    if (loading)
        return (
            <BasePage>
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">Cargando tus órdenes...</p>
                </div>
            </BasePage>
        );

    // --- Paginación dinámica ---
    const itemsPerPage = 2;
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = orders.slice(startIndex, endIndex);
    return (
        <BasePage>
            <main className="max-w-4xl mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Mis Órdenes
                </h2>

                {orders.length === 0 ? (
                    <div className="bg-white p-8 rounded-2xl shadow text-center text-gray-500">
                        No tienes pedidos registrados aún.
                    </div>
                ) : (
                    paginatedItems.map((order) => <OrderCard key={order.id} order={order} />)
                )}
                {/* Barra de paginación */}
                <PaginationBar
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </main>
        </BasePage>
    );
};

export default MyOrdersPage;
