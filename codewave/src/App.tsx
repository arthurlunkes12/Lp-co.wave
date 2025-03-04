import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Portifolio from "./components/Portifolio";
import Compromisso from "./components/Compromisso";
import Faq from "./components/Faq";
import Sobre from "./components/Sobre";
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
