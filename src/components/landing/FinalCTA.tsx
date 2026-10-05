import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useTrackedCheckoutUrl } from '@/lib/utm';

interface FinalCTAProps {
  checkoutEssencial: string;
  checkoutCompleto: string;
}

export default function FinalCTA({ checkoutEssencial, checkoutCompleto }: FinalCTAProps) {
  const urlEssencial = useTrackedCheckoutUrl(checkoutEssencial);
  const urlCompleto = useTrackedCheckoutUrl(checkoutCompleto);
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] to-[#FFF1EE] border-t border-[#F3E8DF]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#292524] mb-3 tracking-tight text-balance"
        >
          Chega de começar cada refeição do zero.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-[#57534E] mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Tenha 365 receitas e materiais para ajudar você a organizar melhor a alimentação do seu bebê.
        </motion.p>

        {/* 2 CTAs Independentes com seus respectivos links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={urlEssencial}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-[#292524] bg-white hover:bg-stone-50 border border-[#D6D3D1] shadow-sm hover:shadow transition-all active:scale-[0.99]"
          >
            QUERO O KIT ESSENCIAL — R$ 10,90
          </a>

          <a
            href={urlCompleto}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#FB7185] hover:bg-[#F43F5E] shadow-lg hover:shadow-xl transition-all active:scale-[0.99]"
          >
            <span>QUERO O KIT COMPLETO — R$ 27,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
