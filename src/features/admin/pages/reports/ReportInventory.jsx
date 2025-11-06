import DataTable from "@/features/admin/components/tables/DataTable.jsx";
import React, { useEffect, useState } from "react";
import { productService } from "@/features/shared/api/service/productService";
import { Pencil } from "lucide-react";

const ReportInventory = () => {
  const columns = ["Codigo", "Nombre", "Descripcion", "Categoría", "Cantidad", "Precio", "Descuento"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAll();
        const formattedData = response.map((item) => ({
          Codigo: item.sku,
          Nombre: item.name,
          Descripcion: item.description,
          Categoría: item.category,
          Cantidad: item.stock,
          Precio: `S/ ${item.price.toFixed(2)}`,
          Descuento: `${(item.discountPercent * 100).toFixed(0)}%`,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Productos</h2>
      <DataTable
        columns={columns}
        data={data}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar:", item.Producto)}
            className="text-orange-500 hover:underline flex items-center gap-1 cursor-pointer"
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
