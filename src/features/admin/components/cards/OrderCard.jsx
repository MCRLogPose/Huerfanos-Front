import React from "react";
import { FileText } from "lucide-react";
import reactLogo from "@/assets/react.svg";

const OrderCard = ({ orders, onConfirm, }) => {
  return (
    <div className="flex items-center justify-between w-6xl mx-auto bg-white border border-gray-300 rounded-xl p-2 shadow-sm hover:shadow-md transition-all">
      {/* Imagen + número */}
      <div className="relative flex items-center w-30 h-auto justify-center rounded-lg">
        <img
          src={orders.image || reactLogo}
          alt={orders.productName}
          className="w-full h-auto object-cover rounded-lg px-2 py-2"
        />
        <div className="absolute top-0 left-0 bg-orange-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full">
          {orders.quantity}
        </div>
      </div>

      {/* Detalles */}
      <div className="flex flex-col flex-grow px-4">
        <span className="text-red-600 font-bold text-lg">{orders.productCode}</span>
        <span className="text-gray-700 font-semibold">{orders.productName}</span>
        <span className="text-gray-500 text-sm">{orders.customer}</span>
        <span className="text-gray-400 text-xs">{orders.address}</span>
      </div>

      {/* Botón confirmar */}
      <button
        onClick={onConfirm}
        className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
      >
        <FileText size={18} />
        <span className="font-medium">Confirmar</span>
      </button>
    </div>
  );
};

export default OrderCard;
