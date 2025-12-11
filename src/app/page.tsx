"use client";

import { useState } from "react";
import Calculator from "@/components/Calculator";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import HowItWorks from "@/components/HowItWorks";
import Modal from "@/components/Modal";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        {/* Seção 1: Hero - fundo escuro */}
        <Hero onOpenModal={openModal} />

        {/* Seção 2: Como Funciona - fundo claro */}
        <HowItWorks />

        {/* Seção 3: Calculadora - fundo escuro */}
        <Calculator />

        {/* Seção 4: Resultados - fundo claro */}
        <Results />

        {/* Seção 5: Oferta/Preço - fundo escuro */}
        <Pricing onOpenModal={openModal} />

        {/* Seção 6: Demonstração - fundo claro */}
        <Demo />

        {/* Seção 7: Histórico - fundo escuro */}
        <History />

        {/* Seção 8: CTA WhatsApp - fundo verde */}
        <WhatsAppCTA />
      </main>

      {/* Seção 9: Footer - fundo escuro */}
      <Footer />

      {/* Modal de conversão */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
