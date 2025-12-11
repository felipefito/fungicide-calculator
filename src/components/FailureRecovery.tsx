"use client";

import Image from "next/image";

interface FailureRecoveryProps {
  onOpenModal: () => void;
}

export default function FailureRecovery({ onOpenModal }: FailureRecoveryProps) {
  return (
    <section
      id="preco"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden py-20"
      style={{ backgroundImage: "url('/images/failure/failure-bg.webp')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Conteúdo central */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#6AAF08] font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
            SE O PROGRAMA FALHAR
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            A calculadora corrige
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-4">
            Quando a nota decepciona, cada erro vira uma oportunidade.
          </p>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Veja quais produtos melhoram cada aplicação na sua lavoura de soja.
          </p>
        </div>

        {/* Card de oferta */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto border border-gray-800">
          <p className="text-[#6AAF08] font-bold text-sm sm:text-base uppercase tracking-widest mb-6 text-center">
            OFERTA DE LANÇAMENTO
          </p>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#6AAF08]">
                5x
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#6AAF08]">
                de
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                R$39<span className="text-3xl">,40</span>
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-300 mb-8">
              <svg
                className="w-5 h-5 text-[#6AAF08]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <title>Checked</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base sm:text-lg">OU R$197,00 À VISTA</span>
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-bold text-lg px-16 py-5 rounded-full transition-all duration-300 transform hover:scale-105 mb-6"
              style={{ boxShadow: "0px 0px 25px rgba(106, 175, 8, 0.6)" }}
            >
              Comprar
            </button>

            <p className="text-gray-400 text-sm">
              Acesso liberado até 30/05/26
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
