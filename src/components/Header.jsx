import { ArrowBigDownDash } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Logo from './ui/Logo';

const Menu = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const navItems = ["Inicio", "Info", "Mecanicas", "Personajes", "Lore", "Comunidad"];

// Mapeo simple de nombres de menú a NOMBRES DE ANCLA
const sectionMap = {
  'inicio': 'inicio',
  'info': 'info',
  'mecanicas': 'mecanicas',
  'personajes': 'personajes',
  'lore': 'lore',
  'comunidad': 'comunidad',
};

const Header = ({ handleNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // --- LÓGICA DE NAVEGACIÓN ---
  const navigateToSection = (itemName) => {
    const anchorName = sectionMap[itemName.toLowerCase()];

    if (handleNavigate && anchorName) {
      // Llama a la función que recibimos del padre (App.jsx)
      handleNavigate(anchorName);
    }
  };

  // Función para navegación móvil y cerrar menú
  const handleMobileNavigation = (item) => {
    navigateToSection(item);
    setIsOpen(false);
  };



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBaseClasses = "fixed top-0 z-50 w-full py-4 bg-gray-900";

  const backgroundDivClasses = `
        absolute inset-0         
        transition-all duration-500 ease-out
        ${isScrolled
      ? 'opacity-100 translate-y-0  shadow-lg backdrop-blur-sm bg-opacity-90' // ESTADO FINAL (Visible y Opaco)
      : 'opacity-0 -translate-y-full bg-transparent shadow-none' // ESTADO INICIAL/OCULTO (Arriba y Transparente)
    }
    `;
  const linkTextColor = isScrolled ? 'text-gray-600' : 'text-white';
  const logoTextColor = isScrolled ? 'text-indigo-600' : 'text-white';
  const menuButtonColor = isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:/10';


  return (
    <header className={headerBaseClasses}>
      <div className={backgroundDivClasses} aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              onClick={() => navigateToSection("Inicio")}
              className={`... cursor-pointer`}
            >
              <Logo />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${linkTextColor} font-semibold text-lg hover:text-indigo-600 transition duration-300 transform hover:scale-105`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="flex gap-3 uppercase px-6 py-3 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:translate-y-[-2px] hover:shadow-2xl animated-button">
              <span className='animate-pulse'>Descargar</span>

            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${menuButtonColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150 ease-in-out`}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden h-screen w-full bg-gray-900 shadow-xl py-4 transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50 hover:text-indigo-600 transition duration-300 w-full text-center"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-2 border-t border-gray-700 flex justify-center">
            <button className="flex gap-3 uppercase px-6 py-3 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:translate-y-[-2px] hover:shadow-2xl animated-button">
              <span className='animate-pulse'>Descargar</span>

            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;