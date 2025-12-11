# Calculadora de Fungicidas

Landing page para a Calculadora de Fungicidas - uma ferramenta que permite simular e comparar a eficiência de produtos e programas de manejo de fungicidas na soja.

## Sobre o Projeto

A Calculadora de Fungicidas ajuda agricultores a:
- Definir cenários de lavoura personalizados
- Montar programas com +400 fungicidas cadastrados
- Receber notas de eficiência e alertas
- Comparar diferentes programas de manejo

## Tech Stack

- **Framework**: Next.js 16
- **React**: 19
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **TypeScript**: Strict mode

## Funcionalidades da Landing Page

- Hero section com CTAs animados
- Seção "Como Funciona" em 3 passos
- Grid de benefícios
- Card de preço destacado
- Prova social com análise visual
- Carrossel de demonstração
- Integração com ViaCEP no formulário
- Design responsivo (mobile-first)
- Modal de conversão

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção
npm start
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout raiz com metadados SEO
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais e variáveis
├── components/
│   ├── Header.tsx       # Navbar com menu mobile
│   ├── Hero.tsx         # Seção principal
│   ├── HowItWorks.tsx   # 3 passos
│   ├── Benefits.tsx     # Grid de benefícios
│   ├── Pricing.tsx      # Card de preço
│   ├── SocialProof.tsx  # Prova social
│   ├── Demo.tsx         # Carrossel
│   ├── History.tsx      # Histórico como guia
│   ├── WhatsAppCTA.tsx  # CTA WhatsApp
│   ├── Footer.tsx       # Rodapé
│   └── Modal.tsx        # Modal de conversão
└── lib/
    └── viacep.ts        # Integração ViaCEP
```

## Contato

- **Desenvolvedor**: José Alencar
- **Empresa**: Fito Consultoria Agrícola Ltda
- **WhatsApp**: +55 54 99621-9771
- **Instagram**: [@josedealencar.jr](https://instagram.com/josedealencar.jr)

## Licença

Projeto proprietário - Fito Consultoria Agrícola Ltda
