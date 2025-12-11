"use client";

import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Clock,
  Database,
  Target,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize a Eficiência",
    description:
      "Compare diferentes produtos e encontre a combinação mais eficiente para sua lavoura.",
  },
  {
    icon: Clock,
    title: "Economize Tempo",
    description:
      "Tome decisões em segundos com análises instantâneas e dados precisos.",
  },
  {
    icon: Database,
    title: "+400 Fungicidas",
    description:
      "Banco de dados completo e atualizado com os principais fungicidas do mercado.",
  },
  {
    icon: Target,
    title: "Análise Precisa",
    description:
      "Notas de eficiência baseadas em dados técnicos e pesquisas de campo.",
  },
  {
    icon: Shield,
    title: "Reduza Riscos",
    description:
      "Alertas sobre incompatibilidades e riscos do programa escolhido.",
  },
  {
    icon: Zap,
    title: "Resultados Imediatos",
    description:
      "Visualize os resultados do seu programa instantaneamente na tela.",
  },
];

interface BenefitsProps {
  onOpenModal: () => void;
}

export default function Benefits({ onOpenModal }: BenefitsProps) {
  return (
    <section id="beneficios" className="py-24 bg-gray-50">
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
            Por que escolher
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Vale mais que qualquer fungicida
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A ferramenta que transforma dados em decisões inteligentes para sua
            lavoura
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                <benefit.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button
            onClick={onOpenModal}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 text-lg"
          >
            Quero a Calculadora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
