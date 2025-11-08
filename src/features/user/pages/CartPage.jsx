import { useCartContext } from "@/features/shared/context/CartContext";
import BasePage from "@/features/user/layouts/BasePage.jsx";
import { useAuthContext } from "@/features/shared/context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = () => {
  const { cart, removeFromCart, clearCart, checkout } = useCartContext();

  const [paymentMethod, setPaymentMethod] = useState("EFECTIVO");

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = item.discountPercent
          ? item.price * item.discountPercent
          : item.price;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleCheckout = async () => {
    console.log(user)
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Usuario no autenticado",
        text: "No tienes cuenta iniciada. Por favor, inicia sesión para continuar.",
        confirmButtonColor: "#f97316"
      });
      return;
    }

    const response = await checkout(user.id, paymentMethod);
    if (response) {
      navigate("/checkout-result", { state: { order: response } }); // enviamos la orden
    }
  };

  return (
    <BasePage>
      <main className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">🛒 Mi Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => {
                const hasDiscount = item.discountPercent > 0;
                const discountedPrice = hasDiscount
                  ? (item.price * item.discountPercent).toFixed(2)
                  : item.price.toFixed(2);
                const discountPercentUser = hasDiscount
                  ? (100 - item.discountPercent * 100).toFixed(0)
                  : 0;

                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    {/* Imagen del producto */}
                    <img
                      src={item.images?.[0]?.url}
                      alt={item.images?.[0]?.altText || item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Información principal */}
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-sm text-gray-500">Categoría: {item.category}</p>

                      {/* Precio y cantidad */}
                      <div className="mt-2 flex items-center gap-3">
                        {hasDiscount ? (
                          <>
                            <span className="text-red-500 font-semibold">
                              S/ {discountedPrice}
                            </span>
                            <span className="text-gray-400 line-through text-sm">
                              S/ {item.price.toFixed(2)}
                            </span>
                            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                              -{discountPercentUser}%
                            </span>
                          </>
                        ) : (
                          <span className="font-semibold text-gray-700">
                            S/ {item.price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-gray-500 ml-2">x {item.quantity}</span>
                      </div>
                    </div>

                    {/* Botón de eliminar */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Selección de medio de pago */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Medio de pago
              </label>
              <select
                id="payment"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="YAPE">Yape</option>
                <option value="TARGETA">Tarjeta</option>
                <option value="EFECTIVO">Efectivo</option>
              </select>
            </div>

            {/* Total y acción */}
            <div className="flex items-center justify-between mt-8 border-t pt-6">
              <p className="text-lg font-semibold text-gray-800">
                Total: <span className="text-blue-600">S/ {calculateTotal()}</span>
              </p>
              <div className="flex gap-6">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
                >
                  Vaciar carrito
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-lime-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                >
                  Confirmar compra
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </BasePage>
  );
};

export default ShoppingCartPage;
