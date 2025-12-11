"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const slides = [
  { id: 1, image: "/images/demo/demo-1.webp", alt: "Tela inicial - Encontre uma lavoura" },
  { id: 2, image: "/images/demo/demo-2.webp", alt: "Histórico de cálculos" },
  { id: 3, image: "/images/demo/demo-3.webp", alt: "Calculadora de Fungicidas" },
  { id: 4, image: "/images/demo/demo-4.webp", alt: "Busca de produtos" },
  { id: 5, image: "/images/demo/demo-5.webp", alt: "Configuração de aplicação" },
];

export default function Demo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isPaused = false;
    const slideWidth = 420; // largura do card + gap atualizada para cards maiores
    const totalSlides = slides.length;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1.2; // velocidade mais rápida para loop suave

        // Quando rolar um conjunto completo, reseta para criar loop infinito
        const maxScroll = slideWidth * totalSlides;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    // Pausa quando o mouse está sobre o container
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="demonstracao" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Demonstração rápida!
          </h2>
        </div>

        {/* Carrossel Automático */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth pb-8 px-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Quintuplicar slides para efeito infinito mais suave */}
          {[...slides, ...slides, ...slides, ...slides, ...slides].map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="flex-shrink-0"
            >
              <div className="bg-transparent rounded-3xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300 w-[360px] sm:w-[400px]">
                <div className="relative w-full h-auto">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={400}
                    height={866}
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <div className="text-center mt-8 px-4">
          <p className="text-gray-400 text-sm">
            Passe o mouse sobre as imagens para pausar
          </p>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
