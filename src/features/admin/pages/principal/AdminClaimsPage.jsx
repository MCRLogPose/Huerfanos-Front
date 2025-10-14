import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import ReportClaims from "../reports/AdminReportClaims";
import PanelLayout from "@/features/admin/components/layout/PanelLayout";
import { BadgePlus, PackagePlus } from "lucide-react";
import ClaimsCard from "@/features/admin/components/cards/ClaimsCard";
import PaginationBar from "@/features/admin/components/cammon/PaginationBar.jsx";
import { useState } from "react";

const ManegeContemplaints = () => {
    const [currentPage, setCurrentPage] = useState(1);


    const claims = [
        {
            id: "1",
            customer: "Edwin Cruz",
            description: "He recibido este producto, pero presenta problemas, no me gusto el sabor y esperaba que fuese mas grane",
            evidence: "/vite.svg",
            status: "En proceso",
            email: "example@gmail.com",
            productName: "Pan de molde",
            productCode: "PDM001",
            saleCode: "ABC123",
        },
        {
            id: "2",
            customer: "Edwin Cruz",
            description: "He recibido este producto, pero presenta problemas, no me gusto el sabor y esperaba que fuese mas grane",
            evidence: "/vite.svg",
            status: "En proceso",
            email: "example@gmail.com",
            productName: "Pan de molde",
            productCode: "PDM001",
            saleCode: "ABC123",
        },
        {
            id: "3",
            customer: "Edwin Cruz",
            description: "He recibido este producto, pero presenta problemas, no me gusto el sabor y esperaba que fuese mas grane",
            evidence: "/vite.svg",
            status: "En proceso",
            email: "example@gmail.com",
            productName: "Pan de molde",
            productCode: "PDM001",
            saleCode: "ABC123",
        },
        
    ];
    // --- Paginación dinámica ---
    const itemsPerPage = 2;
    const totalPages = Math.ceil(claims.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedClaims = claims.slice(startIndex, endIndex);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="font-semibold text-xl mb-5">Gestionar Reclamos</h2>
            <div className="flex flex-col gap-8">
                {paginatedClaims.map((claim) => (
                    
                    <ClaimsCard
                        key={claim.id}
                        claims={claim}
                        onAction={() => console.log("Acción en reclamo:", claim.id)}
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
    );
};

const AdminClaimsPage = () => {
    return (
        <AdminBasePage>
            <PanelLayout
                panels={[
                    { label: "Agregar", key: "add", icon: BadgePlus, content: <ManegeContemplaints /> },
                    { label: "Reportes", key: "edit", icon: PackagePlus, content: <ReportClaims /> },
                ]}
            />
        </AdminBasePage>
    )
};

export default AdminClaimsPage;