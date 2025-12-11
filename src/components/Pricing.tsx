"use client";

import { motion } from "framer-motion";

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section
      id="preco"
      className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[650px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/offer/offer-bg.webp')" }}
    >
      {/* Overlay - mais forte no mobile */}
      <div className="absolute inset-0 bg-black/80 md:bg-gradient-to-l md:from-black/80 md:via-black/50 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 w-full">
        <div className="flex justify-center md:justify-end">
          {/* Preço e CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md md:max-w-lg text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
              Vale mais que qualquer{" "}
              <span className="text-[#4CAF50]">fungicida</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5 sm:mb-6">
              Se o programa falhar, a calculadora corrige
            </p>

            <div className="bg-[#161b22]/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-700">

              {/* Preço */}
              <div className="flex items-baseline gap-1 mb-2 sm:mb-3 justify-center">
                <span className="text-gray-400 text-base sm:text-xl">R$</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  197
                </span>
                <span className="text-gray-400 text-base sm:text-xl">,00</span>
              </div>

              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">
                ou em até 12x no cartão
              </p>

              {/* Features */}
              <div className="space-y-2 mb-5 sm:mb-6 text-left">
                {[
                  "+400 fungicidas cadastrados",
                  "Programas ilimitados",
                  "Notas de eficiência",
                  "Sugestões de melhoria",
                  "Histórico de programas",
                  "Atualizações gratuitas",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50] shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 text-sm sm:text-base"
              >
                Comprar Agora
              </button>

              <p className="text-gray-500 text-xs mt-3 text-center">
                Pagamento 100% seguro
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
