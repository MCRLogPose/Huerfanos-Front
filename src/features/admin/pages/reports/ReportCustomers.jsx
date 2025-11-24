import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import DataTable from "@/features/admin/components/tables/DataTable.jsx";
import { userService } from "@/features/shared/api/service/userService";

const ReportCustomers = () => {
  const [users, setUsers] = useState([]);
  const columns = [
    "email",
    "firstName",
    "lastName",
    "phone",
    "address",
    "registered",
    "isActive",
    "roles",
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        if (data) {
          const formattedData = data.map((user) => ({
            ...user,
            roles: user.roles ? user.roles.join(", ") : "",
            registered: user.registered ? "Yes" : "No",
            isActive: user.isActive ? "Active" : "Inactive",
            address: user.address || "-",
          }));
          setUsers(formattedData);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reporte de Clientes</h2>
      <DataTable
        columns={columns}
        data={users}
        renderActions={(item) => (
          <button
            onClick={() => console.log("Editar:", item.email)}
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
