import OrderCard from "@/features/admin/components/cards/OrderCard";
import PaginationBar from "@/features/admin/components/cammon/PaginationBar.jsx"
import { useEffect, useState } from "react";
import { orderService } from "@/features/shared/api/service/orderService";
import OrderModal from "@/features/admin/components/modal/OrderModal.jsx";

const OrdersPending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await orderService.getByStatus("SHIPPED");
      setOrders(response);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOnAction = async (orderId) => {
    try {
      const response = await orderService.getById(orderId);
      setSelectedOrder(response);
    } catch (error) {
      console.error("Error al obtener detalles:", error);
    }
  };

  // --- Actualizar el estado local después de una acción ---
  const updateOrderStatusLocally = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, orderStatus: newStatus }
          : order
      )
    );
  };

  // --- Acciones del modal ---
  const handleMarkDelivered = async (orderId) => {
    try {
      await orderService.markAsDelivered(orderId);
      updateOrderStatusLocally(orderId, "DELIVERED");
      // También actualizamos el modal para reflejar el cambio sin cerrarlo
      setSelectedOrder((prev) => prev ? { ...prev, orderStatus: "DELIVERED" } : prev);
    } catch (error) {
      console.error("Error al marcar como entregado:", error);
    }
  };

  const handleMarkCompleted = async (orderId) => {
    try {
      await orderService.markAsCompleted(orderId);
      updateOrderStatusLocally(orderId, "COMPLETED");
      setSelectedOrder(null); // cerramos el modal automáticamente
    } catch (error) {
      console.error("Error al marcar como completado:", error);
    }
  };

  // --- Paginación dinámica ---
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(orders.length / itemsPerPage));;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="font-semibold text-xl mb-5">Mis Pedidos pendientes</h2>
      <div className="flex flex-col gap-8">
        {paginatedOrders.map((order) => (

          <OrderCard
            key={order.id}
            orders={order}
            onAction={handleOnAction}
          />
        ))}
        {/* Barra de paginación */}
        {orders.length > 0 && (
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

      </div>
      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onMarkDelivered={handleMarkDelivered}
          onMarkCompleted={handleMarkCompleted}
        />
      )}

    </div>
  ); // Placeholder component
}

export default OrdersPending;