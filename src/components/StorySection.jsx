import playerImg from '../assets/imgs/pictures/player.png'
import boss1Img from '../assets/imgs/pictures/boss1.jpg'
import boss2Img from '../assets/imgs/pictures/boss2.jpg'
import boss3Img from '../assets/imgs/pictures/boss3.jpg'

// Datos de ejemplo para la historia
const storyData = [
  {
    year: "",
    title: "Protagonista",
    description: "Ha perdido totalmente la cordura, adentrándose cada vez más al vacío que lo consume mientras lucha contra las manifestaciones de temores.",
    icon: playerImg,
    color: "bg-indigo-500",
  },
  {
    year: "",
    title: "Boss 1",
    description: "Un ente que acecha al protagonista desde la distancia y que es muy difícil acercarse a él para enfrentarlo.",
    icon: boss1Img,
    color: "bg-teal-500",
  },
  {
    year: "",
    title: "Boss 2",
    description: "Un ente que está constantemente detrás de él. Le hace daño desde la cercanía. Sin importar lo que el protagonista haga, nunca lo deja en paz.",
    icon: boss2Img,
    color: "bg-amber-500",
  },
  {
    year: "",
    title: "Boss 3",
    description: "Un ente enorme. Le impide seguir adelante. Permanece inmóvil en el mismo lugar, bloqueando su camino, sin importar lo que haga.",
    icon: boss3Img,
    color: "bg-rose-500",
  },
];

const StorySection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Lore
          </h2>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
            Cada partida representa el descenso a la locura que sufre el protagonista, quien se ve obligado a enfrentar a criaturas que encarnan sus traumas
              más profundos.
          </p>
        </div>

        {/* Contenedor de la Línea de Tiempo / Historia */}
        <div className="relative">
          
          {/* Línea Central (Visual) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-200 dark:bg-indigo-700 hidden md:block"></div>

          {/* Mapeo de los Eventos */}
          {storyData.map((item, index) => (
            <div 
              key={item.year} 
              // Alterna la alineación a izquierda (even) o derecha (odd)
              className={`mb-12 flex items-center w-full relative ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div 
                // Contenedor del contenido: 50% de ancho en escritorio
                className={`flex-shrink-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:text-right'}`}
              >
                {/* La tarjeta de la historia */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition duration-500 transform hover:scale-[1.02] border-t-4 border-indigo-600 dark:border-indigo-400">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    <img className="w-20 h-20 object-cover rounded-full hidden sm:inline" src={item.icon}/>
                    {item.title}
                    
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Punto Central (Solo en escritorio) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 shadow-xl bg-indigo-600 dark:bg-indigo-400">
                <span className="text-white dark:text-gray-900 font-bold text-sm">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción o Nota Final */}
        <div className="text-center mt-16 p-8 bg-indigo-50 dark:bg-gray-800 rounded-2xl shadow-inner">
             <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                ¿Listo para ser parte de la próxima etapa de esta historia?
            </p>
           

            <button className="uppercase mt-8 px-8 py-3 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 transform hover:translate-y-[-2px] hover:shadow-2xl animated-button">
              <span className='animate-pulse'>Jugar ahora</span>

            </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;