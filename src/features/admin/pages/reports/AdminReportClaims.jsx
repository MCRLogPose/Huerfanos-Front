import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";

const ReportClaims = () => {
  const columns = ["Cliente", "Email", "Descripcion", "Producto","Codigo", "Venta"];
  const data = [
    { Cliente: "Manuel Cruz", Email: "example@gmail.com", Descripcion: "Los piononos no tiene sabor", Producto:"Pionono", Codigo: "P123", Venta:"V221"  },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Productos</h2>
      <DataTable
        columns={columns}
        data={data}g
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar:", item.Producto)}
            className="text-orange-500 hover:underline flex items-center gap-1"
          >h
            <Pencil size={16} />
            Editar
          </button>
        )}
      />
    </div>
  );
};

export default ReportClaims;
