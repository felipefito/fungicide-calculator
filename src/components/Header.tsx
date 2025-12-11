"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
          : "bg-[#0d1117]/80 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src="/brand/logo-white.png"
              alt="Fito Agrícola"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-11 sm:h-11"
            />
            <span className="font-semibold text-sm sm:text-base text-white hidden min-[400px]:block">
              Calculadora de Fungicidas
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Como Funciona
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("preco")}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Preço
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("demonstracao")}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              Demonstração
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              style={{ boxShadow: "0px 0px 20px rgba(106, 175, 8, 0.5)" }}
            >
              Comprar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Close</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Menu</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 animate-fadeIn">
            <div className="flex flex-col gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("como-funciona")}
                className="text-gray-300 hover:text-white transition-colors font-medium text-left"
              >
                Como Funciona
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("preco")}
                className="text-gray-300 hover:text-white transition-colors font-medium text-left"
              >
                Preço
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("demonstracao")}
                className="text-gray-300 hover:text-white transition-colors font-medium text-left"
              >
                Demonstração
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 w-full mt-2"
                style={{ boxShadow: "0px 0px 20px rgba(106, 175, 8, 0.5)" }}
              >
                Comprar Agora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
