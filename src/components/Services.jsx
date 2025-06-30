import React from "react";
import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiToothbrush } from "react-icons/gi";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-purple-500" />,
    title: "Titulo 1",
    desc: "Descrição : Loremsowdjoideufyseifhsdjigpfg",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-purple-500" />,
    title: "Titulo 2",
    desc: "Descrição : Loremsowdjoideufyseifhsdjigpfg",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-purple-500" />,
    title: "Titulo 3",
    desc: "Descrição : Loremsowdjoideufyseifhsdjigpfg",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-purple-500" />,
    title: "Titulo 4",
    desc: "Descrição : Loremsowdjoideufyseifhsdjigpfg",
  },
];

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="scroll-mt-20 py-24 from:white to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Titulo</h2>
            <p className="text-gray-600 max-w-2xl max-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum
              autem quo dolore asperiores?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-purple-100 hoover:border-purple-300"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center">
                  {" "}
                  {service.icon}{" "}
                </div>
                <h3 className="text-lg font-semibol text-purple-800">{}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
