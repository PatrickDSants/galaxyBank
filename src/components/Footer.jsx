import React from "react";
import githubIcon from "../assets/github2.png";
import moneyIcon from "../assets/money-bag.png"; 


export default function Footer() {
  return (
    <footer className="bg-[#0b0f1c] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Institucional */}
        <div className="flex items-center gap-3">
            <img src={moneyIcon} alt="ícone" className="w-8 h-8 filter invert brightness-200" />
            <span className="text-white text-xl font-bold">GalaxyBank</span>
            <br></br>
        </div>

        {/* Links úteis */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Institucional</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition duration-300">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Carreiras</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
          </ul>
        </div>

        {/* Produtos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Produtos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition duration-300">Conta Corrente</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Investimentos</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Cartões</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ajuda</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition duration-300">Central de Suporte</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Fale Conosco</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Privacidade</a></li>
          </ul>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-10 text-center text-gray-500 text-xs flex flex-col items-center">
        <a
          href="https://github.com/PatrickDSants"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition duration-300"
        >
          Coded by
          <img src={githubIcon} alt="GitHub de Patrick Farias" className="w-5 h-5" />
        </a>
        <p className="mt-2">&copy; {new Date().getFullYear()} GalaxyBank. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
