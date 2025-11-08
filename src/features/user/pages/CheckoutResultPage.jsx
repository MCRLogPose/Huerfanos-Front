// src/features/user/pages/CheckoutResultPage.jsx
import React from "react";
import { useCartContext } from "@/features/shared/context/CartContext";
import ReceiptViewer from "@/features/user/components/receipt/ReceiptViewer";
import { useLocation } from "react-router-dom";

const CheckoutResultPage = () => {
    const { state } = useLocation(); // viene del navigate
    const { order: contextOrder } = useCartContext();

    // Tomamos la orden desde state o, si no existe, desde el contexto
    const order = state?.order || contextOrder;

    if (!order) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-semibold">No hay orden reciente</h2>
                <p className="text-gray-600 mt-2">
                    Realiza una compra para generar tu comprobante.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                🧾 Boleta de compra #{order.orderCode}
            </h2>
            <ReceiptViewer order={order} />
        </div>
    );
};

export default CheckoutResultPage;
