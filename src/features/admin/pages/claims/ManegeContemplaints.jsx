import { useEffect, useState } from "react";
import ClaimsCard from "@/features/admin/components/cards/ClaimsCard";
import PaginationBar from "@/features/admin/components/cammon/PaginationBar";
import { claimAdapter } from "@/features/admin/api/claimAdapter";
import { claimService } from "@/features/shared/api/service/claimService";
import Swal from "sweetalert2";

const ManegeContemplaints = () => {
    const [claims, setClaims] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadClaims = async () => {
            try {
                const formattedClaims = await claimAdapter.getFormattedPendingClaims("PENDING");
                setClaims(formattedClaims);
            } catch (err) {
                console.error("Error obteniendo reclamos:", err);
            } finally {
                setLoading(false);
            }
        };

        loadClaims();
    }, []);

    const handleResolveClaim = async (id) => {
        try {
            await claimService.markReviewed(id);
            Swal.fire({
                icon: "success",
                title: "Reclamo resuelto",
                text: "El reclamo ha sido resuelto.",
                confirmButtonColor: "#16a34a",
            });

            // Recargar reclamos (solo los pendientes)
            await loadClaims();
        } catch (err) {
            console.error("Error al resolver el reclamo:", err);
        }
    };

    if (loading) {
        return <p className="text-center py-10 text-gray-600">Cargando reclamos...</p>;
    }

    // --- Paginación dinámica ---
    const itemsPerPage = 2;
    const totalPages = Math.max(1, Math.ceil(claims.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedClaims = claims.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="font-semibold text-xl mb-5">Gestionar Reclamos</h2>

            {paginatedClaims.map((claim) => (
                <ClaimsCard
                    key={claim.id}
                    claims={claim}
                    onAction={() => handleResolveClaim(claim.id)}              />
            ))}

            <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ManegeContemplaints;
