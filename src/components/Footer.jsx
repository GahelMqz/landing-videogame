import LogoBlack from './ui/LogoBlack';

// Reutilizamos los iconos SVG de las redes sociales del componente anterior
const TikTokIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6 5.86c-.19.06-.39.12-.59.17v6.64c0 .54-.44.98-.98.98s-.98-.44-.98-.98V8.62c0-.5-.4-.9-.9-.9-.5 0-.9.4-.9.9v6.52c0 1.95 1.58 3.53 3.53 3.53s3.53-1.58 3.53-3.53V8.67c0-.2-.05-.4-.14-.58l-.13-.26zm-7.61 5.48c-.01.03-.02.05-.03.08l-.1.2c-.08.17-.18.32-.3.45-.1.1-.2.18-.3.26-.06.04-.12.08-.18.12-.04.03-.09.06-.13.08-.05.03-.1.05-.15.06l-.28.1-.28.08c-.14.03-.28.04-.42.04h-1.63c-.5 0-.9-.4-.9-.9V8.62c0-.5.4-.9.9-.9h1.63c1.95 0 3.53 1.58 3.53 3.53v.44c0 .35-.22.66-.55.77z"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.19c-.312-.445-.884-.717-1.49-.717H5.874c-.606 0-1.178.272-1.49.717C4.072 3.636 3.75 4.544 3.75 6.45v11.1c0 1.906.322 2.814.634 3.259.312.445.884.717 1.49.717h12.25c.606 0 1.178-.272 1.49-.717.312-.445.634-1.353.634-3.259V6.45c0-1.906-.322-2.814-.634-3.26zm-8.88 12.08V8.72l4.66 3.28-4.66 3.27z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.75 0 3.08.01 4.16.06l.87.04c.73.04 1.25.17 1.71.35.48.18.88.42 1.29.83.41.41.65.8.83 1.29.18.46.31.98.35 1.71l.04.87c.05 1.08.06 1.41.06 4.16s-.01 3.08-.06 4.16l-.04.87c-.04.73-.17 1.25-.35 1.71-.18.48-.42.88-.83 1.29-.41.41-.8.65-1.29.83-.46.18-.98.31-1.71.35l-.87.04c-1.08.05-1.41.06-4.16.06s-3.08-.01-4.16-.06l-.87-.04c-.73-.04-1.25-.17-1.71-.35-.48-.18-.88-.42-1.29-.83-.41-.41-.65-.8-.83-1.29-.18-.46-.31-.98-.35-1.71l-.04-.87c-.05-1.08-.06-1.41-.06-4.16s.01-3.08.06-4.16l.04-.87c.04-.73.17 1.25.35 1.71.18-.48.42-.88.83-1.29.41-.41.8-.65 1.29-.83.46-.18.98-.31 1.71-.35l.87-.04C8.92 2.01 9.25 2 12 2zm0 1.8c-2.71 0-3.05.01-4.12.06-.81.04-1.12.16-1.39.27-.26.1-.48.24-.68.44-.2.2-.34.42-.44.68-.11.27-.23.58-.27 1.39-.05 1.07-.06 1.41-.06 4.12s.01 3.05.06 4.12c.04.81.16 1.12.27 1.39.1.26.24.48.44.68.2.2.42.34.68.44.27.11.58.23 1.39.27 1.07.05 1.41.06 4.12.06s3.05-.01 4.12-.06c.81-.04 1.12-.16 1.39-.27.26-.1.48-.24.68-.44.2-.2.34-.42.44-.68.11-.27.23-.58.27-1.39.05-1.07.06-1.41.06-4.12s-.01-3.05-.06-4.12c-.04-.81-.16-1.12-.27-1.39-.1-.26-.24-.48-.44-.68-.2-.2-.42-.34-.68-.44-.27-.11-.58-.23-1.39-.27-1.07-.05-1.41-.06-4.12-.06zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zm5.8-1.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
  </svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Datos para la navegación
  const navigationSections = [
    {
      title: "Compañía",
      links: [
        { name: "Acerca de Nosotros", href: "#about" },
        { name: "Carreras", href: "#careers" },
        { name: "Prensa", href: "#press" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: "Ayuda", href: "#help" },
        { name: "Contáctanos", href: "#contact" },
        { name: "Estado del Servicio", href: "#status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de Servicio", href: "#terms" },
        { name: "Política de Privacidad", href: "#privacy" },
        { name: "Cookies", href: "#cookies" },
      ],
    },
  ];
  
  // Clases base para el estilo de los botones de redes
  const socialButtonClasses = `
    w-10 h-10 border-2 border-gray-300 text-gray-500 
    rounded-full flex items-center justify-center 
    transition duration-300 ease-in-out 
    transform hover:scale-110 hover:shadow-lg hover:border-indigo-600
  `;

  return (
    <footer className="bg-white shadow-lg border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Columna 1: Logo y Slogan */}
          <div className="col-span-2 lg:col-span-1 pr-8">
            <a href="/" className="text-2xl font-extrabold text-indigo-600 tracking-wider hover:text-indigo-800 transition duration-300">
              <LogoBlack/>
            </a>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Tu socio digital para soluciones web de alto impacto y diseño excepcional.
            </p>
          </div>

          {/* Columnas 2, 3 y 4: Enlaces de Navegación (CORREGIDOS) */}
          {navigationSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-l-2 border-indigo-600 pl-3">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      // CLASES CORREGIDAS
                      className="text-gray-600 font-semibold text-lg hover:text-indigo-600 transition duration-300 transform hover:scale-105 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna 5: Redes Sociales */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold text-gray-900 mb-4 border-l-2 border-indigo-600 pl-3">
              Conecta
            </h4>
            <div className="flex space-x-4">
              {/* TikTok */}
              <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <button className={`${socialButtonClasses} hover:bg-black hover:text-white`}>
                  <TikTokIcon className="w-5 h-5" />
                </button>
              </a>

              {/* YouTube */}
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <button className={`${socialButtonClasses} hover:bg-red-600 hover:text-white`}>
                  <YouTubeIcon className="w-5 h-5" />
                </button>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <button className={`${socialButtonClasses} hover:bg-pink-600 hover:text-white`}>
                  <InstagramIcon className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Mi Logo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;