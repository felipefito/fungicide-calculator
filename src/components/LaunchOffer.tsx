"use client";

interface LaunchOfferProps {
  onOpenModal: () => void;
}

export default function LaunchOffer({ onOpenModal }: LaunchOfferProps) {
  return (
    <section
      className="relative py-20 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/offer/offer-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#6AAF08] font-bold text-base sm:text-lg uppercase tracking-widest mb-6">
          OFERTA DE LANÇAMENTO
        </p>

        <div className="mb-6">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            5x de R$39,40
          </p>
          <p className="text-gray-400 text-lg sm:text-xl mt-3">
            ou R$197,00 À VISTA
          </p>
        </div>

        <p className="text-gray-300 text-base sm:text-lg mb-8">
          Acesso liberado até 30/05/26
        </p>

        <button
          type="button"
          onClick={onOpenModal}
          className="bg-[#6AAF08] hover:bg-[#5a9507] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300"
          style={{ boxShadow: "0px 0px 20px rgba(106, 175, 8, 0.5)" }}
        >
          Comprar
        </button>
      </div>
    </section>
  );
}
