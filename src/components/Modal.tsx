"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Check, MapPin } from "lucide-react";
import { fetchCEP, formatCEP, type ViaCEPResponse } from "@/lib/viacep";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  cidade: string;
  estado: string;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    cidade: "",
    estado: "",
  });
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);
  const [cepError, setCepError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after success
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        cep: "",
        cidade: "",
        estado: "",
      });
    }, 2000);
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
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cadastro Realizado!
                </h3>
                <p className="text-gray-500">
                  Em breve entraremos em contato com você.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">Quero a Calculadora!</h2>
                  <p className="text-white/80">
                    Preencha seus dados para finalizar a compra
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefone/WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          telefone: formatPhone(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                    />
                  </div>

                  {/* CEP */}
                  <div>
                    <label
                      htmlFor="cep"
                      className="block text-sm font-medium text-gray-700 mb-1"
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
                        className={`w-full px-4 py-3 rounded-xl border ${
                          cepError
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-200 focus:border-green-500 focus:ring-green-500/20"
                        } focus:ring-2 outline-none transition-all pr-10`}
                        placeholder="00000-000"
                        maxLength={9}
                      />
                      {isLoadingCEP && (
                        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
                      )}
                      {formData.cidade && !isLoadingCEP && (
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    {cepError && (
                      <p className="text-red-500 text-sm mt-1">{cepError}</p>
                    )}
                  </div>

                  {/* Cidade e Estado */}
                  {formData.cidade && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cidade
                        </label>
                        <input
                          type="text"
                          value={formData.cidade}
                          readOnly
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Estado
                        </label>
                        <input
                          type="text"
                          value={formData.estado}
                          readOnly
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>Finalizar Compra - R$ 197,00</>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    Pagamento 100% seguro. Seus dados estão protegidos.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
