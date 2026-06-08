import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Portfolio from "../assets/project-portifolio.png";
import Bik from "../assets/project-bikcraft.png";
import Animals from "../assets/project-animais-fantasticos.png";
import Cordel from "../assets/project-cordel-moderno.png";

const buttonClass =
  "inline-flex items-center bg-red-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-red-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] text-base font-medium";

const Projects = () => {
  const [activeTip, setActiveTip] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  const projects = [
    {
      title: "Meu Primeiro Portfólio",
      btn1: (
        <a
          className={buttonClass}
          href="https://portfolio-six-flame-59.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Visitar
        </a>
      ),
      content:
        "Nesse projeto, desenvolvi um portfólio pessoal aplicando princípios de UX e design responsivo.",
      img: (
        <img
          className="max-h-50 rounded-full"
          src={Portfolio}
          alt="Meu Primeiro Portfólio"
        />
      ),
    },
    {
      title: "Bikcraft",
      btn1: (
        <a
          className={buttonClass}
          href="https://bikcraft-one-beta.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Visitar
        </a>
      ),
      content:
        "Loja de bicicletas completa, do catálogo à página de termos, com foco em UX/UI e estrutura de código.",
      img: (
        <img
          className="max-h-50 rounded-full"
          src={Bik}
          alt="Bikcraft"
        />
      ),
    },
    {
      title: "Animais Fantásticos",
      btn1: (
        <a
          className={buttonClass}
          href="https://ana-btrzz.github.io/animais-fantasticos/"
          target="_blank"
          rel="noreferrer"
        >
          Visitar
        </a>
      ),
      content:
        "Projeto JavaScript com interações dinâmicas, scroll suave e animações para exibir informações.",
      img: (
        <img
          className="max-h-50 rounded-full"
          src={Animals}
          alt="Animais Fantásticos"
        />
      ),
    },
    {
      title: "Cordel Moderno",
      btn1: (
        <a
          className={buttonClass}
          href="https://ana-btrzz.github.io/projeto-cordel/"
          target="_blank"
          rel="noreferrer"
        >
          Visitar
        </a>
      ),
      content:
        "Página responsiva com efeito parallax e manipulação de imagens para diferentes tamanhos de tela.",
      img: (
        <img
          className="max-h-50 rounded-full"
          src={Cordel}
          alt="Cordel Moderno"
        />
      ),
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProjectClick = (index) => {
    setActiveTip(index);

    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-black max-w-6xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Projetos
        </h2>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi para praticar HTML,
          CSS, JavaScript e técnicas modernas de layout. Também dediquei atenção
          ao UX/UI Design para criar experiências mais intuitivas e agradáveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid md:grid-cols-4 gap-4 mb-8 hidden">
        {projects.map((tip, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(index)}
            className={`p-4 rounded-xl transition duration-300 flex flex-col items-center ${activeTip === index
                ? "bg-zinc-900 shadow-lg border-b-4 border-red-500"
                : "bg-zinc-900 hover:bg-zinc-800"
              }`}
          >
            <div className="mb-2 cursor-pointer">
              {tip.img}
            </div>

            <h3 className="font-medium text-white text-sm md:text-base">
              {tip.title}
            </h3>
          </button>
        ))}
      </div>

      {isMobile ? (
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((proj, i) => (
            <SwiperSlide key={i}>
              <div className="bg-zinc-900 border border-red-950 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col items-center gap-6">
                  <div className="bg-black p-4 rounded-full border border-red-900">
                    {proj.img}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {proj.content}
                  </p>

                  <div className="mt-4 flex gap-5">
                    {proj.btn1}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          ref={contentRef}
          className="bg-zinc-900 border border-red-950 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-black p-4 rounded-full border border-red-900">
              {projects[activeTip].img}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {projects[activeTip].title}
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                {projects[activeTip].content}
              </p>

              <div className="mt-4 flex gap-5">
                {projects[activeTip].btn1}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;