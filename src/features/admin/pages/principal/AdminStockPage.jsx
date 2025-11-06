import { BadgePlus, PackagePlus, Tags } from "lucide-react";
import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import PanelLayout from "@/features/admin/components/layout/PanelLayout";
import AddProductStock from "@/features/admin/pages/stock/AddProductStock";
import EditProduct from "@/features/admin/pages/stock/EditProduct";
import AddCategory from "@/features/admin/pages/stock/AddCategory";

const AdminStockPage = () => {
    return (
        <AdminBasePage>
            <PanelLayout
                panels={[
                    { label: "Agregar", key: "add", icon: BadgePlus, content: <AddProductStock /> },
                    { label: "Modificar", key: "edit", icon: PackagePlus, content: <EditProduct /> },
                    { label: "Agregar Categoria", key: "add-category", icon: Tags, content: <AddCategory /> },
                ]}
            />

        </AdminBasePage>
    )
};

export default AdminStockPage;