import React, { useEffect } from "react";
import Hero from "./components/Hero";
import GalaxySection from "./components/GalaxySection";
import ComoFunciona from "./components/ComoFunciona";
import Footer from "./components/Footer";

import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    // Animação padrão (bottom)
    ScrollReveal().reveal(".reveal", {
      delay: 200,
      distance: "40px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
      cleanup: true,
    });

    // Animação personalizada para a seção de serviços
    ScrollReveal().reveal(".reveal-servicos", {
      delay: 100,
      distance: "20px",
      origin: "top",
      duration: 1200,
      easing: "ease-out",
      reset: false,
    });
  }, []);

  return (
    <>
      <Hero />
      <section className="reveal-servicos"><GalaxySection /></section>
      <section className="reveal"><ComoFunciona /></section>
      <section className="reveal"><Footer /></section>
    </>
  );
}

export default App;

