import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Otimização de imagens
  images: {
    // Formatos modernos para melhor qualidade e compressão
    formats: ["image/avif", "image/webp"],

    // Tamanhos de dispositivos comuns
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Tamanhos de imagens para srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Qualidade padrão (0-100)
    // WordPress geralmente usa 82, vamos usar 90 para alta qualidade
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ano de cache
  },
};

export default nextConfig;
