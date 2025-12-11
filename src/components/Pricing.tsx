"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, CreditCard } from "lucide-react";

const features = [
  "Acesso a +400 fungicidas cadastrados",
  "Monte programas ilimitados",
  "Notas de eficiência detalhadas",
  "Alertas de incompatibilidade",
  "Histórico completo de programas",
  "Atualizações gratuitas",
  "Suporte via WhatsApp",
  "Acesso vitalício",
];

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preco" className="py-24 bg-white">
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
            Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Preço Único e Acessível
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Um único pagamento para acesso completo à ferramenta que vai
            revolucionar suas decisões
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Badge */}
            <div className="relative flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Oferta Especial
              </div>
            </div>

            {/* Price */}
            <div className="relative text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-white/70 text-lg">R$</span>
                <span className="text-6xl sm:text-7xl font-bold text-white">
                  197
                </span>
                <span className="text-white/70 text-lg">,00</span>
              </div>
              <p className="text-white/80 flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4" />
                ou em até 12x no cartão
              </p>
            </div>

            {/* Features */}
            <div className="relative space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="relative w-full bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg"
            >
              Comprar Agora
            </button>

            {/* Trust badges */}
            <p className="relative text-center text-white/60 text-sm mt-4">
              Pagamento 100% seguro
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
