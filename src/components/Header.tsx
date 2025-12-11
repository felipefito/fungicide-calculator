"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/brand/logo.svg"
              alt="Fito Agrícola"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-semibold text-lg text-gray-800 hidden sm:block">
              Calculadora de Fungicidas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#como-funciona"
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Como Funciona
            </a>
            <a
              href="#beneficios"
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Benefícios
            </a>
            <a
              href="#preco"
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Preço
            </a>
            <a
              href="#demonstracao"
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Demonstração
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              Comprar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="#como-funciona"
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Como Funciona
                </a>
                <a
                  href="#beneficios"
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Benefícios
                </a>
                <a
                  href="#preco"
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preço
                </a>
                <a
                  href="#demonstracao"
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demonstração
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 w-full mt-2"
                >
                  Comprar Agora
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
