"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "/images/hero/step-1.webp",
    title: "Defina o cenário",
    description:
      "Configure as condições da sua lavoura, incluindo doenças, nível de chuva, época de plantio e sistema de cultivo.",
  },
  {
    number: "/images/hero/step-2.webp",
    title: "Monte o programa",
    description:
      "Escolha entre mais de 400 fungicidas cadastrados e monte seu programa de manejo completo.",
  },
  {
    number: "/images/hero/step-3.webp",
    title: "Receba notas e alertas",
    description:
      "Obtenha avaliações detalhadas do seu programa com notas de eficiência e sugestões de melhoria.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Como Funciona
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos, você terá a análise completa do seu programa de
            fungicidas
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Número grande */}
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src={step.number}
                  alt={`Passo ${index + 1}`}
                  width={120}
                  height={120}
                  className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                  quality={90}
                />
              </div>

              {/* Content */}
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
