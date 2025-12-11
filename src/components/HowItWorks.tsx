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
    <section id="como-funciona" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Como Funciona
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos, você terá a análise completa do seu programa de
            fungicidas
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Número grande */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src={step.number}
                  alt={`Passo ${index + 1}`}
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  quality={90}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
