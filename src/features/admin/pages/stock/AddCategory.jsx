import { CloudCheck, Eraser } from "lucide-react";
import { useState } from "react";
import { createCategory } from "@/features/shared/api/service/categoryService";

const AddCategory = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const clearFormData = () => {
        setFormData({
            name: "",
            description: "",
        });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name.trim() === "" || formData.description.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "Nombre y descripcion vacíos",
                text: "Por favor, verifica los campos.",
            });
            return;
        }
        const categoryData = {
            name: formData.name.toUpperCase(),
            description: formData.description
        };

        try {
            await createCategory(categoryData);
            Swal.fire({
                icon: "success",
                title: "Registro exitoso",
                text: "Nueva categoria creada correctamente.",
            });
            setFormData({
                name: "",
                description: ""
            });
        } catch (error) {
            console.error("Error al registrar:", error);
            Swal.fire({
                icon: "error",
                title: "Error al registrar",
                text: "No se pudo completar el registro.",
            });
        }
    };

    return (
        <form
            className="space-y-4 max-w-4xl mx-auto gap-8 mt-10"
            onSubmit={handleSubmit}>
            <div className="flex flex-row gap-10">
                <div>
                    <label htmlFor="name" className="block font-semibold">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. DONAS"
                        required
                        className="w-xs border p-2 rounded bg-gray-200" />
                </div>
            </div>
            <div>
                <label htmlFor="description" className="block font-semibold">Descripción</label>
                <input
                    id="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Ej. Dulces donas glaseadas"
                    required
                    className="w-4xl border p-2 rounded bg-gray-200" />
            </div>
            <section className="flex gap-10">
                <button
                    type="submit"
                    className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white font-bold"
                >
                    <span>Guardar</span>
                    <CloudCheck />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        clearFormData();
                    }}
                    className="flex items-center justify-center gap-4 rounded-xl bg-gray-800 hover:bg-orange-600 py-3 px-6 text-white font-bold"
                >
                    <span>Limpiar</span>
                    <Eraser />
                </button>
            </section>
        </form>
    );
};

export default AddCategory;