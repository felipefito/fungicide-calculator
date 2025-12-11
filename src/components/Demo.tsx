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
    <section id="demonstracao" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Veja o app em{" "}
            <span className="text-[#4CAF50]">ação</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Navegue pelas principais telas da Calculadora de Fungicidas
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        >
          {/* Phone Frame */}
          <div className="relative bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 h-4 sm:h-5 md:h-6 bg-gray-900 rounded-b-xl sm:rounded-b-2xl z-10" />

            {/* Screen */}
            <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover object-top"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#4CAF50] hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#4CAF50] hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </motion.div>

        {/* Info */}
        <div className="text-center mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
            {slides[currentSlide].title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#4CAF50] w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
