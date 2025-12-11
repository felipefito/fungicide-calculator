"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, MapPin } from "lucide-react";
import { fetchCEP, formatCEP, type ViaCEPResponse } from "@/lib/viacep";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  formacao: string;
  cep: string;
  cidade: string;
  estado: string;
  area: string;
}

const API_URL = "/api/submit-form";
const PAYMENT_URL = "https://cielolink.com.br/4phFrPe";

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    formacao: "",
    cep: "",
    cidade: "",
    estado: "",
    area: "",
  });
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);
  const [cepError, setCepError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle CEP lookup
  const handleCEPChange = useCallback(async (value: string) => {
    const formatted = formatCEP(value);
    setFormData((prev) => ({ ...prev, cep: formatted }));
    setCepError("");

    const cleanCEP = value.replace(/\D/g, "");
    if (cleanCEP.length === 8) {
      setIsLoadingCEP(true);
      const data: ViaCEPResponse | null = await fetchCEP(cleanCEP);
      setIsLoadingCEP(false);

      if (data) {
        setFormData((prev) => ({
          ...prev,
          cidade: data.localidade,
          estado: data.uf,
        }));
      } else {
        setCepError("CEP não encontrado");
      }
    } else {
      setFormData((prev) => ({ ...prev, cidade: "", estado: "" }));
    }
  }, []);

  // Format phone
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  // Handle submit to Google Sheets via API and redirect to payment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar dados silenciosamente para a planilha
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          formacao: formData.formacao,
          cep: formData.cep,
          cidade: formData.cidade,
          estado: formData.estado,
          area: formData.area,
        }),
      }).catch((err) => console.error("Erro ao salvar dados:", err));

      // Resetar formulário
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        formacao: "",
        cep: "",
        cidade: "",
        estado: "",
        area: "",
      });

      // Redirecionar imediatamente para o link de pagamento
      window.location.href = PAYMENT_URL;
    } catch (error) {
      console.error("Erro:", error);
      setIsSubmitting(false);
      // Mesmo com erro, redireciona para pagamento
      window.location.href = PAYMENT_URL;
    }
  };

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#0d1117] rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-800"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Quero a Calculadora!
              </h2>
              <p className="text-white/80 text-sm sm:text-base">
                Preencha seus dados para finalizar a compra
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white placeholder-gray-500 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white placeholder-gray-500 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsapp: formatPhone(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white placeholder-gray-500 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>

              {/* Formação */}
              <div>
                <label
                  htmlFor="formacao"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Formação
                </label>
                <select
                  id="formacao"
                  required
                  value={formData.formacao}
                  onChange={(e) =>
                    setFormData({ ...formData, formacao: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#161b22]">Selecione...</option>
                  <option value="Produtor" className="bg-[#161b22]">Produtor</option>
                  <option value="Agrônomo" className="bg-[#161b22]">Agrônomo</option>
                  <option value="Agrônomo e produtor" className="bg-[#161b22]">Agrônomo e produtor</option>
                </select>
              </div>

              {/* CEP */}
              <div>
                <label
                  htmlFor="cep"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  CEP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cep"
                    required
                    value={formData.cep}
                    onChange={(e) => handleCEPChange(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-[#161b22] border ${
                      cepError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-700 focus:border-[#4CAF50] focus:ring-[#4CAF50]/20"
                    } text-white placeholder-gray-500 focus:ring-2 outline-none transition-all pr-10`}
                    placeholder="00000-000"
                    maxLength={9}
                  />
                  {isLoadingCEP && (
                    <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 animate-spin" />
                  )}
                  {formData.cidade && !isLoadingCEP && (
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4CAF50]" />
                  )}
                </div>
                {cepError && (
                  <p className="text-red-400 text-sm mt-1">{cepError}</p>
                )}
              </div>

              {/* Cidade e Estado */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="cidade"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    required
                    value={formData.cidade}
                    onChange={(e) =>
                      setFormData({ ...formData, cidade: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white placeholder-gray-500 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all"
                    placeholder="Sua cidade"
                  />
                </div>
                <div>
                  <label
                    htmlFor="estado"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    id="estado"
                    required
                    value={formData.estado}
                    onChange={(e) =>
                      setFormData({ ...formData, estado: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white placeholder-gray-500 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all"
                    placeholder="UF"
                    maxLength={2}
                  />
                </div>
              </div>

              {/* Área */}
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Área
                </label>
                <select
                  id="area"
                  required
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#161b22]">Selecione...</option>
                  <option value="Até 100 ha" className="bg-[#161b22]">Até 100 ha</option>
                  <option value="101-200 ha" className="bg-[#161b22]">101-200 ha</option>
                  <option value="201-1000 ha" className="bg-[#161b22]">201-1000 ha</option>
                  <option value="Acima de 1000 ha" className="bg-[#161b22]">Acima de 1000 ha</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4CAF50] hover:bg-[#2E7D32] disabled:bg-[#4CAF50]/50 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/30 flex items-center justify-center gap-2 mt-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Comprar agora - R$ 197,00"
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                Pagamento 100% seguro. Seus dados estão protegidos.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
