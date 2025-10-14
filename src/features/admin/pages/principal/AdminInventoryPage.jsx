import { BadgePlus, FileUser, PackagePlus } from "lucide-react";
import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import PanelLayout from "@/features/admin/components/layout/PanelLayout.jsx";
import ReportSales from "../reports/ReportSales.jsx";
import ReportInventory from "../reports/ReportInventory.jsx";
import ReportUsers from "../reports/ReportCustomers.jsx";

const AdminInventoryPage = () => {
  return (
    <AdminBasePage>
      <PanelLayout
        panels={[
          { label: "Inventario", key: "inventory", icon: PackagePlus, content: <ReportInventory /> },
          { label: "Ventas", key: "sales", icon: BadgePlus, content: <ReportSales /> },
          { label: "Clientes", key: "customer", icon: FileUser, content: <ReportUsers /> },
        ]}
      />
    </AdminBasePage>
  )
};

export default AdminInventoryPage;