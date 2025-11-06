import { useCartContext } from "@/features/shared/context/CartContext";
import BasePage from "@/features/user/layouts/BasePage.jsx";

const ShoppingCartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();

  return (
    <BasePage>
      <main className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">🛒 Mi Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2 border-b">
                  <span>{item.name} x {item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Vaciar carrito
            </button>
          </>
        )}
      </main>
    </BasePage>
  );
};

export default ShoppingCartPage;