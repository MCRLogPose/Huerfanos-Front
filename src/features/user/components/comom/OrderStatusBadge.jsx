// src/features/user/components/orders/OrderStatusBadge.jsx
import React from "react";

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-700 border-yellow-300",
  PROCESSING: "bg-blue-100 text-blue-700 border-blue-300",
  SHIPPED: "bg-purple-100 text-purple-700 border-purple-300",
  DELIVERED: "bg-green-100 text-green-700 border-green-300",
  COMPLETED: "bg-emerald-100 text-emerald-700 border-emerald-300",
  CANCELLED: "bg-red-100 text-red-700 border-red-300",
};

const statusLabels = {
  PENDING: "Pendiente",
  PROCESSING: "Procesando pago",
  SHIPPED: "Enviado",
  DELIVERED: "Entregado",
  COMPLETED: "Completado",
  CANCELLED: "Cancelado",
};

const OrderStatusBadge = ({ status }) => {
  const color = statusColors[status] || "bg-gray-100 text-gray-700";
  const label = statusLabels[status] || status;

  return (
    <span className={`px-3 py-1 rounded-full border text-sm font-medium ${color}`}>
      {label}
    </span>
  );
};

export default OrderStatusBadge;
