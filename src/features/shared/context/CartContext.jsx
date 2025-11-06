import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // 🔹 Cargar carrito desde localStorage al montar
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // 🔹 Guardar carrito en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        const existing = cart.find((item) => item.id === product.id);
        const newQuantity = existing
            ? existing.quantity + quantity
            : quantity;

        if (newQuantity > product.stock) {
            Swal.fire({
                icon: "warning",
                title: "Stock insuficiente",
                text: `Solo hay ${product.stock} unidades disponibles de "${product.name}".`,
                confirmButtonColor: "#f97316"
            });
            return false; // ❌ no se agrega
        }

        setCart((prevCart) => {
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });

        return true; // ✅ agregado correctamente
    };


    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
