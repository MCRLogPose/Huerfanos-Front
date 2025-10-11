import AdminBasePage from "@/features/admin/layouts/AdminBasePage.jsx"
import PanelLayout from "@/features/admin/components/layout/PanelLayout";
import { BadgePlus, CloudCheck, PackagePlus, Search } from "lucide-react";


const AddForm = () => (
    <form className="space-y-4">
        <div className="flex flex-row gap-10">
            <div>
                <label className="block font-semibold">Código</label>
                <input className="w-md border p-2 rounded bg-gray-200" />
            </div>
            <button className="flex items-center justify-center px-4 rounded">
                <Search />
            </button>
        </div>

        <div>
            <label className="block font-semibold">Descripción</label>
            <input className="w-4xl border p-2 rounded bg-gray-200" />
        </div>
        <div>
            <label className="block font-semibold">Cantidad</label>
            <input className="w-x border p-2 rounded bg-gray-200" />
        </div>
        <button className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 py-4 px-4 text-white font-bold">
            <span>Guardar</span>
            <CloudCheck />
        </button>
    </form>
);


const EditForm = () => (
    <form className="space-y-4">
        <div className="flex flex-row gap-10">
            <div>
                <label className="block font-semibold">Código</label>
                <input className="w-md border p-2 rounded bg-gray-200" />
            </div>
            <button className="flex items-center justify-center px-4 rounded">
                <Search />
            </button>
        </div>
        <div>
            <label className="block font-semibold">Descripción</label>
            <input className="w-4xl border p-2 rounded bg-gray-200" />
        </div>
        <div>
            <label className="block font-semibold">Categoria</label>
            <input className="w-sm border p-2 rounded bg-gray-200" />
        </div>
        <div className="flex gap-10">
            <div>
                <label className="block font-semibold">Cantidad</label>
                <input className="border p-2 rounded bg-gray-200" />
            </div>
            <div>
                <label className="block font-semibold">Precio</label>
                <input className="border p-2 rounded bg-gray-200" />
            </div>
        </div>

        <div>
            <label className="block font-semibold">Descuento</label>
            <input className="border p-2 rounded bg-gray-200" />
        </div>
        <button className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 py-4 px-4 text-white font-bold">
            <span>Guardar</span>
            <CloudCheck />
        </button>
    </form>
);


const AdminStockPage = () => {
    return (
        <AdminBasePage>
            <PanelLayout
                panels={[
                    { label: "Agregar", key: "add", icon: BadgePlus, content: <AddForm /> },
                    { label: "Modificar", key: "edit", icon: PackagePlus, content: <EditForm /> },
                ]}
            />

        </AdminBasePage>
    )
};

export default AdminStockPage;