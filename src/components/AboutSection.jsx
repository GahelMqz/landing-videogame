// src/components/AboutSection.jsx
import img1 from '../assets/imgs/about/banner.png'
import img2 from '../assets/imgs/about/E_PhantomPatient.png'
import img3 from '../assets/imgs/about/E_WhiteEntity.png'
import img4 from '../assets/imgs/about/E_Necrofauna.png'
import img5 from '../assets/imgs/about/E_Ouriel.png'
import img6 from '../assets/imgs/about/player.jpg'

const AboutSection = () => {
  // Array de datos para el grid, usando placeholders para las rutas de imágenes
  const gridImages = [
    { src: img1, alt: "", size: "col-span-2 row-span-2" },
    { src: img2, alt: "", size: "" },
    { src: img3, alt: "", size: "" },
    { src: img4, alt: "", size: "" },
    { src: img5, alt: "", size: "" },
    { src: img6, alt: "", size: "" },
  ];

  return (
    <section className="bg-gray-900 text-white py-32 md:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

        {/* Columna Izquierda: Introducción y Botón */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="uppercase text-4xl sm:text-5xl font-extrabold mb-8 leading-tight text-indigo-400">
              ¿Qué es <br /> Shadow of Minds?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
              Es un juego roguelike con ambientación tétrica centrado en la exploración y la
              supervivencia, donde cada partida es unica gracias a la generación procedural de niveles
              y la muerte permanente.
            </p>
          </div>

          {/* Botón con estilo consistente con el Header y HeroSection */}
          <button className="self-start px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:translate-y-[-2px] hover:shadow-2xl">
            Ver trailer
          </button>
        </div>

        {/* Columna Derecha: Grid de Imágenes de Resumen */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
          {gridImages.map((item, index) => (
            <div
              key={index}
              // Clases para el grid asimétrico. El primer item ocupa 2x2.
              className={`${item.size} 
                bg-gray-800 rounded-xl overflow-hidden shadow-2xl 
                flex items-center justify-center p-2 sm:p-4 relative 
                min-h-[120px] transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;