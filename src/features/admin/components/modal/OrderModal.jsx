import React from "react";
import { X } from "lucide-react";

const OrderModal = ({ order, onClose, onMarkDelivered, onMarkCompleted }) => {
  if (!order) return null;

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-sm p-4">
      <article className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-fadeIn">
        {/* 🧾 Encabezado */}
        <header className="flex justify-between items-center px-5 py-4 border-b bg-gray-100">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            Detalles de la Orden —{" "}
            <span className="text-blue-600">{order.orderCode}</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={22} />
          </button>
        </header>

        {/* 📦 Cuerpo */}
        <section className="p-5 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* 🧍 Información del cliente */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <p className="text-gray-700">
                <strong>Cliente:</strong> {order.user.firstName} {order.user.lastName}
              </p>
              <p className="text-gray-700">
                <strong>Correo:</strong> {order.user.email}
              </p>
              <p className="text-gray-700">
                <strong>Dirección:</strong> {order.user.address}
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>Total:</strong>{" "}
                <span className="text-blue-700 font-semibold">
                  S/ {order.total.toFixed(2)}
                </span>
              </p>
              <p className="text-gray-700">
                <strong>Estado:</strong>{" "}
                <span
                  className={`font-semibold px-2 py-1 rounded-md ${
                    order.orderStatus === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.orderStatus === "SHIPPED"
                      ? "bg-blue-100 text-blue-700"
                      : order.orderStatus === "DELIVERED"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </p>
            </div>
          </div>

          {/* 🛍 Lista de productos */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              Productos
            </h3>
            <ul className="space-y-3">
              {order.items.map((item) => {
                const discountPercent =
                  item.product.discountPercent > 0
                    ? (item.product.discountPercent*100).toFixed(0)
                    : 0;

                return (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images?.[0]?.url}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Cantidad: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 text-sm font-semibold text-gray-800">
                      {discountPercent > 0 && (
                        <span className="text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded">
                          -{discountPercent}%
                        </span>
                      )}
                      <span>S/ {item.price.toFixed(2)}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ⚙️ Acciones */}
        <footer className="flex flex-col sm:flex-row justify-end gap-3 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium"
          >
            Cerrar
          </button>

          {order.orderStatus === "SHIPPED" && (
            <button
              onClick={() => onMarkDelivered(order.id)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              Marcar como Entregado
            </button>
          )}

          {order.orderStatus === "DELIVERED" && (
            <button
              onClick={() => onMarkCompleted(order.id)}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-medium"
            >
              Marcar como Completado
            </button>
          )}
        </footer>
      </article>
    </section>
  );
};

export default OrderModal;
