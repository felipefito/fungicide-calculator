"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Calculator() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#0d1117] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Imagem - aparece primeiro no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-1 md:order-1"
          >
            <Image
              src="/images/calculator/calculator-bg.webp"
              alt="Configuração da Calculadora"
              width={400}
              height={600}
              className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto"
              quality={90}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left order-2 md:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Configure seu{" "}
              <span className="text-[#4CAF50]">cenário</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6">
              Programe suas aplicações de fungicidas e calcule a eficácia do programa.
            </p>

            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white">Doenças:</strong> Cercospora, Ferrugem, Oídio, Antracnose, Mancha Alvo, Mofo Branco
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white">Variáveis:</strong> Nível de chuva, época de plantio, sistema de cultivo
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white">Cobertura:</strong> Quantidade de palhada e ciclo da cultivar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
