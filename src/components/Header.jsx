import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Curriculum from "../assets/my-resume.pdf";

const navList = [
  { href: "#home", label: "Sobre Mim" },
  { href: "#training", label: "Formação" },
  { href: "#projects", label: "Projetos" },
  { href: "#contacts", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();

    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-end py-4 px-4 lg:px-8">

        <nav className="hidden md:flex space-x-8 text-zinc-300 font-medium">
          {navList.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="transition duration-300 hover:text-red-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-8">
          <a
            href={Curriculum}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2 rounded-xl
              bg-red-500/10
              text-red-400
              border border-red-500/20
              hover:bg-red-500/20
              hover:border-red-500/40
              transition-all duration-300
            "
          >
            Currículo
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="text-red-400" size={28} />
            ) : (
              <Menu className="text-red-400" size={28} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-4 py-4 space-y-4">
          {navList.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                block
                text-zinc-300
                font-medium
                transition
                hover:text-red-400
              "
            >
              {link.label}
            </a>
          ))}

          <a
            href={Curriculum}
            target="_blank"
            rel="noreferrer"
            className="
              block text-center
              mt-4
              px-4 py-2
              rounded-xl
              bg-red-500/10
              text-red-400
              border border-red-500/20
            "
          >
            Currículo
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;