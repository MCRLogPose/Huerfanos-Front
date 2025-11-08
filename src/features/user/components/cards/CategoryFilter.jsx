import { useEffect, useState } from "react";
import { getAllCategories } from "@/features/shared/api/service/categoryService";

const CategoryFilter = ({ value, onChange }) => {
    const [categories, setCategories] = useState([]);

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

    const handleChange = (e) => {
        const selected = e.target.value;
        onChange(selected);
    };

    return (
        <select
            className="border rounded-lg px-3 py-2 bg-orange-50 w-full md:w-1/3"
            value={value}
            onChange={handleChange}
        >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                    {cat.name}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;
