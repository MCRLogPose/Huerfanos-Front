import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import ReportClaims from "../reports/AdminReportClaims";
import PanelLayout from "@/features/admin/components/layout/PanelLayout";
import { BadgePlus, PackagePlus } from "lucide-react";
import ManegeContemplaints from "@/features/admin/pages/claims/ManegeContemplaints";

const AdminClaimsPage = () => {
    return (
        <AdminBasePage>
            <PanelLayout
                panels={[
                    { label: "Gestionar", key: "manage", icon: BadgePlus, content: <ManegeContemplaints /> },
                    { label: "Reportes", key: "report", icon: PackagePlus, content: <ReportClaims /> },
                ]}
            />
        </AdminBasePage>
    )
};

export default AdminClaimsPage;