"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

interface ValuePropositionProps {
  onOpenModal: () => void;
}

export default function ValueProposition({ onOpenModal }: ValuePropositionProps) {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile
    ? "url('/Seção 03/Bg-03-mobile.webp')"
    : "url('/Seção 03/Bg-03.webp')";

  return (
    <section
      className={`relative min-h-screen flex items-center bg-cover ${isMobile ? "bg-top" : "bg-center"} bg-no-repeat overflow-hidden ${isMobile ? "py-0" : "py-20"}`}
      style={{ backgroundImage }}
    >
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? "pt-[60vh] pb-8" : ""}`}>
        {/* Container centralizado */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Título */}
          <p className={`text-[#9BC656] font-bold uppercase tracking-widest mb-3 ${isMobile ? "text-xs" : "text-sm sm:text-base"}`}>
            A DECISÃO CERTA
          </p>
          <h2 className={`font-bold text-black mb-4 max-w-4xl leading-tight ${isMobile ? "text-3xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`}>
            Vale mais que qualquer fungicida
          </h2>
          <p className={`text-gray-700 leading-relaxed max-w-2xl ${isMobile ? "text-base mb-6" : "text-lg sm:text-xl md:text-2xl mb-12"}`}>
            O programa ideal custa menos do que um erro de decisão.
          </p>

          {/* Botão */}
          <button
            type="button"
            onClick={onOpenModal}
            className={`bg-[#7FB834] hover:bg-[#6da329] text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2 ${isMobile ? "text-base px-10 py-3" : "text-lg px-16 py-5"}`}
            style={{ boxShadow: "0px 0px 20px rgba(127, 184, 52, 0.5)" }}
          >
            Comprar <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
