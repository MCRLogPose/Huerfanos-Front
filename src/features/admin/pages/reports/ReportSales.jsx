import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";
import { orderService } from "@/features/shared/api/service/orderService";

const AdminReportSales = () => {
  const [orders, setOrders] = useState([]);
  const columns = [
    "orderCode",
    "total",
    "orderStatus",
    "createdAt",
    "firstName",
    "totalItems",
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.getAll();
        if (data) {
          const formattedData = data.map((order) => ({
            ...order,
            firstName: order.user ? order.user.firstName : "-",
            totalItems: order.items ? order.items.length : 0,
            createdAt: new Date(order.createdAt).toLocaleString() || "-",
          }));
          setOrders(formattedData);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Ventas</h2>
      <DataTable
        columns={columns}
        data={orders}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Ver más:", item.orderCode)}
            className="text-orange-500 hover:underline flex items-center gap-1"
          >
            <Pencil size={16} />
            Ver mas
          </button>
        )}
      />
    </div>
  );
};

export default AdminReportSales;
