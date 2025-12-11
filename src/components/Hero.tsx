"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile
    ? "url('/SEÇÃO 01/Bg-01-mobile.webp')"
    : "url('/SEÇÃO 01/Bg-01.1.webp')";

  return (
    <section
      className={`relative min-h-screen flex items-center bg-cover ${isMobile ? "bg-top" : "bg-center"} bg-no-repeat mt-10 overflow-hidden pt-20`}
      style={{ backgroundImage }}
    >
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? "pt-[42vh] pb-12" : "py-12 lg:py-20"}`}>
        <div className={`flex ${isMobile ? "items-start" : "items-center"} justify-center lg:justify-start`}>
          {/* Conteúdo centralizado em mobile, posicionado no espaço vazio */}
          <div className="text-center lg:text-left max-w-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#6AAF08]/20 border border-[#6AAF08]/40 rounded-full px-4 py-2 mb-3">
              <Image
                src="/brand/logo-white.png"
                alt="Calculadora"
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <span className="text-white  font-semibold text-sm sm:text-base">
                Calculadora de fungicidas
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Monte e compare <br /> programas de fungicidas na soja{" "}
              <span className="text-gray-400 font-bold text-lg">— em segundos.</span>
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
              A ferramenta ajuda você a escolher os produtos com a melhor
              eficiência para a sua lavoura.
            </p>

            {/* Como funciona */}
            <div className="mb-6">
              <h2 className="text-[#6AAF08] font-bold text-lg mb-3 text-center lg:text-left">
                Como funciona:
              </h2>
              <ul className="space-y-2.5 flex flex-col items-start">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/hero/step-1.webp"
                    alt="Passo 1"
                    width={28}
                    height={28}
                    className="w-7 h-7 shrink-0"
                  />
                  <span className="text-white">Defina o cenário da lavoura</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/hero/step-2.webp"
                    alt="Passo 2"
                    width={28}
                    height={28}
                    className="w-7 h-7 shrink-0"
                  />
                  <span className="text-white">
                    Monte o programa (+400 fungicidas)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/hero/step-3.webp"
                    alt="Passo 3"
                    width={28}
                    height={28}
                    className="w-7 h-7 shrink-0"
                  />
                  <span className="text-white">
                    Receba notas, alertas e sugestões
                  </span>
                </li>
              </ul>
            </div>

            {/* Botão */}
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300"
              style={{ boxShadow: "0px 0px 20px rgba(106, 175, 8, 0.5)" }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
