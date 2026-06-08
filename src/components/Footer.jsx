import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaWhatsapp className="text-xl" />,
    href: "tel:+5511933632395",
  },
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
    icon: <FaPhone className="mr-4 text-red-500 mt-1" />,
    text: (
      <a
        href="tel:+5511933632395"
        className="hover:text-red-400 transition-colors"
      >
        +55 11 93363-2395
      </a>
    ),
  },
  {
    icon: <MdOutlineEmail className="mr-4 text-red-500 mt-1" />,
    text: (
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:anabeatriz.arruda7@gmail.com"
        className="hover:text-red-400 transition-colors"
      >
        anabeatriz.arruda7@gmail.com
      </a>
    ),
  },
  {
    icon: <FaLinkedin className="mr-4 text-red-500 mt-1" />,
    text: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/ana-beatriz-baa39875/"
        className="hover:text-red-400 transition-colors"
      >
        LinkedIn
      </a>
    ),
  },
  {
    icon: <FaGithub className="mr-4 text-red-500 mt-1" />,
    text: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Ana-Btrzz"
        className="hover:text-red-400 transition-colors"
      >
        github.com/Ana-Btrzz
      </a>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-black border-t border-red-950 text-white pt-20 pb-10 px-5"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Contato
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mb-8"></div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-zinc-900
                    border border-red-950
                    text-red-500
                    p-4
                    rounded-full
                    transition-all
                    duration-300
                    hover:bg-red-600
                    hover:text-white
                    hover:border-red-500
                    hover:-translate-y-1
                    hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]
                  "
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div
            className="
              bg-zinc-900
              border border-red-950
              rounded-2xl
              p-8
              w-full
              lg:max-w-lg
              hover:border-red-700
              transition-all
            "
          >
            <ul className="space-y-5 text-zinc-300">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-zinc-800 text-right">
              <p className="text-zinc-500">
                Barueri - São Paulo
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Ana Beatriz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;