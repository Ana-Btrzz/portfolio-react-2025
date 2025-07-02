import { a, footer, link, ul } from "framer-motion/client";
import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  { icon: <FaWhatsapp className="text-xl" />, href: "tel:+5511933632395" },
  {
    icon: <MdOutlineEmail className="text-xl" />,
    href: "mailto:anabeatriz.arruda7@gmail.com",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    href: "https://www.linkedin.com/in/ana-beatriz-baa39875/",
  },
  {
    icon: <FaGithub className="text-xl" />,
    href: "https://github.com/Ana-Btrzz",
  },
];

const contactInfo = [
  {
    icon: <FaPhone className="mr-4 text-white/70 m-1" />,
    text: (
      <a
        href="tel:+5511933632395"
        className="hover:text-purple-300 transitions-colors"
      >
        +55 11 93363-2395
      </a>
    ),
  },
  {
    icon: <MdOutlineEmail className="mr-4 text-white/70 m-1" />,
    text: (
      <a
        target="_blank"
        href="mailto:anabeatriz.arruda7@gmail.com"
        className="hover:text-purple-300 transitions-colors"
      >
        anabeatriz.arruda7@gmail.com
      </a>
    ),
  },
  {
    icon: <FaLinkedin className="mr-4 text-white/70 m-1" />,
    text: (
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ana-beatriz-baa39875/"
        className="hover:text-purple-300 transitions-colors"
      >
        Ana
      </a>
    ),
  },
  {
    icon: <FaGithub className="mr-4 text-white/70 m-1" />,
    text: (
      <a
        target="_blank"
        href="https://github.com/Ana-Btrzz"
        className="hover:text-purple-300 transitions-colors"
      >
        fjsfhsudhf.com
      </a>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-gradient-to-b from-violet-950 to-violet-950 text-white pt-16 pb-12 pr-5 pl-5 relative overflow-hidden md:m-auto"
    >
      <div className="container mx-auto px-6 relative z-10 flex items-stretch  justify-center relative flex-wrap md:justify-between">
        <div className="flex flex-col mb-6 justify-center">
          {/* araeftsegt */}
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-200">
              Contatos
            </h2>
          </div>
          <div className="flex space-x-6 mb-8 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                {link.icon}{" "}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 mb-8 ">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-300 transition-colors w-max mb-8 ">
            {contactInfo.map((item, index) => (
              <ul className="space-y-4">
                <li key={index} className="flex items-start mt-1">
                  {item.icon}
                  {item.text}
                </li>
              </ul>
            ))}
            <div
              className="flex justify-end mt-8"
              /* style={{ fontFamily: "Source Code Pro" }} */
            >
              <p>Barueri - São Paulo</p>
            </div>
          </div>

          {/* <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-300 transition-colors">
            <h3 className="text-xl font-semibold mb-5">Ana B.</h3>
            <p className="">Me mande um email</p>
          </div> */}

          <div className="pt-8 flex-col md:flex-row justify-items-center absolute bottom-0 right-0">
            <p className="text-white/50 text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Ana B. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
