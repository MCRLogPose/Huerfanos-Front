import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import PanelLayout from "@/features/admin/components/layout/PanelLayout.jsx";
import { BadgePlus, PackagePlus } from "lucide-react";
import OrderCard from "@/features/admin/components/cards/OrderCard";
import PaginationBar from "@/features/admin/components/cammon/PaginationBar.jsx"
import { useState } from "react";
import OrdersPending from "@/features/admin/pages/orders/OrdersPending";
import OrdersDelivery from "@/features/admin/pages/orders/OrdersDelivery";
import OrdersCompleted from "@/features/admin/pages/orders/OrdersCompleted";
import OrdersCancelled from "@/features/admin/pages/orders/OrdersCancelled";

const AdminOrdersPage = () => {
  return (
    <AdminBasePage>
      <PanelLayout
        panels={[
          { label: "Ordenes", key: "orders", icon: PackagePlus, content: <OrdersPending /> },
          { label: "Delivery", key: "delivery", icon: BadgePlus, content: <OrdersDelivery /> },
          { label: "Completados", key: "completed", icon: BadgePlus, content: <OrdersCompleted /> },
          { label: "Cancelados", key: "cancelled", icon: BadgePlus, content: <OrdersCancelled /> }
        ]}
      />
    </AdminBasePage>
  )
};

export default AdminOrdersPage;