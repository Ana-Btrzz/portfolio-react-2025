import React, { useState } from "react";
import { BsPcDisplay, File, Menu, X } from "lucide-react";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#tips", label: "Tips" },
  { href: "#book", label: "Book" },
  { href: "#test", label: "Test" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between  py-4 px-4 lg:px-8 ">
        <div className="flex items-center space-x-2">
          <BsPcDisplay className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold text-purple-600">Ana Beatriz</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="hover:text-purple-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <File className="text-purple-600" />
          <a
            href="#"
            className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition text-sm"
          >
            Book
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
          {navList.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="block hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
