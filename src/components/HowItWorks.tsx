"use client";

import { motion } from "framer-motion";
import { MapPin, Layers, Bell } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Defina o cenário",
    description:
      "Configure as condições da sua lavoura, incluindo região, clima e pressão de doenças para uma análise personalizada.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Monte o programa",
    description:
      "Escolha entre mais de 400 fungicidas cadastrados e monte seu programa de manejo completo com facilidade.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Bell,
    title: "Receba notas e alertas",
    description:
      "Obtenha avaliações detalhadas do seu programa com notas de eficiência e alertas importantes para otimização.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Simples e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Em apenas 3 passos, você terá a análise completa do seu programa de
            fungicidas
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
              )}

              <div className="relative bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-gray-400 group-hover:text-green-500 transition-colors">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
