// src/components/HeroSection.jsx
import heroBackground from '../assets/imgs/gameCharacters.png'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Imagen ocupando todo el espacio */}
      <img 
        src={heroBackground} // Asegúrate de que esta ruta sea correcta
        alt="Fondo impactante" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenido centrado (Botón) */}
      <div className="relative z-10 text-center">
        {/* Aquí podrías añadir un título o subtítulo si lo deseas, por ejemplo: */}
        {/* <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Descubre el Futuro
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
          Una experiencia que redefine tus expectativas.
        </p> */}

        <button 
          className="
            px-10 py-5 
            border-2 border-white 
            text-white text-xl font-bold 
            rounded-full 
            tracking-wide 
            shadow-lg 
            hover:bg-white hover:text-indigo-600 
            transition duration-500 ease-in-out 
            transform hover:scale-110 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
            group
          "
        >
          <span className="relative flex items-center justify-center">
            <svg 
              className="w-7 h-7 mr-3 text-white group-hover:text-indigo-600 transition-colors duration-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Ver trailer
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;