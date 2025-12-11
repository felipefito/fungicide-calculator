"use client";

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preco" className="py-16 sm:py-20 bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card de preço */}
        <div className="bg-[#0d1117] rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
          {/* Produto */}
          <p className="text-[#6AAF08] font-bold text-xl sm:text-2xl mb-6">
            Soja
          </p>

          {/* Preço */}
          <div className="flex items-baseline justify-center gap-1 mb-3">
            <span className="text-gray-400 text-xl">R$</span>
            <span className="text-6xl sm:text-7xl font-bold text-white">197</span>
            <span className="text-gray-400 text-xl">,00</span>
          </div>

          {/* Acesso */}
          <p className="text-[#6AAF08] font-semibold text-base mb-8">
            ACESSO LIBERADO ATÉ 30/5/26
          </p>

          {/* Parcelamento */}
          <div className="space-y-2 mb-8 text-gray-300 text-base">
            <p>2x R$ 98,50</p>
            <p>3x R$ 65,67</p>
            <p>4x R$ 49,25</p>
            <p>5x R$ 39,40</p>
          </div>

          {/* Botão */}
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full bg-[#6AAF08] hover:bg-[#5a9507] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg"
            style={{ boxShadow: "0px 0px 20px rgba(106, 175, 8, 0.5)" }}
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}
