// src/components/FeatureCarousel.jsx
// O cualquier nombre que desees para tu componente

import generacionProceduralImg from '../assets/imgs/mecanicas/generacion.gif'
import pixelArtImg from '../assets/imgs/mecanicas/gameCharacters4.png'
import permaDeath from '../assets/imgs/mecanicas/permaDeath.jpeg'

import { useState, useEffect } from 'react';

// --- 1. Estructura de Datos (Mock Data) ---
const features = [
  {
    id: 1,
    title: "Generación procedural",
    description: "Todo el mapa se genera aleatoriamente mediante algoritmos avanzados.",
    image: generacionProceduralImg,
    keyFeature: "Partidas únicas y diferentes",
  },
  {
    id: 2,
    title: "Pixel Art 3D",
    description: "Disfruta de un estilo visual único con gráficos pixel art y en 3D.",
    image: pixelArtImg,
    keyFeature: "Gráficos minimalistas",
  },
  {
    id: 3,
    title: "Cada decisión cuenta",
    description: "Si mueres, pierdes todo tu progreso y debes empezar de nuevo. Analiza bien cada movimiento.",
    image: permaDeath,
    keyFeature: "Perma Death",
  },
];

// --- 2. Componente Principal ---
const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Lógica para el avance automático del carrusel
  useEffect(() => {
    // Si la lista de características está vacía, no iniciar el intervalo
    if (features.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 80000); // Cambia cada 5 segundos (5000ms)

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  const activeFeature = features[activeIndex];

  // Si no hay características, no renderizar nada (manejo de caso vacío)
  if (!activeFeature) return null;

  return (
    <section className="py-32 md:py-40 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título y Descripción de la Sección */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Mecánicas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Explora las innovadoras mecánicas que hacen único a nuestro juego.
          </p>
        </div>

        {/* Contenido Principal: Carrusel y Imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de la Imagen Grande (Visible solo en escritorio) */}
          <div className="hidden lg:block relative h-96 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out">
            <img
              key={activeFeature.id} // Clave para forzar la re-renderización y animación de cambio
              src={activeFeature.image}
              alt={activeFeature.keyFeature}
              // Nota: 'animate-fadeIn' requiere el CSS global, ver sección 3
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 animate-fadeIn" 
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Columna del Carrusel Vertical de Texto */}
          <div>
            <div className="relative h-96 overflow-hidden">
              {/* Contenedor de todas las características con la transición vertical */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                // Calcula el porcentaje de desplazamiento vertical
                style={{ transform: `translateY(-${activeIndex * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    // Cada slide ocupa el 100% de la altura (h-96)
                    className={`h-full w-full p-4 flex flex-col justify-center transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-30'}`}
                  >
                    {/* Título de la Característica (El que va cambiando) */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">
                      {feature.keyFeature}
                    </h3>
                    {/* Título Secundario */}
                    <h4 className="text-2xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h4>
                    {/* Descripción Breve */}
                    <p className="text-xl text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Paginación/Indicadores */}
            <div className="mt-6 flex space-x-3 justify-center lg:justify-start">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-pink-500 w-8' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;