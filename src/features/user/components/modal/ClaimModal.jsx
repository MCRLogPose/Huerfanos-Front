import React, { useState } from "react";
import { claimService } from "@/features/shared/api/service/claimService";
import { useAuthContext } from "@/features/shared/context/AuthContext";

const ClaimModal = ({ order, onClose }) => {
    const { user } = useAuthContext();
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async () => {
        if (!description.trim()) {
            alert("La descripción es obligatoria");
            return;
        }

        setLoading(true);
        try {
            await claimService.create({
                userId: user.id,
                orderId: order.id,
                description,
                images,
            });

            alert("Reclamo enviado correctamente");
            onClose();
        } catch (error) {
            console.error("Error enviando reclamo:", error);
            alert("Hubo un error al enviar el reclamo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">

                <h2 className="text-lg font-semibold mb-4">
                    Nuevo Reclamo para Pedido #{order.orderCode}
                </h2>

                {/* Descripción */}
                <textarea
                    placeholder="Describe tu reclamo..."
                    className="w-full border rounded-lg p-3 mb-4"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {/* Subir imágenes */}
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="mb-4"
                />

                {/* Acciones */}
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                        disabled={loading}
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white"
                        disabled={loading}
                    >
                        {loading ? "Enviando..." : "Enviar Reclamo"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClaimModal;
