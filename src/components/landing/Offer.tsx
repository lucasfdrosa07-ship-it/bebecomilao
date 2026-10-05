import { motion } from 'motion/react';
import { Check, Gift, Stethoscope, ShieldCheck, Clock } from 'lucide-react';
import amandaImg from '@/assets/amanda.png.asset.json';
import { useTrackedCheckoutUrl } from '@/lib/utm';

interface OfferProps {
  checkoutEssencial: string;
  checkoutCompleto: string;
  imagemBonus?: string;
  nomeProfissional?: string;
  credenciaisProfissional?: string;
}

export default function Offer({ 
  checkoutEssencial, 
  checkoutCompleto, 
}: OfferProps) {
  return (
    <section id="oferta" className="py-16 md:py-24 px-4 sm:px-6 bg-white scroll-mt-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          {/* BADGE OFERTA LIMITADA */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#FB7185] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Clock className="w-3.5 h-3.5" />
            <span>OFERTA LIMITADA</span>
          </div>

          {/* AVISO PULSANTE / PISCANDO EM DESTAQUE */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-rose-600 animate-pulse tracking-wide uppercase">
              A oferta expira em minutos, não saia da página!
            </span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#292524] mb-3 tracking-tight text-balance"
          >
            Escolha como você quer começar.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#78716C]"
          >
            Tenha acesso ao conteúdo digital e escolha entre o Kit Essencial ou o Kit Completo.
          </motion.p>
        </div>
        
        {/* Grid de Ofertas */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* 1. KIT ESSENCIAL */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-[#FFFDFB] border border-[#E7E5E4] rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A8A29E]">Opção de Entrada</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#292524] mt-1">KIT ESSENCIAL</h3>
                <p className="text-sm text-[#78716C] mt-1">Para quem quer começar com o essencial.</p>
              </div>

              <div className="py-5 border-y border-[#F3E8DF] my-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[#78716C]">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#292524] tracking-tight">10,90</span>
                </div>
                <span className="text-xs text-[#A8A29E] mt-1 block">Acesso digital imediato</span>
              </div>

              {/* TÍTULO EM DESTAQUE */}
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                  VOCÊ RECEBE:
                </span>
              </div>

              <ul className="space-y-3.5 mb-6 text-sm text-[#292524]">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">365 receitas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Organização por fase/momento</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Lista de compras</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Acesso digital</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            <div>
              {/* MOCKUP DO KIT ESSENCIAL */}
              <div className="my-4 flex items-center justify-center">
                <img 
                  src="/__l5e/assets-v1/433b00f2-df5f-4f1a-91c3-37cf47dfae7a/mockup1.webp" 
                  alt="Mockup Kit Essencial - Bebê Comilão"
                  className="w-full max-w-[200px] sm:max-w-[230px] max-h-48 sm:max-h-52 object-contain rounded-xl drop-shadow-md mx-auto"
                  loading="lazy"
                   decoding="async"
                />
              </div>

              <a 
                href={withTrackingParams(checkoutEssencial)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-[#292524] bg-stone-100 hover:bg-stone-200 border border-stone-300 shadow-sm transition-all active:scale-[0.99] text-center"
              >
                QUERO O KIT ESSENCIAL
              </a>
            </div>
          </motion.div>

          {/* 2. KIT COMPLETO */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 bg-[#FFFDFB] border-2 border-[#FB7185] rounded-2xl shadow-xl relative flex flex-col justify-between"
          >
            {/* BADGE: MAIS COMPLETO */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FB7185] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
              MAIS COMPLETO
            </div>

            <div>
              <div className="mb-4 mt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FB7185]">Recomendado para a rotina</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#292524] mt-1">KIT COMPLETO</h3>
                <p className="text-sm text-[#78716C] mt-1">Para quem quer mais recursos para organizar a rotina.</p>
              </div>

              <div className="py-5 border-y border-[#FCEFEA] my-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[#78716C]">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#FB7185] tracking-tight">27,90</span>
                </div>
                <span className="text-xs text-[#A8A29E] mt-1 block">Acesso digital imediato</span>
              </div>

              {/* TÍTULO EM DESTAQUE */}
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FB7185]">
                  VOCÊ RECEBE:
                </span>
              </div>

              <ul className="space-y-3.5 mb-6 text-sm text-[#292524]">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Tudo do Kit Essencial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Cardápio da Semana</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Guia de Organização</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Material complementar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold">Garantia de 7 dias</span>
                </li>
              </ul>

              {/* BÔNUS ESPECIAL */}
              <div className="p-4 bg-gradient-to-br from-[#FFF5F3] to-[#FEEDE8] border border-[#FCD9CF] rounded-xl mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FB7185] mb-2">
                  <Gift className="w-4 h-4 text-[#FB7185]" />
                  <span>BÔNUS ESPECIAL INCLUSO</span>
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-sm sm:text-base text-[#292524]">
                    Guia de Introdução Alimentar na Prática
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-relaxed">
                    Um material complementar para ajudar você a entender melhor essa fase e tomar decisões com mais segurança no dia a dia.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* MOCKUP DO KIT COMPLETO */}
              <div className="my-4 flex items-center justify-center">
                <img 
                  src="/__l5e/assets-v1/ef156190-e0d9-4504-9c7f-4d83cae8801c/mockup2.webp" 
                  alt="Mockup Kit Completo - Bebê Comilão"
                  className="w-full max-w-[200px] sm:max-w-[230px] max-h-48 sm:max-h-52 object-contain rounded-xl drop-shadow-md mx-auto"
                  loading="lazy"
                   decoding="async"
                />
              </div>

              <a 
                href={withTrackingParams(checkoutCompleto)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-[#FB7185] hover:bg-[#F43F5E] shadow-lg hover:shadow-xl transition-all active:scale-[0.99] text-center"
              >
                QUERO O KIT COMPLETO
              </a>
            </div>
          </motion.div>
        </div>

        {/* BULLET DE GARANTIA INCONDICIONAL DE 7 DIAS */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-2xl mx-auto p-5 sm:p-6 bg-[#FFFDFB] rounded-2xl border-2 border-emerald-500/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#292524] mb-1">
              Garantia incondicional de 7 dias
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Baixe o material, veja as receitas, use a lista de compras, monte seu cardápio. Se em até 7 dias você achar que não valeu, é só nos chamar e devolvemos cada centavo.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#292524] mt-1">
              Sem letras miúdas. Sem julgamento. Você decide.
            </p>
          </div>
        </motion.div>

        {/* APOIO PROFISSIONAL FACTUAL */}
        <div className="mt-8 max-w-2xl mx-auto p-5 sm:p-6 bg-[#FAF6F3] rounded-2xl border border-[#F3E8DF] flex items-start gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#FFF1EE] text-[#FB7185] flex items-center justify-center shrink-0 mt-0.5">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-[#292524] mb-1">
              Conteúdo desenvolvido com apoio profissional
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Para tornar o material mais responsável e adequado à fase de alimentação infantil, o conteúdo contou com apoio de uma profissional que atua como pediatra e nutricionista.
            </p>
          </div>
        </div>

        {/* QUEM SOU EU? */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl mx-auto p-6 sm:p-8 bg-[#FFFDFB] rounded-2xl border border-[#F3E8DF] shadow-sm text-left"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={amandaImg.url}
              alt="Amanda, criadora do Bebê Comilão"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0 border-2 border-[#FCD9CF] shadow-md"
              loading="lazy"
              decoding="async"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#292524] tracking-tight">
                QUEM SOU EU?
              </h3>
              <p className="text-sm font-bold text-[#FB7185] mt-0.5">
                Por trás do Bebê Comilão
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
            <p>
              Eu sou a Amanda, e o Bebê Comilão nasceu de uma necessidade que muitas mães conhecem bem: <span className="font-semibold text-[#292524]">"O que eu vou preparar para meu bebê comer hoje?"</span>
            </p>
            <p>
              No começo, percebi que a introdução alimentar podia ser muito mais cansativa do que deveria. Entre pesquisar receitas, pensar em opções diferentes, organizar as compras e tentar oferecer uma alimentação variada, muitas mães acabam se sentindo perdidas, sem saber por onde começar.
            </p>
            <p className="font-semibold text-[#292524]">
              Foi justamente por isso que criei o Bebê Comilão.
            </p>
            <p>
              Reuni em um só lugar centenas de ideias de receitas e materiais práticos para ajudar as mães a terem mais organização na rotina e menos dúvidas na hora de preparar as refeições dos pequenos.
            </p>
            <p>
              E esse projeto não foi pensado apenas com base na minha experiência. O conteúdo foi desenvolvido com apoio profissional de pediatria e nutrição, buscando trazer informações e sugestões de forma mais responsável e alinhada às necessidades dessa fase tão importante.
            </p>
            <p>
              O Bebê Comilão foi criado para a mãe que quer cuidar da alimentação do seu bebê, mas não quer passar horas todos os dias tentando descobrir o que preparar.
            </p>
            <p className="font-bold text-[#292524]">
              Mais ideias. Mais organização. Menos improviso. E uma rotina muito mais leve na hora de alimentar seu bebê.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
