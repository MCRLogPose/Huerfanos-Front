import { useState } from "react";
import { CloudCheck, Eraser, Search } from "lucide-react";
import { productService } from "@/features/admin/api/service/productService";
import Swal from "sweetalert2";

const AddProductStock = () => {
    const [formData, setFormData] = useState({
        sku: "",
        name: "",
        description: "",
        stock: 0,
        imageUrl: "",
    });

    const [addQuantity, setAddQuantity] = useState(""); // cantidad a agregar
    const [isExistingProduct, setIsExistingProduct] = useState(false);

    // Buscar producto por SKU
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!formData.sku.trim()) {
            Swal.fire("Advertencia", "Por favor ingrese un SKU válido.", "warning");
            return;
        }

        try {
            const product = await productService.getBySku(formData.sku);
            if (product) {
                setFormData({
                    sku: product.sku,
                    name: product.name,
                    description: product.description,
                    stock: product.stock,
                    imageUrl: product.images?.[0]?.url || "",
                });
                setIsExistingProduct(true);
                //Swal.fire("Producto encontrado", "Se cargaron los datos del producto.", "success");
            }
        } catch {
            setIsExistingProduct(false);
            Swal.fire("No encontrado", "El SKU no existe en la base de datos.", "error");
            clearFormData();
        }
    };

    // Limpiar formulario
    const clearFormData = () => {
        setFormData({
            sku: "",
            name: "",
            description: "",
            stock: 0,
            imageUrl: "",
        });
        setAddQuantity("");
    };

    // Aumentar stock
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isExistingProduct) {
            Swal.fire("Error", "Debe buscar un producto válido antes de actualizar el stock.", "error");
            return;
        }

        const quantity = Number(addQuantity);
        if (isNaN(quantity) || quantity <= 0) {
            Swal.fire("Advertencia", "Ingrese una cantidad válida a agregar.", "warning");
            return;
        }

        try {
            await productService.addStock(formData.sku, quantity);
            Swal.fire("Éxito", "El stock se ha actualizado correctamente.", "success");

            // Actualizar stock mostrado
            setFormData((prev) => ({
                ...prev,
                stock: prev.stock + quantity,
            }));
            setAddQuantity("");
            clearFormData();
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Ocurrió un error al actualizar el stock.", "error");
            clearFormData();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mt-10"
        >
            {/* FORMULARIO */}
            <div className="flex-1 space-y-4 bg-white p-6 rounded-xl shadow-md">
                {/* Buscar SKU */}
                <div className="flex flex-row gap-4 items-end">
                    <div>
                        <label className="block font-semibold">Código (SKU)</label>
                        <input
                            id="sku"
                            type="text"
                            value={formData.sku}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, sku: e.target.value }))
                            }
                            placeholder="Ej. PROD-001"
                            required
                            className="border p-2 rounded bg-gray-200 w-48"
                        />
                    </div>
                    <button
                        onClick={handleSearch}
                        type="button"
                        className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
                    >
                        <Search />
                    </button>
                </div>

                {/* Datos solo lectura */}
                <div>
                    <label className="block font-semibold">Nombre</label>
                    <p className="border p-2 rounded bg-gray-100">{formData.name || "-"}</p>
                </div>

                <div>
                    <label className="block font-semibold">Descripción</label>
                    <p className="border p-2 rounded bg-gray-100">{formData.description || "-"}</p>
                </div>

                <div>
                    <label className="block font-semibold">Stock actual</label>
                    <p className="border p-2 rounded bg-gray-100">{formData.stock}</p>
                </div>

                {/* Nuevo stock */}
                <div>
                    <label className="block font-semibold">Cantidad a agregar</label>
                    <input
                        type="number"
                        value={addQuantity}
                        onChange={(e) => setAddQuantity(e.target.value)}
                        placeholder="Ej. 10"
                        className="border p-2 rounded bg-gray-200 w-40"
                    />
                </div>

                {/* Botón actualizar */}
                <section className="flex gap-10">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white font-bold"
                    >
                        <span>Actualizar stock</span>
                        <CloudCheck />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            clearFormData();
                        }}
                        className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white font-bold"
                    >
                        <span>Limpiar</span>
                        <Eraser />
                    </button>
                </section>

            </div>

            {/* IMAGEN */}
            <div className="w-64 flex flex-col items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                <label className="block font-semibold">Imagen del producto</label>
                {formData.imageUrl ? (
                    <img
                        src={formData.imageUrl}
                        alt={formData.name}
                        className="w-56 h-56 object-cover rounded-xl border"
                    />
                ) : (
                    <div className="w-56 h-56 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                        Sin imagen
                    </div>
                )}
            </div>
        </form>
    );
};

export default AddProductStock;
