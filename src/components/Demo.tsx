"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/demo/demo-1.webp",
    title: "Formulário Inicial",
    description: "Configure cultura, doenças e aplicações do seu programa.",
  },
  {
    id: 2,
    image: "/images/demo/demo-2.webp",
    title: "Busca de Fungicidas",
    description: "Pesquise entre mais de 400 fungicidas cadastrados.",
  },
  {
    id: 3,
    image: "/images/demo/demo-3.webp",
    title: "Variáveis Avançadas",
    description: "Ajuste nível de chuva, época de plantio, sistema de cultivo e mais.",
  },
  {
    id: 4,
    image: "/images/demo/demo-4.webp",
    title: "Resultados e Notas",
    description: "Visualize a eficiência do programa e sugestões de melhoria.",
  },
  {
    id: 5,
    image: "/images/demo/demo-5.webp",
    title: "Histórico",
    description: "Acesse todos os programas salvos com suas notas.",
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
    <section id="demonstracao" className="py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Veja o app em{" "}
            <span className="text-[#4CAF50]">ação</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Navegue pelas principais telas da Calculadora de Fungicidas
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-[200px] sm:max-w-[280px] md:max-w-[320px] mx-auto"
        >
          {/* Phone Frame */}
          <div className="relative bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-3 sm:h-4 bg-gray-900 rounded-b-lg z-10" />

            {/* Screen */}
            <div className="relative bg-[#0d1117] rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden aspect-[9/19.5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-contain object-top"
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-10 sm:-left-14 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#4CAF50] transition-all z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-10 sm:-right-14 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#4CAF50] transition-all z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>

        {/* Info */}
        <div className="text-center mt-4 sm:mt-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            {slides[currentSlide].title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#4CAF50] w-5 sm:w-6"
                  : "bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
