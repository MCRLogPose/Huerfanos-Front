import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";

const ReportCustomers = () => {
  const columns = ["Nombre", "Apellido", "Compras", "Email"];
  const data = [
    { Nombre: "Manuel", Apellido: "Cruz", Compras: "100",  Email: "example@gmail.com"},
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Clientes</h2>
      <DataTable
        columns={columns}
        data={data}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar:", item.Producto)}
            className="text-orange-800 hover:underline flex items-center gap-1"
          >
            <Pencil size={16} />
            Editar
          </button>
        )}
      />
    </div>
  );
};

export default ReportCustomers;
