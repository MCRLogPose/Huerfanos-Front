import { useEffect, useState } from "react";
import { CloudCheck, Eraser, Search, Upload } from "lucide-react";
import { getAllCategories } from "@/features/shared/api/service/categoryService";
import { productService } from "@/features/shared/api/service/productService";
import Swal from "sweetalert2";

const CategoryFilter = ({ value, onChange }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
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
    return (
        <select
            className="border rounded-lg px-3 py-2 bg-orange-50 w-full md:w-1/3"
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
    );
};

export default CategoryFilter;
