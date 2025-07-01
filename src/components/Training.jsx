import React from "react";
import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiToothbrush } from "react-icons/gi";
import { RiBookletLine } from "react-icons/ri";
import { MdLaptopChromebook } from "react-icons/md";
import { ImBooks } from "react-icons/im";

const training = [
  {
    icon: <RiBookletLine className="w-10 h-10 text-purple-500" />,
    title: "Ensino Médio",
    desc1: "- Fundação Bradesco",
    desc2: " 2018",
  },
  {
    icon: <MdLaptopChromebook className="w-10 h-10 text-purple-500" />,
    title: "Curso Superior de Tecnologia",
    desc1: "Universidade Paulista (UNIP)",
    desc2: " 2024 - 2026 ",
  },
  {
    icon: <ImBooks className="w-10 h-10 text-purple-500" />,
    title: "Cursos Técnicos",
    desc1: "- HTML, CSS e JavaScript para iniciantes",
    desc2: "- React Completo (Cursando)",
    desc3: "- UI Design Avançado (Cursando)",
    desc4: " 2024 - 2025",
  },
];

const Training = () => {
  return (
    <div>
      <section
        id="training"
        className="scroll-mt-20 py-24 from:white to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center  mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Formação
            </h2>
            {/* <p className="text-violet-600 max-w-2xl max-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum
              autem quo dolore asperiores?
            </p> */}
          </div>

          <div
            className="size-fit
 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center flex m-auto"
          >
            {training.map((training, index) => (
              <motion.div
                key={index}
                className="  bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-purple-100 hoover:border-purple-300"
                whileHover={{ scale: 1.01 }}
              >
                <div className=" flex items-center justify-center mb-4">
                  {training.icon}
                </div>
                <h3 className="text-lg font-semibol text-purple-800 mb-2 text-center">
                  {training.title}
                </h3>
                <p className="text-violet-600 text-sm text-center">
                  {training.title === "Cursos Técnicos" ? (
                    <>
                      {training.desc1} <br />
                      {training.desc2} <br />
                      {training.desc3} <br />
                      <span
                        className="font-source font-bold opacity-50 text-violet-800"
                        style={{ fontFamily: "Source Code Pro" }}
                      >
                        {training.desc4}
                      </span>
                    </>
                  ) : (
                    <>
                      {training.desc1} <br />
                      <span
                        className="font-source font-bold opacity-50 text-violet-800"
                        style={{ fontFamily: "Source Code Pro" }}
                      >
                        {training.desc2}
                      </span>
                    </>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
