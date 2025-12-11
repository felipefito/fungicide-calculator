"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section
      className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[650px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/history/history-bg.webp')" }}
    >
      {/* Overlay para melhor legibilidade no mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:from-black/60 md:via-black/30 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="w-full md:w-1/2 lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Histórico como{" "}
              <span className="text-[#4CAF50]">Guia de Manejo</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
              Mantenha um registro completo de todos os programas criados e use
              esse conhecimento para aprimorar suas decisões nas próximas safras.
            </p>

            <div className="space-y-3 sm:space-y-4">
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
    </section>
  );
}
