"use client";

import { useState } from "react";
import AppAvailability from "@/components/AppAvailability";
import Demo from "@/components/Demo";
import FailureRecovery from "@/components/FailureRecovery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import HowItWorks from "@/components/HowItWorks";
import LaunchOffer from "@/components/LaunchOffer";
import Modal from "@/components/Modal";
import Pricing from "@/components/Pricing";
import RightDecision from "@/components/RightDecision";
import ValueProposition from "@/components/ValueProposition";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        {/* Seção 1: Hero */}
        <Hero onOpenModal={openModal} />

        {/* Seção 2: Como Funciona */}
        <HowItWorks onOpenModal={openModal} />

        {/* Seção 3: A Decisão Certa (com laptop e celular) */}
        <ValueProposition onOpenModal={openModal} />

        {/* Seção 4: Se o Programa Falhar */}
        <FailureRecovery onOpenModal={openModal} />

        {/* Seção 5: Demonstração */}
        <Demo />

        {/* Seção 6: Histórico */}
        <History onOpenModal={openModal} />

        {/* Seção 7: CTA WhatsApp */}
        <WhatsAppCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal de conversão */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
