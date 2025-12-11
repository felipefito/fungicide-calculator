"use client";

import { motion } from "framer-motion";
import { History as HistoryIcon, BookOpen, TrendingUp, Calendar } from "lucide-react";

export default function History() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl blur-3xl opacity-50" />
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              {/* Mock History List */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <HistoryIcon className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Histórico de Programas
                </h4>
              </div>

              <div className="space-y-4">
                {[
                  {
                    date: "15/11/2024",
                    name: "Programa Safra 24/25",
                    score: 9.2,
                  },
                  {
                    date: "10/10/2024",
                    name: "Teste Variação A",
                    score: 7.8,
                  },
                  {
                    date: "05/10/2024",
                    name: "Programa Original",
                    score: 6.5,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <Calendar className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.score >= 8
                          ? "bg-green-100 text-green-700"
                          : item.score >= 7
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.score}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Total de programas</span>
                  <span className="font-semibold text-gray-900">
                    12 salvos
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Aprenda com o Passado
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Histórico como{" "}
              <span className="text-green-600">Guia de Manejo</span>
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Mantenha um registro completo de todos os programas criados e use
              esse conhecimento para aprimorar suas decisões nas próximas
              safras.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Registro Completo
                  </h4>
                  <p className="text-gray-500">
                    Salve todos os programas testados com suas respectivas notas
                    e análises detalhadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Evolução Contínua
                  </h4>
                  <p className="text-gray-500">
                    Acompanhe a evolução das suas estratégias e identifique
                    padrões de sucesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <HistoryIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Acesso Rápido
                  </h4>
                  <p className="text-gray-500">
                    Recupere programas anteriores com um clique e reutilize
                    estratégias comprovadas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
