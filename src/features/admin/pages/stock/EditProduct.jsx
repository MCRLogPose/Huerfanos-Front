import { useEffect, useState } from "react";
import { CloudCheck, Eraser, Search, Upload } from "lucide-react";
import { getAllCategories } from "@/features/admin/api/service/categoryService";
import { productService } from "@/features/admin/api/service/productService";
import Swal from "sweetalert2";
import { GrClear } from "react-icons/gr";

const EditProduct = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isExistingProduct, setIsExistingProduct] = useState(false);

    const [formData, setFormData] = useState({
        sku: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        discountPercent: "",
        categoryId: "",
        images: [],
    });

    // Cargar categorías
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        };
        fetchCategories();
    }, []);

    const clearFormData = () => {
        setFormData({
            sku: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            discountPercent: "",
            categoryId: "",
            images: [],
        });
        setImagePreview(null);
        setSelectedCategory("");
        setImageFile(null);
        setIsExistingProduct(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Cargar imagen local
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) setImagePreview(URL.createObjectURL(file));
    };

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
                // Buscar el ID de categoría según el nombre devuelto
                let categoryId = "";
                const matchedCategory = categories.find(
                    (cat) =>
                        cat.name?.toLowerCase() === product.category?.toLowerCase()
                );
                if (matchedCategory) categoryId = matchedCategory.id;

                setFormData({
                    sku: product.sku,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    discountPercent: product.discountPercent,
                    categoryId: categoryId,
                    images: product.images || [],
                });

                setSelectedCategory(categoryId);
                setImagePreview(product.images?.[0]?.url || null);
                setIsExistingProduct(true);
                //Swal.fire("Producto encontrado", "Se cargaron los datos del producto.", "success");
            }
        } catch {
            setIsExistingProduct(false);
            Swal.fire("Nuevo producto", "El SKU no existe, puede registrar un nuevo producto.", "info");
            clearFormData();
        }
    };

    // Guardar o actualizar producto
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.sku.trim()) {
            Swal.fire("Advertencia", "Debe ingresar un código SKU.", "warning");
            return;
        }

        if (!selectedCategory) {
            Swal.fire("Advertencia", "Debe seleccionar una categoría.", "warning");
            return;
        }

        try {
            let imageUrl = formData.images[0]?.url || null;

            // Subir o reemplazar imagen
            if (imageFile) {
                imageUrl = await productService.uploadImage(imageFile);
            }

            const request = {
                sku: formData.sku,
                name: formData.name,
                description: formData.description,
                price: Number(formData.price),
                stock: Number(formData.stock),
                discountPercent: Number(formData.discountPercent),
                categoryId: Number(selectedCategory),
                images: imageUrl ? [imageUrl] : [],
            };

            if (isExistingProduct) {
                const confirm = await Swal.fire({
                    title: "¿Desea actualizar este producto?",
                    text: "El producto ya existe, se reemplazarán los datos.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Sí, actualizar",
                    cancelButtonText: "Cancelar",
                });
                if (!confirm.isConfirmed) return;
                request.images = null; // Evitar duplicar imágenes al actualizar
                await productService.update(formData.sku, request);
                Swal.fire("Actualizado", "El producto se ha actualizado correctamente.", "success");
            } else {
                await productService.create(request);
                Swal.fire("Creado", "El producto se ha registrado correctamente.", "success");
            }
            clearFormData();
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Ocurrió un error al guardar el producto.", "error");
            clearFormData();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mt-10"
        >
            {/* FORMULARIO */}
            <div className="flex-1 space-y-4 bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-row gap-4 items-end">
                    <div>
                        <label className="block font-semibold">Código (SKU)</label>
                        <input
                            id="sku"
                            type="text"
                            value={formData.sku}
                            onChange={handleChange}
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

                <div>
                    <label className="block font-semibold">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Pan Integral"
                        className="w-full border p-2 rounded bg-gray-200"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Descripción</label>
                    <input
                        id="description"
                        type="text"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Breve descripción del producto"
                        className="w-full border p-2 rounded bg-gray-200"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Categoría</label>
                    <select
                        className="border p-2 rounded bg-gray-200 w-60"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Seleccione una categoría</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-6">
                    <div>
                        <label className="block font-semibold">Cantidad</label>
                        <input
                            id="stock"
                            type="number"
                            value={formData.stock}
                            onChange={handleChange}
                            className="border p-2 rounded bg-gray-200 w-32"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Precio (S/)</label>
                        <input
                            id="price"
                            type="number"
                            step="0.01"
                            value={formData.price}
                            onChange={handleChange}
                            className="border p-2 rounded bg-gray-200 w-32"
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-semibold">Descuento (%)</label>
                    <input
                        id="discountPercent"
                        type="number"
                        step="0.01"
                        value={formData.discountPercent}
                        onChange={handleChange}
                        className="border p-2 rounded bg-gray-200 w-32"
                    />
                </div>

                <section className="flex gap-10">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 rounded-xl bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white font-bold"
                    >
                        <span>{isExistingProduct ? "Actualizar" : "Guardar"}</span>
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
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="preview"
                        className="w-56 h-56 object-cover rounded-xl border"
                    />
                ) : (
                    <div className="w-56 h-56 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                        Sin imagen
                    </div>
                )}
                <label
                    htmlFor="image"
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 border"
                >
                    <Upload className="w-4 h-4" /> Subir imagen
                </label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </div>
        </form>
    );
};

export default EditProduct;
