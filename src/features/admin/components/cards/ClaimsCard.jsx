import React from "react";
import { Barcode, FileText, Mail, QrCode, Ruler } from "lucide-react";
import reactLogo from "@/assets/react.svg";

const ClaimsCard = ({ claims, onAction }) => {
    return (
        <div className="flex border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
            {/* Lado izquierdo */}
            <div className="flex flex-col justify-between bg-gray-100 p-6 flex-1">
                <div className="space-y-2">
                    <div>
                        <h2 className="text-red-600 font-bold text-2xl mb-2">{claims.customer}</h2>
                        <p className="text-gray-800 text-sm leading-relaxed line-clamp-3">{claims.description}</p>
                    </div>


                    <div className="flex flex-row gap-4">
                        <Mail size={16} className="text-gray-600" />
                        <p className="text-gray-800 font-regular text-sm">{claims.email}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Ruler size={16} className="text-gray-600" />
                        <p className="text-gray-800 font-regular text-sm">{claims.productName}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Barcode size={16} className="text-gray-600" />
                        <p className="text-gray-800 font-regular text-sm">{claims.productCode}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <QrCode size={16} className="text-gray-600" />
                        <p className="text-gray-800 font-regular text-sm">{claims.saleCode}</p>
                    </div>
                </div>

                <button
                    onClick={onAction}
                    className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition-colors w-fit"
                >
                    <FileText size={18} />
                    <span className="font-medium">Resolver</span>
                </button>
            </div>

            {/* Imagen del producto */}
            <div className="w-1/3 bg-white flex items-center justify-center">
                <img
                    src={claims.evidence || reactLogo}
                    alt="Producto"
                    className="object-contain w-xs h-xs"
                />
            </div>
        </div>
    );
};

export default ClaimsCard;
