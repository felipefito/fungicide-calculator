"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Tela Inicial",
    description:
      "Acesse rapidamente todas as funções da calculadora com uma interface limpa e intuitiva.",
  },
  {
    id: 2,
    title: "Configuração do Cenário",
    description:
      "Defina as condições da sua lavoura: região, clima, histórico de doenças e mais.",
  },
  {
    id: 3,
    title: "Seleção de Fungicidas",
    description:
      "Escolha entre mais de 400 fungicidas cadastrados e monte seu programa completo.",
  },
  {
    id: 4,
    title: "Análise de Eficiência",
    description:
      "Visualize notas detalhadas e alertas sobre o programa montado.",
  },
  {
    id: 5,
    title: "Comparação de Programas",
    description:
      "Compare diferentes programas lado a lado para tomar a melhor decisão.",
  },
];

export default function Demo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="demonstracao" className="py-24 bg-gray-50">
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
            Veja na Prática
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Demonstração do Aplicativo
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Conheça as principais telas e funcionalidades da Calculadora de
            Fungicidas
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Display */}
          <div className="relative bg-gray-900 rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden">
            {/* Browser-like header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 bg-gray-800 rounded-lg px-4 py-1 ml-4">
                <span className="text-gray-400 text-sm">
                  calculadoradefungicidas.com.br
                </span>
              </div>
            </div>

            {/* Slide Content */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6">
                    <Monitor className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-400 text-center max-w-md">
                    {slides[currentSlide].description}
                  </p>
                  <div className="mt-6 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                    Tela {currentSlide + 1} de {slides.length}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-green-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
