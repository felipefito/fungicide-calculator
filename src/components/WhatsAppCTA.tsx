"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-[500px] h-64 sm:h-80 md:h-[500px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              Atendimento Direto
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ficou com alguma dúvida?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              Fale diretamente conosco pelo WhatsApp. Estamos prontos para
              esclarecer todas as suas dúvidas sobre a Calculadora de
              Fungicidas.
            </p>

            <motion.a
              href="https://api.whatsapp.com/send?phone=5554996219771&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Calculadora%20de%20Fungicidas."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-green-600 font-bold px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Chamar no WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">
              +55 54 99621-9771 • Resposta rápida
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
