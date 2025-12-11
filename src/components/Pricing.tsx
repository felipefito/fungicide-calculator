"use client";

import { motion } from "framer-motion";

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section
      id="preco"
      className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/offer/offer-bg.webp')" }}
    >
      {/* Overlay para melhor legibilidade no mobile */}
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-l md:from-black/70 md:via-black/40 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="flex justify-center lg:justify-end">
          {/* Preço e CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md lg:max-w-lg text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Vale mais que qualquer{" "}
              <span className="text-[#4CAF50]">fungicida</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
              Se o programa falhar, a calculadora corrige
            </p>

            <div className="bg-[#161b22]/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-700">

              {/* Preço */}
              <div className="flex items-baseline gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center">
                <span className="text-gray-400 text-lg sm:text-2xl">R$</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                  197
                </span>
                <span className="text-gray-400 text-lg sm:text-2xl">,00</span>
              </div>

              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                ou em até 12x no cartão
              </p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                {[
                  "+400 fungicidas cadastrados",
                  "Programas ilimitados",
                  "Notas de eficiência",
                  "Sugestões de melhoria",
                  "Histórico de programas",
                  "Atualizações gratuitas",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50] shrink-0" />
                    <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 text-base sm:text-lg"
              >
                Comprar Agora
              </button>

              <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center">
                Pagamento 100% seguro
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
