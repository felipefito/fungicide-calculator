"use client";

import { useState, useEffect } from "react";

/**
 * Hook para detectar se o dispositivo é mobile
 * Atualiza em tempo real quando a janela é redimensionada
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para checar se é mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Checa na montagem
    checkIsMobile();

    // Adiciona listener para resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
