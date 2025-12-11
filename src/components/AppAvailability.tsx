"use client";

import Image from "next/image";

export default function AppAvailability() {
  return (
    <section className="py-16 sm:py-20 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/brand/logo-white.png"
            alt="Fito"
            width={160}
            height={90}
            className="h-14 sm:h-18 md:h-20 w-auto"
          />
        </div>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A Calculadora de Fungicidas está disponível no Fito App. Baixe o aplicativo e comece a usar.
        </p>
      </div>
    </section>
  );
}
