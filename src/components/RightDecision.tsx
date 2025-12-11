"use client";

export default function RightDecision() {
  return (
    <section
      className="relative py-20 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/results/results-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base text-gray-400 uppercase tracking-widest mb-3">
          A DECISÃO CERTA
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Vale mais que qualquer fungicida
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          O programa ideal custa menos do que um erro de decisão.
        </p>
      </div>
    </section>
  );
}
