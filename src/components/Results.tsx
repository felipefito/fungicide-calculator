"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Imagem - maior e sem bordas/sombras */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Image
              src="/images/results/results-bg.webp"
              alt="Resultados da Calculadora"
              width={900}
              height={600}
              className="w-full h-auto max-w-none lg:scale-110 lg:origin-left"
              priority={false}
              quality={95}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Resultados{" "}
              <span className="text-[#4CAF50]">detalhados</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Visualize a nota geral do seu programa e o detalhamento por aplicação.
            </p>

            <div className="space-y-3 sm:space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  <strong className="text-gray-900">Nota Final:</strong> Avaliação geral do programa baseada na eficiência contra as doenças selecionadas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  <strong className="text-gray-900">Eficiência por Doença:</strong> Veja como cada produto performa contra cada doença específica
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-600">
                  <strong className="text-gray-900">Detalhamento:</strong> Análise fase por fase do seu programa de manejo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
