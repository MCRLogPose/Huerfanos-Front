import BasePage from "@/features/user/layouts/BasePage.jsx";
import ImageUrl1 from "@/assets/animado1.png";
import ImageUrl2 from "@/assets/animado2.png";
import ImageUrl3 from "@/assets/animado3.png";

const AboutUsPage = () => {
  return (
    <BasePage>
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-white flex-col space-y-30">
        {/* Sección: Quiénes somos */}
        <section className="bg-gray-200 py-16 px-6 md:px-20">
          <h2 className="text-center text-2xl font-bold mb-10">¿Quiénes somos?</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
            <img
              src={ImageUrl1}
              alt="Ilustración 1"
              className="w-40 md:w-52"
            />
            <p className="text-justify max-w-xl">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
            <p className="text-justify max-w-xl">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro.
            </p>
            <img
              src={ImageUrl3}
              alt="Ilustración 2"
              className="w-40 md:w-52"
            />
          </div>
        </section>

        {/* Sección: Alcance */}
        <section className="bg-gray-100 py-16 px-6 md:px-20">
          <h2 className="text-center text-2xl font-bold mb-12">Alcance</h2>

          <div className="flex flex-col md:flex-row justify-around items-start gap-16">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <p className="text-justify">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                cuando un impresor desconocido usó una galería de textos.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-2">Visión</h3>
              <p className="text-justify">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
              </p>
            </div>

            <img
              src={ImageUrl2}
              alt="Ilustración 3"
              className="w-48 md:w-60 self-center"
            />
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

export default AboutUsPage;
