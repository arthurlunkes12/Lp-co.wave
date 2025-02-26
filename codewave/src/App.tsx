import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Sobre from "./components/sobre";
import Portifolio from "./components/Portifolio";
import Compromisso from "./components/Compromisso";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sobre />
      <Compromisso />
      <Portifolio />
      <Faq />
      <Contato />
      <Footer />
      {/* Podemos adicionar mais seções aqui depois */}
    </>
  );
};

export default App;
