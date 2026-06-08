import React from "react";
import { File } from "lucide-react";
import Profile from "../assets/profile.jpeg";
import Curriculum from "../assets/my-resume.pdf";

const Main = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-black py-20"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1
            className="text-5xl ">
            Ana Beatriz
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-zinc-300 leading-relaxed">
            Desenvolvedora de{" "}
            <span className="text-red-500">
              Software
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Me chamo Ana Beatriz e estou cursando Análise e Desenvolvimento de
            Sistemas. Sou apaixonada por design de interfaces e desenvolvimento
            de software. Gosto de transformar ideias em experiências digitais
            modernas, intuitivas e funcionais.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all duration-300"
            >
              Ver Projetos
            </a>

            <a
              href="#contacts"
              className="bg-red-500/10 text-red-400 border border-red-500/20 px-6 py-3 rounded-xl hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              Contato
            </a>
          </div> */}
        </div>

        <div className="flex justify-center">
          <img
            src={Profile}
            alt="Ana Beatriz"
            className="w-68 lg:w-[330px] rounded-full border-4 border-red-500/20 shadow-2xl shadow-red-500/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;