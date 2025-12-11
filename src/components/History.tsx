"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface HistoryProps {
  onOpenModal: () => void;
}

export default function History({ onOpenModal }: HistoryProps) {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile
    ? "url('/Seção 06/Bg-05-mobile.webp')"
    : "url('/Seção 06/Bg-05.webp')";

  return (
    <section
      className={`relative min-h-screen flex items-center bg-cover ${isMobile ? "bg-top" : "bg-center"} bg-no-repeat overflow-hidden py-20`}
      style={{ backgroundImage }}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? "pt-[55vh] pb-12" : ""}`}>
        <div className={`grid lg:grid-cols-2 gap-12 ${isMobile ? "items-start" : "items-center"}`}>
          {/* Coluna esquerda - Conteúdo */}
          <div className="text-center lg:text-left">
            <p className="text-[#6AAF08] font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
              SEU HISTÓRICO VIRA
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Guia de manejo
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Reveja, edite e evolua seus programas a qualquer momento.
            </p>

            {/* Card informativo */}
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-full flex items-center justify-center w-20 h-">
                  <Image
                    src="/brand/logo-white.png"
                    alt="Fito Logo"
                    width={32}
                    height={32}
                    className="object-contain h-20 w-20"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">
                    A Calculadora de Fungicidas está disponível no Fito App.
                    <br />
                    Baixe o aplicativo e começar a usar.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: "0px 0px 25px rgba(106, 175, 8, 0.6)" }}
            >
              Comprar
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
