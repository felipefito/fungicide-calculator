"use client";

import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image
                src="/brand/logo.svg"
                alt="Fito Agrícola"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl">Calculadora de Fungicidas</h3>
                <p className="text-gray-400 text-xs sm:text-sm">by Fito Agrícola</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              A ferramenta que ajuda você a selecionar os produtos com melhor
              eficiência para suas lavouras. Monte e compare programas de
              fungicidas na soja em segundos.
            </p>

            {/* App Store Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-gray-400">Baixe na</p>
                  <p className="text-xs sm:text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-gray-400">Disponível no</p>
                  <p className="text-xs sm:text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5554996219771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>+55 54 99621-9771</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/josedealencar.jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm sm:text-base"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>@josedealencar.jr</span>
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Lagoa Vermelha – RS</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Empresa</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">
                    Fito Consultoria Agrícola Ltda
                  </p>
                  <p className="text-xs sm:text-sm">CNPJ: 33.808.135-0001/37</p>
                </div>
              </li>
              <li className="text-gray-400">
                <p className="font-medium text-white text-sm sm:text-base">Desenvolvedor</p>
                <p className="text-xs sm:text-sm">José Alencar</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Calculadora de Fungicidas. Todos os
              direitos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Desenvolvido por{" "}
              <a
                href="#"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                @OVERPAGES
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
