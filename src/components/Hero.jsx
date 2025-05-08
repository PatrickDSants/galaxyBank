import React from "react";
import foguete from "../assets/foguete.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 relative z-10 reveal">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-20">
        
        {/* Foguete do lado esquerdo */}
        <img
          src={foguete}
          alt="Foguete"
          className="w-[300px] h-auto animate-float"
        />

        {/* Conteúdo do lado direito */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight text-center">
            Bem-vindo ao<br />
            <span className="text-purple-400">GalaxyBank</span>
          </h1>
          <p className="text-white text-base md:text-lg mt-4 text-center">
            Seu banco intergaláctico com soluções para jovens de todas as galáxias.
          </p>
          
          {/* Botão centralizado */}
          <div className="mt-6 flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Abrir Conta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
