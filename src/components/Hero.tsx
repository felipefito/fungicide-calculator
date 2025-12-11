"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero/hero-bg.webp')" }}
    >
      {/* Overlay para melhor legibilidade - mais forte no mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:from-black/60 md:via-black/30 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 w-full">
        <div className="w-full md:w-1/2 lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Calculadora de{" "}
              <span className="text-[#4CAF50]">Fungicidas</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-3 sm:mb-4">
              Simule e compare a eficiência de produtos e programas de manejo
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 sm:mb-8">
              — em segundos
            </p>

            <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-lg">
              Monte e compare programas de fungicidas na soja com a ferramenta
              que ajuda você a selecionar os produtos com melhor eficiência para
              suas lavouras.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenModal}
                className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 text-base sm:text-lg"
              >
                Comprar Agora
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=5554996219771&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Calculadora%20de%20Fungicidas."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#4CAF50] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 hover:border-[#4CAF50] transition-all duration-300 text-center text-base sm:text-lg"
              >
                Agendar Demonstração
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <a
          href="#como-funciona"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-[#4CAF50] transition-colors"
        >
          <span className="text-sm">Saiba mais</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
