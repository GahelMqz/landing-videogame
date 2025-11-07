import './App.css'

import ReactFullpage from '@fullpage/react-fullpage';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import HorizontalCardCarousel from './components/HorizontalCardCarousel';
import StorySection from './components/StorySection';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import { useRef } from 'react';

const sectionAnchors = [
  "inicio", // Coincide con "Inicio"
  "info", // Coincide con "About"
  "mecanicas", // Coincide con "Mecánicas"
  "personajes", // Coincide con "Personajes"
  "lore", // Coincide con "Lore"
  "comunidad",
];

const FullpageWrapper = () => {

  // Usamos useRef para almacenar la API de navegación
  const fullpageApiRef = useRef(null);

  return (
    <>
      {/* 1. CLAVE: Pasamos fullpageApi.moveTo como una prop simple llamada handleNavigate */}
      <Header handleNavigate={(anchor) => fullpageApiRef.current?.moveTo(anchor)} />

      <ReactFullpage
        scrollingSpeed={300}
        navigation={true}
        anchors={sectionAnchors} // Usamos los nombres de ancla

        render={({ state, fullpageApi }) => {
          // 2. Guardamos la API completa en la referencia
          fullpageApiRef.current = fullpageApi;

          return (
            <div id="fullpage-wrapper">

              {/* Los divs section deben coincidir con el orden de los anchors */}
              <div className="section"><HeroSection /></div>
              <div className="section"><AboutSection /></div>
              <div className="section"><FeaturesCarousel /></div>
              <div className="section"><HorizontalCardCarousel /></div>
              <div className="section"><StorySection /></div>
              <div className="section"><SocialMedia /></div>
              <div className="section"><Footer /></div>

            </div>
          );
        }}
      />
    </>
  );
};
const App = () => <FullpageWrapper />;
export default App;