import React from "react";
import celular from "../assets/Celular.png";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function ComoFunciona() {
  const celularRef = useRef(null);

  useEffect(() => {
    if (celularRef.current) {
      VanillaTilt.init(celularRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <section className="w-full py-28 relative">
        {/* TÍTULO */}
        <h2 className="text-white text-4xl font-extrabold mb-20 text-center">Como <span className="text-purple-400">funciona</span></h2>
      <div className="max-w-7xl mx-auto px-6 flex flex-row justify-center items-start gap-24">
        {/* PONTOS */}
        <div className="relative flex flex-col gap-10 text-left">
          {/* Item 1 */}
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
            <div>
              <h3 className="text-white text-xl font-bold">Inscreva-se</h3>
              <p className="text-gray-300">Crie sua conta em minutos.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-6 ml-16">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
            <div>
              <h3 className="text-white text-xl font-bold">Complete o perfil</h3>
              <p className="text-gray-300">Adicione suas informações básicas.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-6 ml-16 -mt-4">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
            <div>
              <h3 className="text-white text-xl font-bold">Aproveite os serviços</h3>
              <p className="text-gray-300">Explore e utilize o GalaxyBank.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
            <div>
              <h3 className="text-white text-xl font-bold">Baixe o App</h3>
              <p className="text-gray-300">Tenha tudo na palma da sua mão.</p>
            </div>
          </div>
        </div>

        {/* CELULAR */}
        <div ref={celularRef}>
          <img src={celular} alt="App GalaxyBank" className="w-[300px]" />
        </div>
      </div>
    </section>
  );
}
