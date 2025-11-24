import { useEffect, useState } from "react";
import { claimAdapter } from "@/features/admin/api/claimAdapter";
import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";

const ReportClaims = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const loadClaims = async () => {
      const formatted = await claimAdapter.getFormattedPendingClaims("REVIEWED");
      setClaims(formatted);
    };

    loadClaims();
  }, []);

  const columns = [
    "ID",
    "Cliente",
    "Email",
    "Producto",
    "Código",
    "Venta",
    "Descripción",
    "Estado",
    "Fecha de creación",
    "Fecha de revision",
  ];

  const data = claims.map((c) => ({
    ID: c.id,
    Cliente: c.customer,
    Email: c.email,
    Producto: c.productName,
    Código: c.productCode,
    Venta: c.saleCode,
    Descripción: c.description,
    Estado: c.status,
    "Fecha de creación": new Date(c.createdAt).toLocaleString(),
    "Fecha de revision": new Date(c.reviewedAt).toLocaleString(),

  }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Reporte de Reclamos
      </h2>

      <DataTable
        columns={columns}
        data={data}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar reclamo:", item.ID)}
            className="text-orange-500 hover:underline flex items-center gap-1"
          >
            <Pencil size={16} />
            Editar
          </button>
        )}
      />
    </div>
  );
};

export default ReportClaims;
