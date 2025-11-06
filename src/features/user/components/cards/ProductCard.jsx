import { Star } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product, expanded, onExpand, onReaction, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const hasDiscount = product.discountPercent > 0;
    const discountedPrice = hasDiscount
        ? (product.price * (product.discountPercent)).toFixed(2)
        : product.price.toFixed(2);
    const discountPercentUser = hasDiscount
        ? (product.discountPercent * 100).toFixed(0)
        : 0;
    return (
        <div
            onClick={onExpand}
            className={`relative cursor-pointer bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden 
                ${expanded ? "scale-105 col-span-2 md:col-span-1 lg:col-span-2" : ""
                }`}
        >
            {/* --- Vista compacta (no expandida) --- */}
            {!expanded && (
                <>
                    <img
                        src={product.images?.[0]?.url || null}
                        alt={product.name}
                        className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                    <div className="flex flex-row items-center justify-between gap-2 mb-6">
                        <div className="flex flex-col items-start text-left flex-1 ml-6">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.stock} Productos</p>

                            {/* Precio */}
                            <div className="mt-1">
                                {hasDiscount ? (
                                    <div className="flex flex-row items-start gap-4">
                                        <span className="text-red-600 font-semibold">
                                            S/. {discountedPrice}
                                        </span>
                                        <div className="flex flex-row items-start gap-1">
                                            <span className="line-through text-gray-600 text-sm">
                                                S/. {product.price.toFixed(2)}
                                            </span>
                                            <span className="text-xs text-green-600 font-semibold">
                                                (-{discountPercentUser}%)
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span className="text-orange-600 font-semibold">
                                        S/. {product.price.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Botón de reacción */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onReaction(product);
                            }}
                            className="mr-6"
                        >
                            <Star
                                size={26}
                                className={`hover:text-orange-500 ${product.isLiked ? "text-orange-500" : "text-gray-400"} cursor-pointer`}
                            />
                        </button>

                    </div>
                </>
            )}

            {/* --- Vista expandida --- */}
            {expanded && (
                <div
                    className="flex flex-col md:flex-row items-stretch gap-6 h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-full md:w-1/2 h-full">
                        <img
                            src={product.images?.[0]?.url || null}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Información */}
                    <div className="flex flex-col flex-1 justify-between text-center md:text-left py-4">
                        <div>
                            <div className="flex flex-row items-center justify-between gap-2">
                                <div>
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {product.stock} productos disponibles
                                    </p>

                                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                                    {/* Precios */}
                                    <div className="mb-3">
                                        {hasDiscount ? (
                                            <div className="flex flex-col items-center md:items-start">
                                                <span className="text-red-600 font-semibold text-lg">
                                                    S/. {discountedPrice}
                                                </span>
                                                <span className="line-through text-gray-600 text-sm">
                                                    S/. {product.price.toFixed(2)}
                                                </span>
                                                <span className="text-xs text-green-600 font-semibold">
                                                    (-{discountPercentUser}%)
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-orange-600 font-semibold text-lg">
                                                S/. {product.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Botón de reacción */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onReaction(product);
                                    }}
                                    className="mr-6"
                                >
                                    <Star
                                        size={26}
                                        className={`hover:text-orange-500 ${product.isLiked ? "text-orange-500" : "text-gray-400"} cursor-pointer`}
                                    />
                                </button>

                            </div>
                        </div>

                        {/* Cantidad y Agregar */}
                        <div className="flex justify-center sm:justify-start items-center gap-3 w-full mt-4">
                            <input
                                type="number"
                                min="1"
                                max={product.stock}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-16 border rounded-md text-center"
                                required
                            />
                            <button
                                onClick={() => onAddToCart(product, parseInt(quantity))}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductCard;
