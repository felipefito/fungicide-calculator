"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <Image
              src="/images/results/results-bg.webp"
              alt="Resultados da Calculadora"
              width={800}
              height={530}
              className="w-full h-auto rounded-lg"
              priority={false}
              quality={95}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Resultados{" "}
              <span className="text-[#4CAF50]">detalhados</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6">
              Visualize a nota geral do seu programa e o detalhamento por aplicação.
            </p>

            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong className="text-gray-900">Nota Final:</strong> Avaliação geral do programa baseada na eficiência contra as doenças selecionadas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong className="text-gray-900">Eficiência por Doença:</strong> Veja como cada produto performa contra cada doença específica
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600">
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
