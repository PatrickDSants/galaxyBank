import React from "react";
import planetaRoxo from "../assets/planetaRoxo.png";
import plutao from "../assets/plutao.png";
import terra from "../assets/terra.png";
import background from "../assets/background.png";

export default function Planetas() {
  return (
    <section className="relative w-full py-20 overflow-hidden reveal-servicos">

      {/* Conteúdo normal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-white text-4xl font-extrabold mb-2">Nossos <span className="text-purple-400">serviços</span></h2>
        <p className="text-gray-300 mb-12">
          Explore as possibilidades do GalaxyBank.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Conta Corrente */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={planetaRoxo} alt="Conta Corrente" className="w-[200px] object-contain mb-4 hover:cursor-pointer" />
            <h3 className="text-white text-lg font-bold">Conta Corrente</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Maneira rápida de movimentar seu dinheiro.
            </p>
          </div>

          {/* Investimentos */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={plutao} alt="Investimentos" className="w-[200px] object-contain mb-4 hover:cursor-pointer" />
            <h3 className="text-yellow-400 text-lg font-bold">Investimentos</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Crescimento constante com segurança.
            </p>
          </div>

          {/* Crédito */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src={terra} alt="Crédito" className="w-[200px] object-contain mb-4 hover:cursor-pointer" />
            <h3 className="text-orange-400 text-lg font-bold">Crédito</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Recursos disponíveis sempre que precisar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
