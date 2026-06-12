import React from "react";
import { motion } from "framer-motion";
import { RiBookletLine } from "react-icons/ri";
import { MdLaptopChromebook } from "react-icons/md";
import { ImBooks } from "react-icons/im";

const training = [
  {
    icon: <MdLaptopChromebook className="w-10 h-10 text-red-500" />,
    title: "Curso Superior de Tecnologia",
    desc1: "Universidade Paulista (UNIP)",
    desc2: "2024 - 2026",
  },
  {
    icon: <ImBooks className="w-10 h-10 text-red-500" />,
    title: "Cursos Técnicos",
    desc1: "HTML, CSS e JavaScript para Iniciantes",
    desc2: "React Completo (Cursando)",
    desc3: "UI Design Avançado (Cursando)",
    desc4: "2024 - 2025",
  },
];

const Training = () => {
  return (
    <section
      id="training"
      className="scroll-mt-20 bg-black py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white mt-2">
            Formação
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {training.map((training, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="
                bg-zinc-900
                border
                border-red-950
                rounded-3xl
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-red-700
                hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]
              "
            >
              <div className="flex items-center justify-center mb-5">
                {training.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {training.title}
              </h3>

              <div className="text-center text-zinc-400 leading-7">
                {training.title === "Cursos Técnicos" ? (
                  <>
                    <p>{training.desc1}</p>
                    <p>{training.desc2}</p>
                    <p>{training.desc3}</p>

                    <span
                      className="block mt-3 text-red-500 font-semibold"
                      style={{ fontFamily: "Source Code Pro" }}
                    >
                      {training.desc4}
                    </span>
                  </>
                ) : (
                  <>
                    <p>{training.desc1}</p>

                    <span
                      className="block mt-3 text-red-500 font-semibold"
                      style={{ fontFamily: "Source Code Pro" }}
                    >
                      {training.desc2}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;