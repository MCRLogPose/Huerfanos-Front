import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";

const ReportInventory = () => {
  const columns = ["Codigo", "Nombre", "Descripcion", "Categoría", "Cantidad", "Precio", "Descuento"];
  const data = [
    { Codigo: "P121", Nombre: "Pionono", Descripcion: "Pan relleno de manjar con recoracion primatica", Categoría: "Pan", Cantidad: 23, Precio: "$2999", Descuento: "12%" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Productos</h2>
      <DataTable
        columns={columns}
        data={data}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar:", item.Producto)}
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

export default ReportInventory;
