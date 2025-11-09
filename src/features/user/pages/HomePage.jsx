import BasePage from "@/features/user/layouts/BasePage.jsx";
import ImageUrl1 from "@/assets/animado1.png";
import ImageUrl2 from "@/assets/animado2.png";
import ImageUrl3 from "@/assets/animado3.png";

const HomePage = () => {
    return (
        <BasePage>
            {/* Contenedor de ancho completo */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
                <section className="relative h-[100vh] flex items-center justify-start">

                    {/* 🎥 Video de fondo */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/diwnoddb2/video/upload/v1762665995/PanaderiaHuerfanosBanner_s4ydqe.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Capa semitransparente para legibilidad */}

                    {/* Contenido principal */}
                    <div className="relative z-10 max-w-3xl px-6 md:px-20">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-300 mb-2">
                            PANADERÍA PASTELERÍA
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-6">
                            BODEGA HUÉRFANOS
                        </h2>
                        <p className="text-gray-300 text-sm md:text-xl font-semibold mb-8">
                            Somos una de las pastelerías, panaderías y bodegas más antiguas de Lima
                            con 121 años de herencia y tradición.
                        </p>

                        {/* Botones */}
                        <div className="flex gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
                                Productos
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
                                Saber Más
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
                    {/* Bloque 1 */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <img
                            src={ImageUrl1}
                            alt="Panadera"
                            className="w-64 md:w-80 object-contain"
                        />
                        <div className="text-center md:text-left max-w-md">
                            <h3 className="text-orange-600 font-bold text-xl md:text-2xl mb-2">
                                ANTIGUA PANADERÍA Y PASTELERÍA HUÉRFANOS
                            </h3>
                            <p className="text-gray-700 mb-4">Conoce nuestra tienda</p>
                            <button className="border border-orange-400 bg-orange-100 text-gray-800 hover:bg-orange-200 px-5 py-2 rounded-md transition">
                                Saber más
                            </button>
                        </div>
                    </div>

                    {/* Bloque 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                        <img
                            src={ImageUrl2}
                            alt="Pastelero"
                            className="w-64 md:w-80 object-contain"
                        />
                        <div className="text-center md:text-left max-w-md">
                            <h3 className="text-orange-600 font-bold text-xl md:text-2xl mb-2">
                                ANTIGUA PANADERÍA Y PASTELERÍA HUÉRFANOS
                            </h3>
                            <p className="text-gray-700 mb-4">Conoce nuestra historia</p>
                            <button className="border border-orange-400 bg-orange-100 text-gray-800 hover:bg-orange-200 px-5 py-2 rounded-md transition">
                                Saber más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BasePage>
    );
};

export default HomePage;
