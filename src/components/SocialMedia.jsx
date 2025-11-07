// src/components/HeroSection.jsx
import InstaIcon from '../assets/icons/InstaIcon';
import TiktokIcon from '../assets/icons/TiktokIcon';
import YoutubeIcon from '../assets/icons/YoutubeIcon';
import heroBackground from '../assets/imgs/gameCharacters2.png'

const SocialMedia = () => {
  return (

    <section className="relative h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Imagen ocupando todo el espacio */}
      <img
        src={heroBackground} // Asegúrate de que esta ruta sea correcta
        alt="Fondo impactante"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido centrado (Botón) */}
      <div className="relative z-10 text-center">
        {/* Aquí podrías añadir un título o subtítulo si lo deseas, por ejemplo: */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Únete a nuestra comunidad
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
          Síguenos en nuestras redes sociales para estar al día con las últimas noticias y actualizaciones.
        </p>


<div className='flex gap-4 justify-center'>
        <button
          className="
            px-5 py-5 
            border-2 border-white 
            text-white text-xl font-bold 
            rounded-full 
            tracking-wide 
            shadow-lg 
            hover:bg-pink-600
            transition duration-500 ease-in-out 
            transform hover:scale-110 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
            group
          "
        >
          <span className="relative flex items-center justify-center">
            <InstaIcon />
          </span>



        </button>

        <button
          className="
            px-5 py-5 
            border-2 border-white 
            text-white text-xl font-bold 
            rounded-full 
            tracking-wide 
            shadow-lg 
            hover:bg-black
            transition duration-500 ease-in-out 
            transform hover:scale-110 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
            group
          "
        >
          <span className="relative flex items-center justify-center">
            <TiktokIcon />
          </span>



        </button>

        <button
          className="
            px-5 py-5 
            border-2 border-white 
            text-white text-xl font-bold 
            rounded-full 
            tracking-wide 
            shadow-lg 
            hover:bg-red-600
            transition duration-500 ease-in-out 
            transform hover:scale-110 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
            group
          "
        >
          <span className="relative flex items-center justify-center">
            <YoutubeIcon />
          </span>



        </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;