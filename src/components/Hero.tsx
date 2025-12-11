"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Shield, Zap } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero/hero-bg.webp')" }}
    >
      {/* Overlay - mais forte no mobile para legibilidade */}
      <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 w-full">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              +400 fungicidas cadastrados
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Calculadora de{" "}
              <span className="text-[#4CAF50] relative">
                Fungicidas
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-green-500/50 hidden sm:block"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 Q50 0 100 7 Q150 14 200 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-2 sm:mb-3">
              Simule e compare a eficiência de produtos e programas de manejo
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4CAF50] mb-5 sm:mb-6">
              — em segundos
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Monte e compare programas de fungicidas na soja com a ferramenta
              que ajuda você a selecionar os produtos com melhor eficiência para
              suas lavouras.
            </p>

            {/* Features mini badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Dados confiáveis</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
                <Zap className="w-4 h-4 text-green-400" />
                <span>Resultado instantâneo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.button
                type="button"
                onClick={onOpenModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <span>Comprar Agora</span>
                <span className="text-green-200 font-normal text-sm sm:text-base">R$ 197</span>
              </motion.button>
              <motion.a
                href="https://api.whatsapp.com/send?phone=5554996219771&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Calculadora%20de%20Fungicidas."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 hover:border-green-400 transition-all duration-300 text-center text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chame no WhatsApp
              </motion.a>
            </div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6"
            >
              Desenvolvido por José Alencar • Fito Consultoria Agrícola
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
