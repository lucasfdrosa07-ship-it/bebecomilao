import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "A partir de qual idade posso usar o material?", 
      a: "O material foi estruturado para a fase de introdução alimentar, indicada a partir de aproximadamente 6 meses (com os sinais de prontidão do bebê). Ele reúne preparações para acompanhar as diferentes etapas dessa fase." 
    },
    { 
      q: "Preciso comprar ingredientes difíceis de encontrar?", 
      a: "Não. As 365 receitas priorizam ingredientes acessíveis e do dia a dia, encontrados facilmente em feiras e supermercados comuns, focando em comida prática e real." 
    },
    { 
      q: "Posso acessar pelo celular?", 
      a: "Sim. O acesso é 100% digital. Você pode abrir o material no celular, tablet ou computador sempre que precisar consultar ideias antes de ir para a cozinha." 
    },
    { 
      q: "As receitas são para BLW ou também existem outras formas de preparo?", 
      a: "O material traz variedade de formas de preparo e texturas adequadas para as diferentes fases, permitindo que você adapte à forma de introdução alimentar que preferir seguir na sua casa." 
    },
    { 
      q: "E se meu bebê tiver alguma alergia alimentar?", 
      a: "Casos de alergia alimentar confirmada ou suspeita exigem acompanhamento e orientação individualizada de pediatra ou nutricionista. O material tem finalidade informativa e prática de receitas e não substitui a conduta clínica do profissional que acompanha seu filho." 
    },
    { 
      q: "Como recebo o material depois da compra?", 
      a: "Assim que o pagamento for confirmado pela plataforma de checkout, os dados e instruções de acesso são enviados diretamente para o seu e-mail cadastrado na hora da compra." 
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF6F3]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FB7185] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#292524] tracking-tight text-balance">
            Antes de começar, talvez você esteja se perguntando…
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="border border-[#EFE5DC] bg-white rounded-xl overflow-hidden shadow-xs transition-colors"
              >
                <button 
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#292524] hover:bg-stone-50/70 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#A8A29E] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FB7185]' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#F5EBE6]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
