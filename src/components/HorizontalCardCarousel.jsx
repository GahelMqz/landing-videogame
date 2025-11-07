// src/components/HorizontalCardCarousel.jsx (Versión con translateX y animaciones explícitas)

import E_CrisomPrism from '../assets/imgs/enemies/E_CrisomPrism.png'
import E_Cat from '../assets/imgs/enemies/E_Cat.png'
import E_Doppelganger from '../assets/imgs/enemies/E_Doppelganger.png'
import E_Necrofauna from '../assets/imgs/enemies/E_Necrofauna.png'
import E_PhantomPatient from '../assets/imgs/enemies/E_PhantomPatient.png'
import E_Player from '../assets/imgs/enemies/E_Player.png'
import E_WhiteEntity from '../assets/imgs/enemies/E_WhiteEntity.png'

import { useRef, useState, useEffect, useCallback } from 'react';

// --- 1. Estructura de Datos (Igual que antes) ---
const carouselItems = [
    {
        id: 1,
        title: "Crimson Prism",
        image: E_CrisomPrism,
        alt: "Crimson Prism",
    },
    {
        id: 2,
        title: "Protagonista",
        image: E_Player,
        alt: "Protagonisa",
    },
    {
        id: 3,
        title: "Doppelganger",
        image: E_Doppelganger,
        alt: "Doppelganger",
    },
    {
        id: 4,
        title: "Michi",
        image: E_Cat,
        alt: "Michi",
    },
    {
        id: 5,
        title: "Phantom Patient",
        image: E_PhantomPatient,
        alt: "Phantom Patient",
    },
    {
        id: 6,
        title: "Necrofauna",
        image: E_Necrofauna,
        alt: "Necrofauna",
    },
    {
        id: 7,
        title: "White Entity",
        image: E_WhiteEntity,
        alt: "White Entity",
    },
];

// --- 2. Componente Principal ---
const HorizontalCardCarousel = () => {
    const carouselContainerRef = useRef(null); // Referencia al contenedor que se desplaza
    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la card visible

    // Clases compartidas para el diseño llamativo del botón (igual que antes)
    const baseButtonClasses = `absolute top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full shadow-2xl z-10 
                           transition-all duration-300 ease-in-out block 
                           focus:outline-none focus:ring-4 focus:ring-blue-500/50`;

    const enabledButtonClasses = `bg-gradient-to-br from-blue-500 to-purple-600 text-white 
                                hover:from-blue-400 hover:to-purple-500 hover:scale-110`;

    const disabledButtonClasses = `bg-gray-700 text-gray-400 cursor-not-allowed opacity-50`;

    // Calcular el número máximo de elementos a mostrar en el carrusel
    // Esto dependerá del ancho del contenedor y de las cards
    const calculateMaxIndex = useCallback(() => {
        if (!carouselContainerRef.current) return 0;

        // Estos valores deben coincidir con las clases de Tailwind de las cards
        const cardWidth = 300; // w-72 (18rem) en px, pero usamos 300 para incluir el gap
        const gap = 24; // space-x-6 (1.5rem * 16 = 24px)

        const containerWidth = carouselContainerRef.current.clientWidth;
        const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));

        // El último índice que se puede mostrar antes de que no haya más contenido
        return Math.max(0, carouselItems.length - cardsPerView);
    }, []);

    const [maxIndex, setMaxIndex] = useState(calculateMaxIndex());

    // Manejar el redimensionamiento de la ventana para recalcular maxIndex
    useEffect(() => {
        const handleResize = () => {
            setMaxIndex(calculateMaxIndex());
            // Asegurarse de que el índice actual no exceda el nuevo maxIndex
            setCurrentIndex(prevIndex => Math.min(prevIndex, calculateMaxIndex()));
        };

        window.addEventListener('resize', handleResize);
        // Calcular inicialmente
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [calculateMaxIndex]);


    const goToNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    // Calcular el valor de translateX
    // Cada card tiene un ancho de 288px (w-72) y un gap de 24px (space-x-6) = 312px por item
    // Necesitamos calcular el desplazamiento exacto para centrar el item
    const itemWidthWithGap = 288 + 24; // 18rem (288px) + 1.5rem (24px)
    const transformValue = `translateX(-${currentIndex * itemWidthWithGap}px)`;


    return (
        <section className="py-14 md:py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título de la Sección */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
                        Personajes
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                        Explora los seres únicos que habitan nuestro mundo.
                    </p>
                </div>

                {/* Contenedor del Carrusel con Botones */}
                <div className="relative">

                    {/* Botón Izquierdo Mejorado */}
                    <button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        className={`${baseButtonClasses} -left-3 lg:-left-6 ${currentIndex === 0 ? disabledButtonClasses : enabledButtonClasses
                            }`}
                        aria-label="Desplazar a la izquierda"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Contenedor Visible del Carrusel */}
                    <div className="overflow-hidden p-4" ref={carouselContainerRef}> {/* Aquí es donde se oculta lo que no se ve */}
                        {/* Contenedor Interno de las Cards - Aplica la animación de translateX */}
                        <div
                            className="flex space-x-6 transition-transform duration-700 ease-in-out" // Animación con transition-transform
                            style={{ transform: transformValue }}
                        >
                            {carouselItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-none w-72 md:w-80 snap-center
                             bg-gray-800 rounded-xl shadow-xl overflow-hidden
                             transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out
                             border border-gray-700 hover:border-blue-500 relative group"
                                >
                                    <div className="relative h-72 overflow-hidden rounded-t-xl">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 group-hover:from-blue-300 group-hover:to-purple-400 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón Derecho Mejorado */}
                    <button
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                        className={`${baseButtonClasses} -right-3 lg:-right-6 ${currentIndex >= maxIndex ? disabledButtonClasses : enabledButtonClasses
                            }`}
                        aria-label="Desplazar a la derecha"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HorizontalCardCarousel;