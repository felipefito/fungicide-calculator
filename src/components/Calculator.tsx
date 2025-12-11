"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Calculator() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#0d1117] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Configure seu{" "}
            <span className="text-[#4CAF50]">cenário</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Programe suas aplicações de fungicidas e calcule a eficácia do programa.
          </p>
        </motion.div>

        {/* Imagem panorâmica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <Image
            src="/images/calculator/calculator-bg.webp"
            alt="Configuração da Calculadora"
            width={800}
            height={450}
            className="w-full max-w-3xl h-auto rounded-lg"
            quality={90}
          />
        </motion.div>

        {/* Lista de recursos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] mt-1.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Doenças</p>
                <p className="text-gray-400 text-xs sm:text-sm">Cercospora, Ferrugem, Oídio, Antracnose, Mancha Alvo, Mofo Branco</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] mt-1.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Variáveis</p>
                <p className="text-gray-400 text-xs sm:text-sm">Nível de chuva, época de plantio, sistema de cultivo</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] mt-1.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Cobertura</p>
                <p className="text-gray-400 text-xs sm:text-sm">Quantidade de palhada e ciclo da cultivar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
