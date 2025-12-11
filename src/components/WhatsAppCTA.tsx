"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium mb-3 sm:mb-4">
              <Phone className="w-3 h-3" />
              Atendimento Direto
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ficou com alguma dúvida?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-6 max-w-xl mx-auto">
              Fale diretamente conosco pelo WhatsApp. Estamos prontos para
              esclarecer todas as suas dúvidas.
            </p>

            <motion.a
              href="https://api.whatsapp.com/send?phone=5554996219771&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Calculadora%20de%20Fungicidas."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group inline-flex items-center gap-2 bg-white text-green-600 font-bold px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Chamar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-white/70 text-xs mt-3 sm:mt-4">
              +55 54 99621-9771 • Resposta rápida
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
