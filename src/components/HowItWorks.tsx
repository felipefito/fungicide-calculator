"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

interface HowItWorksProps {
  onOpenModal: () => void;
}

export default function HowItWorks({ onOpenModal }: HowItWorksProps) {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile
    ? "url('/Seção 02/Bg-02-mobile-calculadora.webp')"
    : "url('/Seção 02/Bg-02-calculadora.webp')";

  return (
    <section
      id="como-funciona"
      className={`relative min-h-screen flex items-center bg-cover ${isMobile ? "bg-top" : "bg-center"} bg-no-repeat overflow-hidden py-20`}
      style={{ backgroundImage }}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? "pt-[55vh] pb-12" : ""}`}>
        <div className={`grid lg:grid-cols-2 gap-8 xl:gap-16 ${isMobile ? "items-start" : "items-center"}`}>
          {/* Coluna esquerda - Imagem do celular */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md">

            </div>
          </div>

          {/* Coluna direita - Conteúdo */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Título */}
            <div className="mb-10">
              <p className="text-[#9BC656] font-bold text-base uppercase tracking-wider mb-4">
                ESCOLHER O
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Programa ideal de fungicidas
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                É uma das decisões mais caras e complexas da safra.
              </p>
            </div>

            {/* Card com destaque e Tag Soja */}
            <div className="bg-[#1a1f1a] border border-[#6AAF08]/30 rounded-xl p-6 mb-8 relative">
              <p className="text-gray-300 text-sm sm:text-base pr-24 leading-relaxed">
                Analisa{" "}
                <span className="text-[#FDB913] font-semibold">
                  risco das doenças
                </span>
                ,{" "}
                <span className="text-[#FDB913] font-semibold">
                  desempenho dos fungicidas
                </span>{" "}
                e gera a{" "}
                <span className="text-[#FDB913] font-semibold">
                  NOTA FINAL DE EFICIÊNCIA
                </span>{" "}
                do seu manejo.
              </p>

              {/* Tag Soja */}
              <div className="absolute top-1/2 right-6 -translate-y-1/2 bg-[#6AAF08]/20 border border-[#6AAF08] rounded-full px-5 py-2">
                <span className="text-[#FDB913] font-bold text-lg">Soja</span>
              </div>
            </div>

            {/* Grid responsivo: coluna única em mobile, duas colunas em desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Coluna Esquerda - Preço */}
              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-[#9BC656] font-bold text-2xl">R$</span>
                  <span className="text-white font-bold text-7xl leading-none">197</span>
                  <span className="text-white font-bold text-3xl">,00</span>
                </div>
                <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider mb-10">
                  ACESSO LIBERADO ATÉ 30/5/26
                </p>

                {/* Botão Comprar (desktop apenas) */}
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="hidden lg:inline-flex bg-[#7FB834] hover:bg-[#6da329] text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 items-center gap-2"
                >
                  Comprar <span>→</span>
                </button>
              </div>

              {/* Coluna Direita - Parcelas */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Cartão de crédito</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-white font-medium text-base">
                    ou parcele no cartão:
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-base text-white">
                    <svg className="w-5 h-5 text-[#6AAF08]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <title>Check</title>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>2 x R$ 98,50</span>
                  </div>
                  <div className="flex items-center gap-2 text-base text-white">
                    <svg className="w-5 h-5 text-[#6AAF08]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <title>Check</title>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>3 x R$ 65,67</span>
                  </div>
                  <div className="flex items-center gap-2 text-base text-white">
                    <svg className="w-5 h-5 text-[#6AAF08]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <title>Check</title>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>4 x R$ 49,25</span>
                  </div>
                  <div className="flex items-center gap-2 text-base text-white">
                    <svg className="w-5 h-5 text-[#6AAF08]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <title>Check</title>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>5 x R$ 39,40</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Comprar (mobile apenas) */}
            <button
              type="button"
              onClick={onOpenModal}
              className="lg:hidden bg-[#7FB834] hover:bg-[#6da329] text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              Comprar <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
