"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/brand/logo-white.png"
              alt="Fito"
              width={120}
              height={68}
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Instagram */}
          <div className="mb-6">
            <a
              href="https://instagram.com/fitoagricolaoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm text-white">@fitoagricolaoficial</span>
            </a>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-1">Desenvolvido por</p>
            <p className="text-white font-semibold text-lg">José Alencar</p>
          </div>

          <div className="mb-8">
            <p className="text-white font-medium">Fito Consultoria Agrícola Ltda. Lagoa Vermelha – RS. CNPJ: 33.808.135-0001/37</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 mb-6">
            <p className="text-gray-400 text-sm">
              Copyright © Calculadora – Todos os direitos reservados
            </p>
          </div>

          {/* Disponível */}
          <div>
            <p className="text-white font-semibold text-lg mb-4">Disponível:</p>

            {/* App Store Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://apps.apple.com/br/app/fito-agr%C3%ADcola/id6503173424"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-5 py-3 rounded-xl flex items-center gap-3 transition-colors"
                aria-label="Baixar na App Store"
              >
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <title>Apple</title>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-600">DISPONÍVEL NO</p>
                  <p className="text-sm font-semibold text-black">App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.fitoagricola.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 px-5 py-3 rounded-xl flex items-center gap-3 transition-colors"
                aria-label="Baixar no Google Play"
              >
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <title>Google Play</title>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-600">DISPONÍVEL NO</p>
                  <p className="text-sm font-semibold text-black">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
