import { createContext, useContext, useState, useEffect } from "react";
import { orderService } from "@/features/shared/api/service/orderService";
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);

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
                confirmButtonColor: "#f97316",
            });
            return false;
        }

        setCart((prevCart) =>
            existing
                ? prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                )
                : [...prevCart, { ...product, quantity }]
        );

        return true;
    };

    const checkout = async (userId, paymentMethod = "EFECTIVO") => {
        if (cart.length === 0) {
            Swal.fire({
                icon: "info",
                title: "Carrito vacío",
                text: "Agrega productos antes de confirmar una orden.",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        try {
            const items = cart.map((item) => ({
                product: { id: item.id },
                quantity: item.quantity,
            }));

            const createdOrder = await orderService.create(userId, items, paymentMethod);
            const response = await orderService.confirmPayment(createdOrder.id);
            setOrder(response);

            Swal.fire({
                icon: "success",
                title: "Orden creada",
                text: `Tu orden #${response.orderCode} ha sido registrada correctamente.`,
                confirmButtonColor: "#16a34a",
            });

            clearCart();
            return response;
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error al crear la orden",
                text: error.response?.data?.message || "Ocurrió un problema al registrar tu orden.",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, order, addToCart, removeFromCart, clearCart, checkout }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
