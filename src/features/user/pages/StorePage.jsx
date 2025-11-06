import BasePage from "@/features/user/layouts/BasePage.jsx";
import { useEffect, useState } from "react";
import SearchBar from "@/features/user/components/cards/SearchBar.jsx";
import CategoryFilter from "@/features/user/components/cards/CategoryFilter.jsx";
import ProductCard from "@/features/user/components/cards/ProductCard.jsx";
import PaginationBar from "@/features/user/components/comom/PaginationBar.jsx";
import { useAuthContext } from "@/features/shared/context/AuthContext";
import { productService } from "@/features/shared/api/service/productService";
import { ratingService } from "@/features/shared/api/service/ratingService.js";
import { useCartContext } from "@/features/shared/context/CartContext";

const StorePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const { addToCart } = useCartContext();

    const handleAddToCart = (product, quantity) => {
        const success = addToCart(product, quantity);

        if (success) {
            console.log(`✅ Producto "${product.name}" agregado al carrito. Cantidad: ${quantity}`);
        } else {
            console.warn(`⚠️ No se pudo agregar "${product.name}" por falta de stock.`);
        }
    };

    const { user } = useAuthContext();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.getAll();
                setProducts(response);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleReaction = async (product) => {
        try {
            const isLiked = !product.isLiked;
            await ratingService.toggleReaction(user.id, product.id, isLiked);
            setProducts((prev) =>
                prev.map((p) => (p.id === product.id ? { ...p, isLiked } : p))
            );
        } catch (error) {
            console.error("Error al reaccionar:", error);
        }
    };

    const handleExpand = (id) => {
        setExpandedProductId((prev) => (prev === id ? null : id));
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory
            ? product.category === selectedCategory
            : true;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // --- Paginación dinámica ---
    const itemsPerPage = 7;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return (
        <BasePage>
            <main className="w-full max-w-6xl mx-auto py-10 px-4">
                <h2 className="text-center text-xl font-semibold mb-8">Mis Productos</h2>

                {/* Filtros */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />
                    <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
                </div>

                {/* Productos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {paginatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            expanded={expandedProductId === product.id}
                            onExpand={() => handleExpand(product.id)}
                            onReaction={handleReaction}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {/* Barra de paginación */}
                <PaginationBar
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </main>
        </BasePage>
    );
};

export default StorePage;
