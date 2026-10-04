import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Smartphone } from 'lucide-react';
import heroMockup from '@/assets/hero-mockup.png.asset.json';

export default function Hero() {

  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* LOGOTIPO */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-5 md:mb-6"
      >
        <img 
          src="/__l5e/assets-v1/acc518fa-15c4-4af2-8a04-6207582a1112/logo.png"
          alt="Bebê Comilão"
          width="640"
          height="427"
          className="h-11 sm:h-14 md:h-16 w-auto object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* 1. HEADLINE */}
      <motion.h1 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#292524] mb-6 md:mb-8 tracking-tight leading-snug md:leading-tight max-w-3xl mx-auto text-balance"
      >
        +365 receitas com ferro, vitaminas e texturas certas para o seu bebê com mais de 6 meses crescer saudável — e você já saber o que preparar para ele todos os dias.
      </motion.h1>

      {/* Mockup principal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-6 md:mb-8"
      >
        <img
          src={heroMockup.url}
          alt="Mulher ao lado da coleção de livros e guias Bebê Comilão"
          width="1774"
          height="887"
          className="w-full max-w-[560px] h-auto object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* 3. SUBHEADLINE */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-[#57534E] mb-5 max-w-2xl mx-auto leading-relaxed"
      >
        Seu bebê merece mais que papinha pronta e repetição. São 365 receitas organizadas por fase, com apoio de pediatra e nutricionista, para você variar as refeições, parar de decidir tudo do zero e planejar a semana com mais clareza, mesmo com a rotina corrida.
      </motion.p>

      {/* 4. LINHA DE CONFIANÇA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#78716C] mb-8"
      >
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FB7185]" />
          365 receitas
        </span>
        <span aria-hidden="true" className="text-[#D6D3D1]">•</span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FB7185]" />
          Organização prática
        </span>
        <span aria-hidden="true" className="text-[#D6D3D1]">•</span>
        <span className="inline-flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-[#FB7185]" />
          Acesso digital
        </span>
      </motion.div>

      {/* Primeiro botão de compra */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="#oferta"
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-4.5 bg-[#FB7185] hover:bg-[#F43F5E] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.99] tracking-wide"
        >
          QUERO ORGANIZAR AS REFEIÇÕES DO MEU BEBÊ
        </a>
      </motion.div>
    </section>
  );
}
