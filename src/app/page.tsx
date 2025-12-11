"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Demo from "@/components/Demo";
import History from "@/components/History";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <HowItWorks />
        <Benefits onOpenModal={openModal} />
        <Pricing onOpenModal={openModal} />
        <SocialProof />
        <Demo />
        <History />
        <WhatsAppCTA />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
