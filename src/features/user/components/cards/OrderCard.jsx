// src/features/user/components/orders/OrderCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStatusBadge from "@/features/user/components/comom/OrderStatusBadge.jsx";

const OrderCard = ({ order, onClaim }) => {
    const navigate = useNavigate();

    const handleViewReceipt = () => {
        navigate("/checkout-result", { state: { order } });
    };

    const progressClass = {
        PENDING: "w-1/6 bg-yellow-400",
        PROCESSING: "w-2/6 bg-blue-400",
        SHIPPED: "w-3/6 bg-purple-400",
        DELIVERED: "w-5/6 bg-green-400",
        COMPLETED: "w-full bg-emerald-500",
        CANCELLED: "w-full bg-red-400",
    }[order.orderStatus] || "w-1/6 bg-gray-300";

    return (
        <article className="bg-white rounded-2xl shadow-md p-6 mb-6 w-full transition-all hover:shadow-lg border border-gray-100">
            {/* Encabezado */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        Pedido <span className="text-amber-600">#{order.orderCode}</span>
                    </h3>
                    <time className="text-sm text-gray-500">
                        Fecha: {new Date(order.createdAt).toLocaleDateString("es-PE")}
                    </time>
                </div>
                <OrderStatusBadge status={order.orderStatus} />
            </header>

            {/* Línea de progreso */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                <div className={`h-2 rounded-full transition-all ${progressClass}`}></div>
            </div>

            {/* Detalle de productos */}
            <section className="divide-y divide-gray-200">
                {order.items.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-start py-3 text-sm md:text-base"
                    >
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-800">{item.product.name}</span>
                            <span className="text-gray-500">
                                Cantidad: {item.quantity}
                            </span>
                        </div>
                        <span className="font-semibold text-gray-700">
                            S/ {item.price.toFixed(2)}
                        </span>
                    </div>
                ))}
            </section>

            {/* Total y acción */}
            <footer className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <p className="text-lg font-semibold text-gray-800">
                    Total:{" "}
                    <span className="text-amber-600">
                        S/ {order.total.toFixed(2)}
                    </span>
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={onClaim}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm transition-all"
                    >
                        Hacer Reclamo
                    </button>
                    <button
                        onClick={handleViewReceipt}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm transition-all"
                    >
                        Ver Factura
                    </button>
                </div>
            </footer>
        </article>
    );
};

export default OrderCard;
