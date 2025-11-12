import React, { use } from "react";
import { FileText, Package, User, DollarSign } from "lucide-react";

const OrderCard = ({ orders, onAction }) => {
  // --- Datos básicos del pedido ---
  const { orderCode, total, orderStatus, paymentStatus, user, items } = orders;

  // --- Tomamos la primera imagen del primer producto (solo como portada) ---
  const firstImage =
    items?.[0]?.product?.images?.[0]?.url ||
    "https://via.placeholder.com/120x120?text=Sin+Imagen";

  // --- Nombre(s) de producto(s) en una sola línea ---
  const productNames = items
    ?.map((i) => i.product?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <article
      onDoubleClick={() => onAction(orders.id)} 
      className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Imagen de producto */}
      <div className="flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={firstImage}
          alt={productNames || "Producto"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información principal del pedido */}
      <div className="flex flex-col flex-grow md:px-4 text-left w-full">
        <span className="text-sm text-gray-500">Código del pedido</span>
        <span className="text-lg font-semibold text-slate-900 mb-1">
          {orderCode}
        </span>
        <span className="text-sm font-semibold text-slate-900 mb-1">
          {user?.address}
        </span>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <span className="flex items-center gap-1">
            <User size={16} className="text-gray-500" />
            {user?.firstName} {user?.lastName}
          </span>
          <span className="flex items-center gap-1">
            <Package size={16} className="text-gray-500" />
            {productNames || "Sin productos"}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign size={16} className="text-gray-500" />
            Total: <strong>S/ {total?.toFixed(2)}</strong>
          </span>
        </div>

        {/* Estado */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${
              orderStatus === "CANCELLED"
                ? "bg-red-100 text-red-700"
                : orderStatus === "SHIPPED"
                ? "bg-blue-100 text-blue-700"
                : orderStatus === "COMPLETED"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Estado: {orderStatus}
          </span>

          <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${
              paymentStatus === "REFUNDED"
                ? "bg-yellow-100 text-yellow-700"
                : paymentStatus === "PAID"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Pago: {paymentStatus}
          </span>
        </div>
      </div>

      {/* Botón de acción */}
      <button
        onClick={() => onAction(orders.id)}
        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors"
      >
        <FileText size={18} />
        <span className="font-medium">Ver Detalles</span>
      </button>
    </article>
  );
};

export default OrderCard;