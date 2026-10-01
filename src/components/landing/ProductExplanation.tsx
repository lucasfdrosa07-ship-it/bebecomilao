import { motion } from 'motion/react';
import { BookmarkX, CheckCircle2, FolderHeart, Sparkles } from 'lucide-react';

export default function ProductExplanation() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF5F0] border-y border-[#F3E8DF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292524] mb-3 tracking-tight"
          >
            Você não precisa de mais receitas salvas no celular.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl font-semibold text-[#FB7185] mb-4"
          >
            Precisa de opções organizadas para saber por onde começar.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#57534E] leading-relaxed"
          >
            O Bebê Comilão reúne 365 receitas em um só lugar para ajudar você a encontrar ideias de preparo, variar as refeições e organizar melhor a alimentação do seu bebê.
          </motion.p>
        </div>

        {/* Comparativo Visual Simples e Elegante */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {/* Card Antes / Dor */}
          <div className="p-6 rounded-2xl bg-white/70 border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500 mb-4">
                <BookmarkX className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#292524] text-base mb-2">
                A rotina de improvisar
              </h3>
              <p className="text-sm text-[#78716C] leading-relaxed">
                Dezenas de prints no celular, pastas salvas no Instagram que você nunca encontra na hora e a dúvida diária de não saber o que oferecer.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-stone-100 text-xs font-medium text-stone-500">
              Cansaço mental antes de cada refeição
            </div>
          </div>

          {/* Card Solução Bebê Comilão */}
          <div className="p-6 rounded-2xl bg-white border border-[#FED7AA] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FED7AA]/25 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FFF1EE] flex items-center justify-center text-[#FB7185] mb-4">
                <FolderHeart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#292524] text-base mb-2 flex items-center gap-2">
                Com o Bebê Comilão
                <Sparkles className="w-4 h-4 text-[#FB7185]" />
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Opções reunidas por fase, receitas diretas ao ponto e facilidade para abrir e saber o que preparar na hora, sem perder tempo procurando.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#F3E8DF] flex items-center gap-1.5 text-xs font-semibold text-[#FB7185]">
              <CheckCircle2 className="w-4 h-4" />
              Praticidade em um único lugar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
