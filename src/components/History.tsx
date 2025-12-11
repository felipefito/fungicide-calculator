"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section
      className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/history/history-bg.webp')" }}
    >
      {/* Overlay - mais forte no mobile */}
      <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 w-full">
        {/* Mobile: centralizado, Desktop: esquerda */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Histórico como{" "}
                <span className="text-[#4CAF50]">Guia de Manejo</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8">
                Mantenha um registro completo de todos os programas criados e use
                esse conhecimento para aprimorar suas decisões nas próximas safras.
              </p>

              <div className="space-y-3 sm:space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-200">
                    <strong className="text-white">Registro Completo:</strong> Salve todos os programas testados com suas notas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-200">
                    <strong className="text-white">Evolução Contínua:</strong> Acompanhe a evolução das suas estratégias
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-200">
                    <strong className="text-white">Acesso Rápido:</strong> Recupere programas anteriores com um clique
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
