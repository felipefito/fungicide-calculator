"use client";

import { motion } from "framer-motion";
import { RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Correção Inteligente
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
              Se o programa falhar,{" "}
              <span className="text-green-400">a calculadora corrige</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nossa ferramenta não apenas avalia seu programa, mas também
              identifica pontos fracos e sugere melhorias para maximizar a
              eficiência do controle de doenças.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-800/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Identifica Problemas
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Detecta falhas no programa como intervalos inadequados ou
                    produtos incompatíveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-800/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Sugere Alterações
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Recomenda ajustes específicos para melhorar a eficácia do
                    seu programa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-800/50 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Valida Resultados
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Confirma quando seu programa está otimizado e pronto para
                    aplicação.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
              {/* Mock Program Analysis */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">
                    Análise do Programa
                  </h4>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Nota: 8.5
                  </span>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Eficiência Geral</span>
                      <span className="text-green-400">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Cobertura de Doenças</span>
                      <span className="text-green-400">92%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Custo-Benefício</span>
                      <span className="text-amber-400">78%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Alert */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-amber-200 text-sm font-medium">
                        Sugestão de Melhoria
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Considere adicionar um fungicida com ação protetora na
                        2ª aplicação para melhorar o custo-benefício.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
