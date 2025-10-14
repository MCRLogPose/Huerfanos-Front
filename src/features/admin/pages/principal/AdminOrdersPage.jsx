import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import PanelLayout from "@/features/admin/components/layout/PanelLayout.jsx";
import { BadgePlus, PackagePlus } from "lucide-react";
import OrderCard from "@/features/admin/components/cards/OrderCard";
import PaginationBar from "@/features/admin/components/cammon/PaginationBar.jsx"
import { useState } from "react";

const ReportInventory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: "1",
      quantity: 3,
      productName: "Pan de molde",
      productCode: "PDM001",
      customer: "Edwin Cruz",
      address: "Jr. Olivos 432 – SJL",
      image: "/vite.svg",
    },
    {
      id: "2",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },
    {
      id: "3",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },
    {
      id: "4",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },

  ];

  // --- Paginación dinámica ---
  const itemsPerPage = 3;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="font-semibold text-xl mb-5">Gestionar Reclamos</h2>
      <div className="flex flex-col gap-8">
        {paginatedOrders.map((order) => (

          <OrderCard
            key={order.id}
            orders={order}
            onAction={() => console.log("Acción de confirmar pedidos:", order.id)}
          />
        ))}
        {/* Barra de paginación */}
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  ); // Placeholder component
}
const ReportSales = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: "1",
      quantity: 3,
      productName: "Pan de molde",
      productCode: "PDM001",
      customer: "Edwin Cruz",
      address: "Jr. Olivos 432 – SJL",
      image: "/vite.svg",
    },
    {
      id: "2",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },
    {
      id: "3",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },
    {
      id: "4",
      quantity: 5,
      productName: "Pan Francez",
      productCode: "PF002",
      customer: "Luis Sanchez",
      address: "Av. Siempre Viva 123 – LIMA",
      image: "/vite.svg",
    },

  ];

  // --- Paginación dinámica ---
  const itemsPerPage = 3;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="font-semibold text-xl mb-5">Gestionar Reclamos</h2>
      <div className="flex flex-col gap-8">
        {paginatedOrders.map((order) => (

          <OrderCard
            key={order.id}
            orders={order}
            onAction={() => console.log("Acción de confirmar pedidos:", order.id)}
          />
        ))}
        {/* Barra de paginación */}
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  ); // Placeholder component
}

const AdminOrdersPage = () => {
  return (
    <AdminBasePage>
      <PanelLayout
        panels={[
          { label: "Mis Ordenes", key: "orders", icon: PackagePlus, content: <ReportInventory /> },
          { label: "Pre Delivery", key: "predelivery", icon: BadgePlus, content: <ReportSales /> },
        ]}
      />
    </AdminBasePage>
  )
};

export default AdminOrdersPage;