import { useState } from "react";
import BasePage from "@/features/user/layouts/BasePage.jsx";
import ImageUrl2 from "@/assets/animado2.png";

const ClaimsPage = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file)); // genera URL temporal
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envío de datos a BD o Cloudinary
        const formData = new FormData();
        formData.append("description", e.target.description.value);
        formData.append("evidence", imageFile);

        console.log("Datos listos para enviar:", formData);
        // Aquí podrías hacer algo como:
        // await axios.post("/api/claims", formData, { headers: { "Content-Type": "multipart/form-data" } });
    };

    return (
        <BasePage>
            <main className="flex flex-col items-center justify-center px-4 py-10">
                {/* Título */}
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    Reclamos
                </h1>

                <section className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center justify-between mt-10 mx-auto">
                    {/* Formulario de reclamos */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full md:w-1/2 space-y-4"
                        encType="multipart/form-data"
                    >
                        {/* Descripción */}
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-sm font-semibold mb-1">
                                Descripción
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                type="text"
                                className="bg-orange-200 rounded-md px-4 py-4 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                                placeholder="Ej. El producto llegó en mal estado"
                                required
                            />
                        </div>

                        {/* Evidencia (imagen) */}
                        <div className="flex flex-col">
                            <label htmlFor="evidence" className="text-sm font-semibold mb-1">
                                Evidencia (foto)
                            </label>
                            <input
                                id="evidence"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full text-sm text-gray-900 bg-orange-200 border border-orange-300 rounded-md cursor-pointer focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-300 hover:file:bg-orange-400"
                                required
                            />
                        </div>

                        {/* Vista previa de imagen */}
                        {imagePreview && (
                            <figure className="mt-3">
                                <p className="text-sm font-medium mb-2 text-gray-700">Vista previa:</p>
                                <img
                                    src={imagePreview}
                                    alt="Vista previa de evidencia"
                                    className="w-48 h-48 object-cover rounded-lg shadow border border-gray-200"
                                />
                            </figure>
                        )}

                        {/* Botón de confirmar */}
                        <div className="flex justify-center pt-3">
                            <button
                                type="submit"
                                className="bg-orange-200 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-orange-300 transition-transform duration-200 hover:scale-105 shadow-sm"
                            >
                                Confirmar
                            </button>
                        </div>
                    </form>

                    {/* Imagen decorativa */}
                    <figure className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={ImageUrl2}
                            alt="Ilustración de persona con croissant"
                            className="w-64 h-auto object-contain"
                        />
                    </figure>
                </section>
            </main>
        </BasePage>
    );
};

export default ClaimsPage;
