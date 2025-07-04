import React, { useState } from "react";
import Portfolio from "../assets/project-portifolio.png";
import Bik from "../assets/project-bikcraft.png";
import Animals from "../assets/project-animais-fantasticos.png";
import Cordel from "/";

const Projects = () => {
  const [activeTip, setActiveTip] = useState(0);

  const projects = [
    {
      title: "Meu Primeiro Portfólio",
      btn1: (
        <a
          className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium"
          href="#"
          target="_blank"
        >
          Visitar
        </a>
      ),
      content: (
        <a href="https://portfolio-six-flame-59.vercel.app" target="_blank">
          Nesse projeto, desenvolvi uma loja de bicicletas completa, abrangendo
          desde a página de produtos até a seção de termos e condições. Apliquei
          conhecimentos variados, planejando e criando as interfaces com base
          nos princípios de UX, e dediquei atenção à organização do código e dos
          arquivos, garantindo estrutura e legibilidade.
        </a>
      ),
      img: (
        <img
          className="max-h-50 rounded-[100%]"
          src={Portfolio}
          alt="Meu Primeiro Portfólio"
        />
      ),
    },
    {
      title: "Bikcraft",
      btn2: (
        <a
          className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium mr-3"
          href="./src/assets/bikcraft-doc.pdf"
          target="_blank"
        >
          UI/UX
        </a>
      ),
      btn1: (
        <a
          className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium"
          href="https://bikcraft-one-beta.vercel.app"
          target="_blank"
        >
          Visitar
        </a>
      ),
      content: (
        <a href="https://bikcraft-one-beta.vercel.app" target="_blank">
          Nesse projeto, desenvolvi uma loja de bicicletas completa, abrangendo
          desde a página de produtos até a seção de termos e condições. Apliquei
          conhecimentos variados, planejando e criando as interfaces com base
          nos princípios de UX, e dediquei atenção à organização do código e dos
          arquivos, garantindo estrutura e legibilidade.
        </a>
      ),
      img: <img className="max-h-50 rounded-[100%]" src={Bik} alt="Bikcraft" />,
    },
    {
      title: "Animais Fantásticos",
      btn1: (
        <a
          className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium"
          href="https://ana-btrzz.github.io/animais-fantasticos/"
          target="_blank"
        >
          Visitar
        </a>
      ),
      content: (
        <a
          href="https://ana-btrzz.github.io/animais-fantasticos/"
          target="_blank"
        >
          Nesse projeto, pratiquei diversas formas de utilização do JavaScript,
          incluindo interações dinâmicas com imagens, scroll suave da página e
          animações para exibição de informações.
        </a>
      ),
      img: (
        <img
          className="max-h-50 rounded-[100%]"
          src={Animals}
          alt="Animais Fantásticos"
        />
      ),
    },
    {
      title: "Cordel Moderno",
      btn1: (
        <a
          className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium"
          href="https://ana-btrzz.github.io/projeto-cordel/"
          target="_blank"
        >
          Visitar
        </a>
      ),
      content: (
        <a href="https://ana-btrzz.github.io/projeto-cordel/" target="_blank">
          Nesse projeto, pratiquei técnicas para lidar com imagens, ajustando
          seu comportamento de acordo com o tamanho da tela. Além disso,
          explorei o efeito parallax no fundo, onde a imagem permanece fixa
          enquanto a página é rolada, criando uma experiência visual mais
          imersiva.
        </a>
      ),
      img: (
        <img
          className="max-h-50 rounded-[100%]"
          src={Cordel}
          alt="Cordel Moderno"
        />
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 max-w-6xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-800 mb-3">
          Projetos
        </h2>
        <p className="text-lg text-violet-600 max-w-2xl mx-auto">
          Aqui estão alguns de meus projetos que foram desenvolvidos com o
          objetivo de praticar meus aprendizados em HTML, CSS, JavaScript e
          técnicas de layout como o Display Flex. Além disso, dediquei atenção
          ao planejamento de UX/UI Design, buscando criar interfaces funcionais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {projects.map((tip, index) => (
          <button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition duration-200 flex flex-col items-center ${
              activeTip === index
                ? "bg-white shadow-lg border-b-4 border-purple-400"
                : "bg-violet-100 hover:bg-violet-200"
            }`}
          >
            <div className="mb-2 cursor-pointer">{tip.img}</div>
            <h3 className="font-medium text-violet-800 text-sm md:text-base">
              {tip.title}
            </h3>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className=" flex-shrink-0 bg-white p-4 rounded-[100%] shadow-md">
            {projects[activeTip].img}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-violet-800 mb-3">
              {projects[activeTip].title}
            </h3>
            <p className="text-violet-600 text-lg leading-relaxed">
              {projects[activeTip].content}
            </p>

            <div className="mt-4 flex gap-5">
              {projects[activeTip].btn1}
              {projects[activeTip].title === "Bikcraft" &&
                projects[activeTip].btn2}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTip === index
                  ? "bg-purple-500 scale-125"
                  : "bg-violet-300"
              }`}
              aria-label={`Ir para o projeto ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
